# AJAX-запросы к API

Для AJAX-запросов используется jQuery-плагин [LightAjax](https://github.com/DimNS/jQuery.LightAjax)

Для GET-запросов используйте
```javascript
lemurro.lightajax.get(true, pathServerAPI + 'path/to/server', {
    'param1': 'value1',
    'param2': 'value2'
}, function(result) {
    lemurro.lightajax.preloader('hide');

    if (result.hasOwnProperty('errors')) {
        lemurro.showErrors(result.errors);
    } else {
        // Обработка данных полученных с сервера
        console.log(result);
    }
});
```
Для POST-запросов просто замените слово `get` на `post` в строке `lemurro.lightajax.get(...`

При каждом запросе на сервер отправляются заголовки:
- `X-SESSION-ID` - с текущим значением переменной `lemurro.sessionID`
- `X-UTC-OFFSET` - со смещением в минутах от текущего часового пояса устройства пользователя до UTC используя `moment().utcOffset()`

Для скрытных запросов, укажите `false` в качестве первого параметра в строке `lemurro.lightajax.get(false, `. В этом случае прелоадер показываться не будет и нет необходимости его скрывать при успешном завершении запроса (строка: `lemurro.lightajax.preloader('hide');` в примере выше).