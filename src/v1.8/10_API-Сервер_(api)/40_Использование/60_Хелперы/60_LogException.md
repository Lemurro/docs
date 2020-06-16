# LogException
Добавление в лог информации о пойманном исключении
```php
use Lemurro\Api\Core\Helpers\LoggerFactory;
use Lemurro\Api\Core\Helpers\LogException;

try {
    throw new Exception('Exception example');
} catch (Exception $e) {
    $log = LoggerFactory::create('Main');
    
    LogException::write($log, $e);
    
    // Получим результат выполнения
    $result = LogException::write($log, $e);
}
```