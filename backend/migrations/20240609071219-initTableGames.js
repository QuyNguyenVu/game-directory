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
    CREATE TABLE \`games\` (
      \`id\` bigint unsigned NOT NULL AUTO_INCREMENT,
      \`name\` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
      \`status\` boolean DEFAULT true,
      \`thumbnail\` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
      \`category_id\` bigint unsigned,
      \`created_at\` timestamp NULL DEFAULT NULL,
      \`updated_at\` timestamp NULL DEFAULT NULL,
      PRIMARY KEY (\`id\`),
      FOREIGN KEY (category_id) REFERENCES categories(id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
