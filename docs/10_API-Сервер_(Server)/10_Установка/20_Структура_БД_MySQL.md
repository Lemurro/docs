# Структура БД MySQL
Минимально необходимый набор таблиц:
```mysql
-- Коды аутентификации
CREATE TABLE IF NOT EXISTS `auth_codes` (
  `id` BIGINT(22) NOT NULL AUTO_INCREMENT,
  `auth_id` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
  `code` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` INT(11) NOT NULL,
  `created_at` DATETIME,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`auth_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Лог действий пользователей
CREATE TABLE IF NOT EXISTS `data_change_logs` (
  `id` BIGINT(22) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `table_name` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
  `action_name` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
  `record_id` INT(11) NULL,
  `data` LONGTEXT,
  `created_at` DATETIME,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- История регистраций
CREATE TABLE IF NOT EXISTS `history_registrations` (
  `id` BIGINT(22) NOT NULL AUTO_INCREMENT,
  `device_uuid` VARCHAR(255) COLLATE utf8_unicode_ci NULL,
  `device_platform` VARCHAR(255) COLLATE utf8_unicode_ci NULL,
  `device_version` VARCHAR(255) COLLATE utf8_unicode_ci NULL,
  `device_manufacturer` VARCHAR(255) COLLATE utf8_unicode_ci NULL,
  `device_model` VARCHAR(255) COLLATE utf8_unicode_ci NULL,
  `created_at` DATETIME,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Сессии пользователей
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` BIGINT(22) NOT NULL AUTO_INCREMENT,
  `session` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` INT(11) NOT NULL,
  `created_at` DATETIME,
  `checked_at` DATETIME,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`session`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Пользователи
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `auth_id` VARCHAR(255) COLLATE utf8_unicode_ci NULL,
  `created_at` DATETIME,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Информация о пользователях (добавляйте любые дополнительные поля)
CREATE TABLE IF NOT EXISTS `info_users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `roles` TEXT,
  `created_at` DATETIME,
  `updated_at` DATETIME,
  `deleted_at` DATETIME,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
```