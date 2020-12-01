# Проверка пользователя на наличие прав

Синтаксис: `lemurro.helper.isRole(page, access, callbackSuccess, callbackFail);`
- `page` (string) *Обязательно* - Раздел
- `access` (string) *Обязательно* - Право доступа
- `callbackSuccess` (function) *Не обязательно* - Функция вызова при успешном получении данных
- `callbackFail` (function) *Не обязательно* - Функция вызова при провале

Пример:
```js
lemurro.helper.isRole('example', 'read', function () {
    console.log('isRole.success');
}, function () {
    console.log('isRole.fail');
});
```