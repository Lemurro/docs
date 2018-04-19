Для диалоговых окон подтверждения используется [SweetAlert2](https://sweetalert2.github.io), у него более расширенный функционал нежели у диалогов [Framework7](http://framework7.io)

Синтаксис: `helper.showConfirm(title, content, confirmButtonText, cancelButtonText, callbackOpen, callbackPreConfirm, callbackConfirm, callbackCancel);`
- `title` (string) *Обязательно* - Заголовок
- `content` (string) *Обязательно* - HTML-Содержимое
- `confirmButtonText` (string) *Обязательно* - Текст кнопки "OK"
- `cancelButtonText` (string) *Обязательно* - Текст кнопки "Cancel"
- `callbackOpen` (function) *Не обязательно* - Функция при открытии формы
- `callbackPreConfirm` (function) *Не обязательно* - Функция перед вызовом callbackConfirm
- `callbackConfirm` (function) *Обязательно* - Функция при нажатии confirmButton
- `callbackCancel` (function) *Не обязательно* - Функция при нажатии cancelButton

Пример:
```js
helper.showConfirm(
    'Заголовок',
    '<p>Содержимое окна</p><p>Может содержать <strong>любой</strong> html-код</p>',
    'OK',
    'Отмена',
    function () {
        console.log('showConfirm.open');
    }, function () {
        console.log('showConfirm.preconfirm');
    }, function () {
        console.log('showConfirm.confirm');
    }, function () {
        console.log('showConfirm.cancel');
    }
);
```