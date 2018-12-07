# Checker - модуль проверок
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
$result_session_check = (new Session())->check($this->dic['session_id']);
if (isset($result_session_check['errors'])) {
    // Сессия устарела
    $this->response->setData($checker_result);
} else {
    // Проверка успешно пройдена
    // $this->response->setData($result);
}

$this->response->send();
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

Если нужно просто проверить только на роль администратора, просто загляните в `$this->dic['user']['admin']` хранит в себе `boolean` значение

Для настройки ролей используйте [эту инструкцию](../20_Использование/40_Роли_пользователей.md)

## Проверка на роль "Администратор"
Чтобы проверить пользователя только на роль "Администратор" передайте такой массив проверок:
```php
$checker_checks = [
    'role' => [],
];
```

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

namespace Lemurro\Api\App\Checker;

use Lemurro\Api\Core\Abstracts\Action;

/**
 * Class Simple
 *
 * @package Lemurro\Api\App\Checker
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
        if ($this->dic['user']['auth_id'] == $data['auth_id']) {
            return [];
        } else {
            return [
                'errors' => [
                    [
                        'status' => '403 Forbidden',
                        'code'   => 'warning',
                        'title'  => 'Доступ ограничен',
                        'meta'   => [
                            'redirect' => true,
                        ],
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
    'auth'   => $this->dic['session_id'],
    'simple' => [
        'class'   => 'Simple',
        'auth_id' => 'atomcms@ya.ru',
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
1. `simple` - Имя вашей проверки может быть любым, оно не используется и носит справочный характер.
2. `class` - Обязательное поле, указывает название вашего класса в каталоге серверной части `/app/Checker`
3. `auth_id` - Также могут быть любые необязательные поля, которые будут переданы в ваш класс. В данном примере мы передаем `auth_id` одного из пользователей, чтобы удостовериться что мы находимся под нужным на пользователем.