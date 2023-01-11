# LogException
Добавление в лог информации о пойманном исключении
```php
try {
    throw new Exception('Exception example');
} catch (Exception $e) {
    $log = \Lemurro\Api\Core\Helpers\LoggerFactory::create('Main');
    
    // просто выполним
    \Lemurro\Api\Core\Helpers\LogException::write($log, $e);
    // или получим результат выполнения
    $result = \Lemurro\Api\Core\Helpers\LogException::write($log, $e);
}
```