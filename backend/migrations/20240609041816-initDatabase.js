'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.runSql(`
    CREATE TABLE \`categories\` (
      \`id\` bigint unsigned NOT NULL AUTO_INCREMENT,
      \`name\` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
      \`status\` boolean DEFAULT true,
      \`created_at\` timestamp NULL DEFAULT NULL,
      \`updated_at\` timestamp NULL DEFAULT NULL,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `);
};

exports.down = function(db) {
  return db.runSql(`DROP TABLE \`categories\``);
};

exports._meta = {
  "version": 1
};
