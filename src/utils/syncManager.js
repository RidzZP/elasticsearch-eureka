class SyncManager {
    constructor() {
        this.runningSyncs = new Map(); // Map to track running sync operations
    }

    /**
     * Start a sync operation
     * @param {string} syncType - Type of sync (siplah, eurekabookhouse, etc.)
     * @param {Function} stopCallback - Callback function to stop the sync
     */
    startSync(syncType, stopCallback) {
        const existingSync = this.runningSyncs.get(syncType);

        // Check if sync is already running (not just exists in map)
        if (existingSync && existingSync.status === "running") {
            throw new Error(`Sync ${syncType} is already running`);
        }

        this.runningSyncs.set(syncType, {
            startedAt: new Date(),
            status: "running",
            stopCallback: stopCallback,
        });

        console.log(`🔄 Started sync: ${syncType}`);
    }

    /**
     * Stop a sync operation
     * @param {string} syncType - Type of sync to stop
     */
    stopSync(syncType) {
        const syncInfo = this.runningSyncs.get(syncType);

        if (!syncInfo || syncInfo.status !== "running") {
            throw new Error(`Sync ${syncType} is not currently running`);
        }

        if (syncInfo.stopCallback) {
            syncInfo.stopCallback();
        }

        syncInfo.status = "stopped";
        syncInfo.stoppedAt = new Date();

        console.log(`🛑 Stopped sync: ${syncType}`);

        // Remove from map after a short delay to allow for status checks
        setTimeout(() => {
            this.runningSyncs.delete(syncType);
        }, 5000); // 5 seconds

        return true;
    }

    /**
     * Complete a sync operation (called when sync finishes normally)
     * @param {string} syncType - Type of sync that completed
     */
    completeSync(syncType) {
        const syncInfo = this.runningSyncs.get(syncType);

        if (syncInfo) {
            syncInfo.status = "completed";
            syncInfo.completedAt = new Date();
            console.log(`✅ Completed sync: ${syncType}`);

            // Remove from map after a short delay
            setTimeout(() => {
                this.runningSyncs.delete(syncType);
            }, 5000); // 5 seconds
        }
    }

    /**
     * Check if a sync is running
     * @param {string} syncType - Type of sync to check
     */
    isRunning(syncType) {
        const syncInfo = this.runningSyncs.get(syncType);
        return syncInfo && syncInfo.status === "running";
    }

    /**
     * Get status of a sync operation
     * @param {string} syncType - Type of sync to check
     */
    getSyncStatus(syncType) {
        const syncInfo = this.runningSyncs.get(syncType);

        if (!syncInfo) {
            return {
                status: "not_running",
                syncType,
            };
        }

        return {
            syncType,
            status: syncInfo.status,
            startedAt: syncInfo.startedAt,
            stoppedAt: syncInfo.stoppedAt || null,
            duration: syncInfo.stoppedAt
                ? syncInfo.stoppedAt - syncInfo.startedAt
                : Date.now() - syncInfo.startedAt,
        };
    }

    /**
     * Get all sync statuses
     */
    getAllSyncStatuses() {
        const statuses = {};

        // Add all known sync types
        const syncTypes = ["siplah", "eurekabookhouse"];

        syncTypes.forEach((syncType) => {
            statuses[syncType] = this.getSyncStatus(syncType);
        });

        return statuses;
    }

    /**
     * Clean up completed syncs (optional - for memory management)
     */
    cleanup() {
        for (const [syncType, syncInfo] of this.runningSyncs.entries()) {
            if (syncInfo.status === "stopped") {
                // Keep stopped syncs for a while, or remove them
                const timeSinceStop = Date.now() - syncInfo.stoppedAt;
                if (timeSinceStop > 3600000) {
                    // 1 hour
                    this.runningSyncs.delete(syncType);
                }
            }
        }
    }
}

module.exports = new SyncManager();
