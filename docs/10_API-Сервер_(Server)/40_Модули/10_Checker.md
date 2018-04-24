# Checker - модуль проверок
Для проверок в системе создан специальный чекер, расположенный в ядре `/src/Checker/Checker.php`

Существует встроенная проверка актуальности сессии.

Также вы можете создавать собственные проверки.

## Проверка актуальности сессии
В месте вашего кода (обычно это в начале запуска контроллера) разместить следующий код:
```php
$checker_checks = [
    'auth' => $request->server()->get('HTTP_X_SESSION_ID'),
];
$checker_result = (new Checker($di))->run($checker_checks);
if (count($checker_result) > 0) {
    // При проверке возникли ошибки, вернём их
    $response->json($checker_result);
} else {
    // Проверка успешно пройдена
}
```

Также есть возможность напрямую проверить актуальность сессии:
```php
$result_session_check = (new Session())->check($request->server()->get('HTTP_X_SESSION_ID'));
if (isset($result_session_check['errors'])) {
    // Сессия устарела
    $response->json($result_session_check);
} else {
    // Проверка успешно пройдена
}
```

## Проверка ролей
В месте вашего кода (обычно это в начале запуска контроллера) разместить следующий код:
```php
$checker_checks = [
    'auth' => $request->server()->get('HTTP_X_SESSION_ID'),
    'role' => [
        'page'   => 'example',
        'access' => 'create-update',
    ],
];
$checker_result = (new Checker($di))->run($checker_checks);
if (count($checker_result) > 0) {
    // При проверке возникли ошибки, вернём их
    $response->json($checker_result);
} else {
    // Проверка успешно пройдена
}
```
Данная проверка посмотрит может ли данный пользователь добавлять и изменять записи `create-update` в разделе `example`

Роли настраиваются в файле `/app/Configs/SettingsUserRoles.php` серверной части

В самом начале проверяется роль администратора, если пользователь администратор, тогда сразу возвращается ответ об успешной проверке

Если нужно сразу проверить только на роль администратора, просто загляните в `$this->di->user['admin']` хранит в себе `boolean` значение

## Создание собственной проверки
Для создания собственной проверки необходимо создать класс в каталоге серверной части `/app/Checker`
```php
<?php
/**
 * Проверяем что это определенный пользователь
 *
 * @version 13.04.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace Lemurro\Checker;

use LemurroCore\Abstracts\Action;

/**
 * Class Simple
 *
 * @package Lemurro\Checker
 */
class Simple extends Action
{
    /**
     * Запускаем проверку
     *
     * @param array $data Массив данных
     *
     * @return array
     *
     * @version 13.04.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    public function run($data)
    {
        if ($this->di->user['auth_id'] == $data['auth_id']) {
            return [];
        } else {
            return [
                'errors' => [
                    [
                        'status' => '403 Forbidden',
                        'code'   => 'warning',
                        'title'  => 'Доступ ограничен',
                    ],
                ],
            ];
        }
    }
}

```
Для использования класса доработаем список правил:
```php
$checker_checks = [
    'auth'   => $request->server()->get('HTTP_X_SESSION_ID'),
    'simple' => [
        'class'   => 'Simple',
        'auth_id' => 'atomcms@ya.ru',
    ],
];
$checker_result = (new Checker($di))->run($checker_checks);
if (count($checker_result) > 0) {
    // При проверке возникли ошибки, вернём их
    $response->json($checker_result);
} else {
    // Проверка успешно пройдена
}
```
1. `simple` - Имя вашей проверки может быть любым, оно не используется и носит справочный характер.
2. `class` - Обязательное поле, указывает название вашего класса в каталоге серверной части `/app/Checker`
3. `auth_id` - Также могут быть любые необязательные поля, которые будут переданы в ваш класс. В данном примере мы передаем `auth_id` одного из пользователей, чтобы удостовериться что мы находимся под нужным на пользователем.