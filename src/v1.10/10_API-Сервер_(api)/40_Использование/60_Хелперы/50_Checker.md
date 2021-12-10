# Checker - модуль проверок

> Для проверки прав на элементах страницы смотрите [здесь](../../../20_Клиент_Metronic_(web)/20_Использование/40_Проверка_прав_на_элементах_страницы.md)
>
> Для добавления нового права доступа смотрите [здесь](../80_Добавление_права_доступа.md)

Для проверок в системе создан специальный чекер, расположенный в ядре `/src/Checker/Checker.php`

Существует встроенная проверка актуальности сессии.

Также вы можете создавать собственные проверки.

## Проверка актуальности сессии
В месте вашего кода (обычно это в начале запуска контроллера) разместить следующий код:
```php
$checker_checks = [
    'auth' => '',
];
$checker_result = $this->dic['checker']->run($checker_checks);
if (is_array($checker_result) && count($checker_result) == 0) {
    // Проверка успешно пройдена
    // $this->response->setData($result);
} else {
    // При проверке возникли ошибки, вернём их
    $this->response->setData($checker_result);
}

$this->response->send();
```

Также есть возможность напрямую проверить актуальность сессии:
```php
$result_session_check = (new \Lemurro\Api\Core\Session())->check($this->dic['session_id']);
if (isset($result_session_check['errors'])) {
    // Сессия устарела
    $this->response->setData($checker_result);
} else {
    // Проверка успешно пройдена
    // $this->response->setData($result);
}

$this->response->send();
```

## Проверка на роль "Администратор"
Чтобы проверить пользователя только на роль "Администратор" передайте такой массив проверок:
```php
$this->dic['checker']->run([
    'auth' => '',
    'role' => [],
]);

// Проверка успешно пройдена, в ином случае сработает исключение и будет автоматически выброшена соотвествующая ошибка в ответе сервера
```

## Проверка ролей
В месте вашего кода (обычно это в начале запуска контроллера) разместить следующий код:
```php
$checker_checks = [
    'auth' => '',
    'role' => [
        'page'   => 'example',
        'access' => 'create-update',
    ],
];
$checker_result = $this->dic['checker']->run($checker_checks);
if (is_array($checker_result) && count($checker_result) == 0) {
    // Проверка успешно пройдена
    // $this->response->setData($result);
} else {
    // При проверке возникли ошибки, вернём их
    $this->response->setData($checker_result);
}

$this->response->send();
```
Данная проверка посмотрит может ли данный пользователь добавлять и изменять записи `create-update` в разделе `example`

В самом начале проверяется роль администратора, если пользователь администратор, тогда сразу возвращается ответ об успешной проверке