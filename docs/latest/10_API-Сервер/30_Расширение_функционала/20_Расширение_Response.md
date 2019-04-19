> **v1.0.0**

# Расширение Response
Если необходимо что-то изменить в объекте Response, например добавить новые заголовки

Откройте файл `/app/Overrides/Response.php` и добавьте свой код:
```php
$response->headers->set('My-Header', 'My value');
```

Если вам нужно будет добавить элементы в заголовок `Access-Control-Allow-Headers`, обратите внимание, что там уже есть элемент добавленный ядром, поэтому вам необходимо дополнить этот заголовок
```php
$old_headers = $response->headers->get('Access-Control-Allow-Headers');

$new_headers = implode(',', [
    'X-Requested-With',
    'X-File-Name',
]);

$headers = $old_headers . ',' . $new_headers;

$response->headers->set('Access-Control-Allow-Headers', $headers);
```

* Данный код выполняется в ядре перед запуском необходимого контроллера (найденного маршрутизатором)