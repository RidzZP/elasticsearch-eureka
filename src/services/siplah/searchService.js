const esClient = require("../../utils/elasticsearch");

class SiplahSearchService {
    constructor() {
        this.client = esClient.getClient();
        this.index = "siplah";
    }

    /**
     * Search products in Siplah index
     * @param {string} q - Search query
     * @param {number} page - Page number (default: 1)
     * @param {number} size - Items per page (default: 10)
     * @param {Object} filters - Optional filters
     * @param {string} filters.mallId - Mall ID filter
     * @param {number} filters.minPrice - Minimum price filter
     * @param {number} filters.maxPrice - Maximum price filter
     * @param {number} filters.minRating - Minimum rating filter
     * @param {number} filters.maxRating - Maximum rating filter
     * @param {string} filters.manufacturerId - Manufacturer ID filter
     * @param {string} filters.province - Province filter
     * @param {string} filters.availability - Availability filter
     * @param {string} filters.produksi - Produksi filter
     * @param {string} filters.categoryId - Category ID filter
     * @returns {Promise<Object>} Search results with pagination
     */
    async searchProducts(q = "", page = 1, size = 10, filters = {}) {
        try {
            const from = (page - 1) * size;
            const {
                mallId,
                minPrice,
                maxPrice,
                minRating,
                maxRating,
                manufacturerId,
                province,
                availability,
                produksi,
                categoryId,
            } = filters;

            // Build price range filter
            const priceFilter = [];
            if (minPrice !== undefined || maxPrice !== undefined) {
                const priceRange = { range: { price: {} } };
                if (minPrice !== undefined) priceRange.range.price.gte = minPrice;
                if (maxPrice !== undefined) priceRange.range.price.lte = maxPrice;
                priceFilter.push(priceRange);
            }

            // Build rating range filter
            const ratingFilter = [];
            if (minRating !== undefined || maxRating !== undefined) {
                const ratingRange = { range: { rating: {} } };
                if (minRating !== undefined) ratingRange.range.rating.gte = minRating;
                if (maxRating !== undefined) ratingRange.range.rating.lte = maxRating;
                ratingFilter.push(ratingRange);
            }

            // Build Elasticsearch query with validation filters
            const searchQuery = {
                bool: {
                    must: [
                        // Search in name and model fields
                        q
                            ? {
                                  multi_match: {
                                      query: q,
                                      fields: ["name^2", "model", "description"],
                                      type: "best_fields",
                                      operator: "or",
                                      fuzziness: "AUTO",
                                  },
                              }
                            : { match_all: {} },
                    ],
                    filter: [
                        // id_user_approve != 0
                        {
                            range: {
                                id_user_approve: {
                                    gt: 0,
                                },
                            },
                        },
                        // status != 0
                        {
                            bool: {
                                must_not: {
                                    term: {
                                        "status.keyword": "0",
                                    },
                                },
                            },
                        },
                        // blokir != 1
                        {
                            bool: {
                                must_not: {
                                    term: {
                                        blokir: 1,
                                    },
                                },
                            },
                        },
                        // disabled = 'N'
                        {
                            term: {
                                "disabled.keyword": "N",
                            },
                        },
                        // hapus = 'N'
                        {
                            term: {
                                "hapus.keyword": "N",
                            },
                        },
                        // mall_id filter (optional)
                        ...(mallId
                            ? [
                                  {
                                      term: {
                                          mall_id: mallId,
                                      },
                                  },
                              ]
                            : []),
                        // price range filter
                        ...priceFilter,
                        // rating range filter
                        ...ratingFilter,
                        // manufacturer_id filter (optional)
                        ...(manufacturerId
                            ? [
                                  {
                                      term: {
                                          manufacturer_id: manufacturerId,
                                      },
                                  },
                              ]
                            : []),
                        // province filter (optional) - search in mall.province or location
                        ...(province
                            ? [
                                  {
                                      match: {
                                          location: province,
                                      },
                                  },
                              ]
                            : []),
                        // availability filter (optional)
                        ...(availability
                            ? [
                                  {
                                      term: {
                                          "availability.keyword": availability,
                                      },
                                  },
                              ]
                            : []),
                        // produksi filter (optional)
                        ...(produksi
                            ? [
                                  {
                                      term: {
                                          "produksi.keyword": produksi,
                                      },
                                  },
                              ]
                            : []),
                        // category filter (optional) - search in category hierarchy
                        // Note: categoryChildren and grandCategoryChildren are stored as object arrays (not nested)
                        ...(categoryId
                            ? [
                                  {
                                      bool: {
                                          should: [
                                              // Search in parent category (keyword type)
                                              {
                                                  term: {
                                                      "category.value.keyword":
                                                          categoryId,
                                                  },
                                              },
                                              // Search in categoryChildren (object array - flattened)
                                              {
                                                  term: {
                                                      "categoryChildren.value.keyword":
                                                          categoryId,
                                                  },
                                              },
                                              // Search in grandCategoryChildren (object array - flattened)
                                              {
                                                  term: {
                                                      "grandCategoryChildren.value.keyword":
                                                          categoryId,
                                                  },
                                              },
                                          ],
                                          minimum_should_match: 1,
                                      },
                                  },
                              ]
                            : []),
                    ],
                },
            };

            // Execute search with specific source fields
            const response = await this.client.search({
                index: this.index,
                body: {
                    query: searchQuery,
                    from: from,
                    size: size,
                    _source: [
                        "product_id",
                        "name",
                        "model",
                        "slug",
                        "image",
                        "price",
                        "dpp_price",
                        "ppn_price",
                        "dpp_nilai_lain",
                        "pph_price",
                        "kondisi",
                        "date_added",
                        "ppn_type",
                        "category",
                        "categoryChildren",
                        "grandCategoryChildren",
                        "categoryLevel",
                        "mall",
                        "meta_description",
                        "meta_keyword",
                        "tag",
                        "seo",
                    ],
                    sort: [{ _score: "desc" }, { date_added: "desc" }],
                },
            });

            // Format response
            const hits = response.hits.hits.map((hit) => ({
                id: hit._source.product_id,
                name: hit._source.name,
                model: hit._source.model,
                slug: hit._source.slug,
                image: `https://cdn.eurekabookhouse.co.id/ebh/product/all/${hit._source.image}`,
                price: hit._source.price,
                dpp_price: hit._source.dpp_price,
                ppn_price: hit._source.ppn_price,
                dpp_nilai_lain: hit._source.dpp_nilai_lain,
                pph_price: hit._source.pph_price,
                kondisi: hit._source.kondisi,
                date_added: hit._source.date_added,
                ppn_type: hit._source.ppn_type,
                category: hit._source.category,
                categoryChildren: hit._source.categoryChildren
                    ? hit._source.categoryChildren.filter(
                          (child) => child.isSelected === true
                      )
                    : [],
                grandCategoryChildren: hit._source.grandCategoryChildren
                    ? hit._source.grandCategoryChildren.filter(
                          (child) => child.isSelected === true
                      )
                    : [],
                categoryLevel: hit._source.categoryLevel,
                mall: hit._source.mall,
                meta_description: hit._source.meta_description,
                meta_keyword: hit._source.meta_keyword,
                tag: hit._source.tag,
                seo: hit._source.seo,
                rating: 0.0, // Static rating for now
            }));

            const total = response.hits.total.value;
            const totalPages = Math.ceil(total / size);

            return {
                data: hits,
                pagination: {
                    page: parseInt(page),
                    size: parseInt(size),
                    total: total,
                    totalPages: totalPages,
                },
            };
        } catch (error) {
            console.error("Error searching Siplah products:", error);
            throw {
                success: false,
                message: "Failed to search products",
                error: error.message,
            };
        }
    }

