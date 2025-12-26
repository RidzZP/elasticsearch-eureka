const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbKomplainc', {
    komplainId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'komplain_id'
    },
    addDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'add_date'
    },
    komplain: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    picCs: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'pic_cs'
    },
    picIt: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'pic_it'
    },
    user: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    namaUser: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'nama_user'
    },
    solusi: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    updateDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'update_date'
    }
  }, {
    sequelize,
    tableName: 'db_komplaincs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "komplain_id" },
        ]
      },
    ]
  });
};
