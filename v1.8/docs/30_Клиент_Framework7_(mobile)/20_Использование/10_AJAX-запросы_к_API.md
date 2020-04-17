# AJAX-запросы к API
Для GET-запросов используйте
```js
app.preloader.show();
app.request.get(pathServerAPI + 'path/to/model', {
    'param1': 'value1',
    'param2': 'value2'
}, function (result) {
    app.preloader.hide();

    if (result.hasOwnProperty('errors')) {
        lemurro.showErrors(result.errors);
    } else {
        // Обработка данных полученных с сервера
    }
});
```
Для POST-запросов просто замените слово `get` на `post` в строке `app.request.get(...`

При каждом запросе на сервер отправляется заголовок `X-SESSION-ID` с текущим значением переменной `lemurro.sessionID`