    /**
     * Search providers in Siplah-Providers index
     * @param {string} q - Search query
     * @param {number} page - Page number (default: 1)
     * @param {number} size - Items per page (default: 10)
     * @returns {Promise<Object>} Search results with pagination
     */
    async searchProviders(q = "", page = 1, size = 10) {
        try {
            const from = (page - 1) * size;

            // Build Elasticsearch query
            const searchQuery = q
                ? {
                      multi_match: {
                          query: q,
                          fields: [
                              "nama_perusahaan^2",
                              "nama_merk^2",
                              "mall_code",
                              "nama_pic",
                          ],
                          type: "best_fields",
                          operator: "or",
                          fuzziness: "AUTO",
                      },
                  }
                : { match_all: {} };

            // Execute search with specific source fields
            const response = await this.client.search({
                index: "siplah-providers",
                body: {
                    query: searchQuery,
                    from: from,
                    size: size,
                    _source: [
                        "mall_id",
                        "mall_code",
                        "mall_type",
                        "nama_perusahaan",
                        "nama_merk",
                        "slug",
                        "image",
                        "nama_pic",
                        "jenis",
                        "jenis_usaha",
                        "address",
                        "province",
                        "city",
                        "zone_1",
                        "kelurahan",
                        "postcode",
                        "lat",
                        "lon",
                    ],
                    sort: [{ date_register: "desc" }],
                },
            });

            // Format response
            const hits = response.hits.hits.map((hit) => ({
                id: hit._source.mall_id,
                code: hit._source.mall_code,
                type: hit._source.mall_type,
                name: hit._source.nama_perusahaan || hit._source.nama_merk,
                slug: hit._source.slug,
                images: hit._source.image,
                namaPic: hit._source.nama_pic,
                jenis: hit._source.jenis,
                jenisUsaha: hit._source.jenis_usaha,
                address: hit._source.address,
                province: hit._source.province,
                city: hit._source.city,
                zone: hit._source.zone_1,
                subdistrict: hit._source.kelurahan,
                postCode: hit._source.postcode,
                lat: hit._source.lat,
                lon: hit._source.lon,
            }));

            const total = response.hits.total.value;
            const totalPages = Math.ceil(total / size);

            return {
                data: hits,
                pagination: {
                    page: parseInt(page),
                    size: parseInt(size),
                    total: total,
                    totalPages: totalPages,
                },
            };
        } catch (error) {
            console.error("Error searching Siplah providers:", error);
            throw {
                success: false,
                message: "Failed to search providers",
                error: error.message,
            };
        }
    }
}

module.exports = new SiplahSearchService();
