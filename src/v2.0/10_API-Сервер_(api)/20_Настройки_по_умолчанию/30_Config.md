# Config
Про переопределение настроек читайте [здесь](../30_Расширение_функционала/30_Расширение_Config.md)

Вам обязательно понадобится переопределить следующие блоки настроек:
- cors
- database
- file
- guides
- mail

Полный список настроек по умолчанию
```yaml
auth:
  # Вид аутентификации
  #   email: по электронной почте (код через email)
  #   phone: по номеру телефона (код через смс)
  #   mixed: смешанная аутентификация (в поле auth_id может быть email или номер телефона)
  type: "email"

  # Можно ли регистрировать новых пользователей (если при получении кода окажется что такого пользователя нет он будет создан)
  can_registration_users: false

  # Количество генераций новых кодов в день
  attempts_per_day: 50

  # Время устаревания кодов аутентификации (в часах)
  auth_codes_older_than_hours: 2

  # Время устаревания сессий (в днях), сессии которыми не пользовались
  sessions_older_than_hours: 30

  # Привязка сессии к IP-адресу
  sessions_binding_to_ip: false

cors:
  # Белый список доменов клиентов
  #   не рекомендуется использовать "*" и отключать access_control_allow_credentials
  access_control_allow_origin:
    - "http://lemurro-web.localhost"

  # Использовать Access-Control-Allow-Origin
  access_control_allow_credentials: true

cron:
  # Префикс для имён заданий
  #
  # В случае, когда у вас на одном сервере несколько проектов, имена задач обязательно должны отличаться,
  # иначе это приводит к конфликтам при запуске задач
  name_prefix: "MyApp1"

  # Путь до лог-файла
  log_file: "/var/logs/cron.log"

  # Массив email-адресов, куда отправлять письма с ошибками
  errors_emails: []

  # Выполнять (true) или нет (false) cron-задачу: Очистка устаревших токенов для скачивания файлов
  file_older_tokens_enabled: true

  # Выполнять (true) или нет (false) cron-задачу: Очистка устаревших файлов во временном каталоге
  file_older_files_enabled: true

  # Выполнять (true) или нет (false) cron-задачу: Ротация таблицы data_change_logs
  data_change_logs_rotator_enabled: true

database:
  mysql:
    driver: "mysql"
    host: "127.0.0.1"
    port: "3306"
    database: "lemurro"
    username: "root"
    password: ""
    charset: "utf8mb4"
    collation: "utf8mb4_unicode_ci"
    # Опции драйвера
    #
    # 3: 2 => \PDO::ATTR_ERRMODE: \PDO::ERRMODE_EXCEPTION
    # 19: 2 => \PDO::ATTR_DEFAULT_FETCH_MODE: \PDO::FETCH_ASSOC
    # 1002: \PDO::MYSQL_ATTR_INIT_COMMAND
    options: { 3: 2, 19: 2, 1002: "SET NAMES utf8" }

  # pgsql:
  #   driver: "pgsql"
  #   host: "127.0.0.1"
  #   port: "5432"
  #   database: "lemurro"
  #   username: "root"
  #   password: ""
  #   charset: "utf8"
  #   schema: "public"
  #   sslmode: "prefer"

file:
  # Каталог для логов (полный путь, без конечной "/")
  path_logs: "/path/to/project/var/logs"

  # Путь до временного хранилища (полный путь, без конечной "/")
  path_temp: "/path/to/project/var/temp"

  # Путь до постоянного хранилища (полный путь, без конечной "/")
  path_upload: "/path/to/project/var/documents"

  # Полное удаление файлов
  #   true - файл удаляется физически, а также удаляется запись в БД
  #   false - файл физически не удаляется, а в БД помечается как удалённый
  full_remove: false

  # Через сколько дней временный файл считать устаревшим
  outdated_file_days: 5

  # Через сколько часов токен на скачивание файла считать устаревшим
  tokens_older_than_hours: 12

  # Максимальный размер загружаемого файла (в байтах)
  allowed_size_bytes: 2097152 # 2 MB

  # Формат сообщения о превышении лимита размера загружаемого файла
  allowed_size_formated: "2 MB"

  # Режим проверки файла: по типу содержимого (type) или по расширению (ext)
  check_file_by: "type"

  # Массив разрешенных типов
  allowed_types:
    - "application/pdf" # pdf
    - "application/msword" # doc
    - "application/vnd.openxmlformats-officedocument.wordprocessingml.document" # docx
    - "application/vnd.ms-excel" # xls
    - "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" # xlsx
    - "application/zip" # zip
    - "application/x-rar" # rar

  # Массив разрешенных расширений
  allowed_extensions: ["pdf", "doc", "docx", "xls", "xlsx", "zip", "rar"]

general:
  # Вид сервера: разработчика
  const_server_type_dev: &dev "dev"

  # Вид сервера: тестовый
  const_server_type_test: "test"

  # Вид сервера: боевой
  const_server_type_prod: "prod"

  # Имя проекта
  app_name: "Lemurro"

  # Вид сервера
  server_type: *dev

guides:
  # Связка конечных точек маршрута справочников и их namespaces для запуска
  #
  # конечная точка: example (используется в пути: /guide/example)
  #      namespace: Example (полный путь до каталога классов: /app/Guide/Example/)
  classes:
    # example: "Example"

# Список разрешённых заголовков
headers:
  - "X-SESSION-ID" # Идентификатор сессии
  - "X-UTC-OFFSET" # Смещение временной зоны пользователя относительно UTC
  - "X-Requested-With" # Необходим для CORS
  - "X-File-Name" # Необходим для загрузки файлов

mail:
  # ОСНОВНОЙ КАНАЛ

  # Почтовый адрес
  app_email: "no-reply@domain.tld"

  # Отправка через SMTP с авторизацией
  smtp: true

  # Тип протокола (ssl|tls)
  smtp_security: "ssl"

  # Сервер
  smtp_host: "HOST"

  # Порт
  smtp_port: 0

  # Адрес почты
  smtp_username: "no-reply@domain.tld"

  # Пароль от почтового ящика
  smtp_password: "PASSWORD"

  # РЕЗЕРВНЫЙ КАНАЛ (ВСЕГДА SMTP)

  # Включить (true) или выключить (false) отправку через резервный канал, в случае сбоя отправки через основной
  reserve: false

  # Почтовый адрес
  reserve_app_email: "no-reply@domain.tld"

  # Тип протокола (ssl|tls)
  reserve_smtp_security: "ssl"

  # Сервер
  reserve_smtp_host: "HOST"

  # Порт
  reserve_smtp_port: 0

  # Адрес почты
  reserve_smtp_username: "no-reply@domain.tld"

  # Пароль от почтового ящика
  reserve_smtp_password: "PASSWORD"

maintenance:
  # Включить \ Выключить обслуживание проекта
  active: false

  # Сообщение об обслуживании
  message: "Проект временно остановлен на обслуживание, пожалуйста повторите свой запрос через 5 минут или обновите страницу"

sms:
  # API-ключ от аккаунта в sms.ru
  smsru_api_id: "api_id"

  # Отправитель (можно оставить пустым, если не нужен)
  smsru_sender: "SenderName"
```