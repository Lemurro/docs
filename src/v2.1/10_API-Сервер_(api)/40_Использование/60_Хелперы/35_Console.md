# Консольные скрипты
```php
<?php
require 'vendor/autoload.php';

$path_root = __DIR__;
$sql_driver = 'mysql';

$dic = (new \Lemurro\Api\Core\Helpers\Console())->getDIC($path_root);

(new \Lemurro\Api\Core\Helpers\Database())
    ->addConnection($dic['config']['database'][$sql_driver])
    ->connect();

/* ЗДЕСЬ ВАШ КОД */
```
