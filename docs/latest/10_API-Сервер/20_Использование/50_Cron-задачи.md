> **v1.0.0**

# Cron-задачи
Вам необходимо добавить всего лишь одну задачу в `crontab`
```bash
* * * * * /path/to/php /path/to/lemurro-cron.php > /dev/null
```
Каждую минуту будет выполняться файл, который вы создадите ниже и в нём уже будут задачи

Для задач используется библиотека [Jobby](https://github.com/jobbyphp/jobby)

В файле `api/app/Configs/SettingsCron.php` укажите email-адрес, куда отправлять письма с ошибками

## Создайте php-файл
Для примера уже создана одна задача, которая выполняется каждые 5 минут
```php
<?php
/**
 * Запуск cron-задач
 *
 * Добавить в crontab: * * * * * /path/to/php /path/to/lemurro-cron.php > /dev/null
 *
 * @version 29.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

use Lemurro\Api\App\Configs\SettingsCron;
use Lemurro\Api\App\Cron\Cron;
use Lemurro\Api\Core\Cron\Jobby;

date_default_timezone_set('UTC');

require 'api-vendor/autoload.php';

$jobby = Jobby::init();

// Выполняем задачу каждые 5 минут
try {
    $jobby->add('AdditionalOffices', [
        'enabled'  => true,
        'schedule' => '*/5 * * * *', // Каждые 5 минут
        'closure'  => function () {
            $cron = new Cron();
            $dic = $cron->getDIC();

            // Ваш код здесь

            return true;
        },
    ]);
} catch (Exception $e) {
    file_put_contents(SettingsCron::LOG_FILE, $e->getMessage());
}

try {
    $jobby->run();
} catch (Exception $e) {
    file_put_contents(SettingsCron::LOG_FILE, $e->getMessage());
}
```

## Укажите временную зону вашего сервера
```php
date_default_timezone_set('UTC');
```

## Настройте путь до каталога `api-vendor`
```php
require 'api-vendor/autoload.php';
```