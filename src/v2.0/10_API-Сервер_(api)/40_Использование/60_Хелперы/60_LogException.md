# LogException
Добавление в лог информации о пойманном исключении
```php
use Lemurro\Api\Core\Helpers\LogException;
use Monolog\Logger;

try {
    throw new Exception('Exception example');
} catch (Exception $e) {
    /** @var Logger $log */
    $log = $this->dic['logfactory']->create('LogName');

    LogException::write($log, $e);

    // Получим результат выполнения
    $result = LogException::write($log, $e);
}
```