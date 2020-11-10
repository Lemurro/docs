# Библиотека bootstrap-confirmation
- [GitHub](https://github.com/mistic100/Bootstrap-Confirmation)
- [Сайт с документацией](http://bootstrap-confirmation.js.org)

Необходимо инициировать сразу после построения списка в котором есть кнопки с атрибутом `[data-toggle=confirmation]`

### Синтаксис
`lemurro.helper.initBootstrapConfirmation(container, options);`
- `container` (JQuery) *Обязательно* - Элемент контейнера в котором будем искать кнопки с атрибутом `[data-toggle=confirmation]`
- `options` (Object) *Не обязательно* - Переопредление настроек по умолчанию

### Настройки по умолчанию
```js
var defaultOptions = {
    title         : 'Вы уверены?',
    singleton     : true,
    popout        : true,
    rootSelector  : '[data-toggle=confirmation]',
    btnOkLabel    : 'Да',
    btnOkClass    : 'btn btn-sm btn-success',
    btnCancelLabel: 'Нет',
    btnCancelClass: 'btn btn-sm btn-danger'
};
```

### Пример
```js
// С настройками по умолчанию
lemurro.helper.initBootstrapConfirmation($('#js-my-container'), null);

// Переопределим некоторые настройки
lemurro.helper.initBootstrapConfirmation($('#js-my-container'), {
    title     : 'Точно?',
    btnOkLabel: 'Конечно'
});
```