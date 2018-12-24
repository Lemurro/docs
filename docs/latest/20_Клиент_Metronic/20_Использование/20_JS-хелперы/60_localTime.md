> **v1.0.0**

# Возврат времени в локальном формате

Синтаксис: `lemurro.helper.localTime(datetime, format);`
- `datetime` (string) *Обязательно* - Дата и время в формате "ГГГГ-ММ-ДД ЧЧ:ММ:СС"
- `format` (string) *Обязательно* - Возвращаемый формат [Moment.js](http://momentjs.com/docs/#/displaying/format/)

Возвращается строка

Пример:
```js
lemurro.helper.localTime('2018-12-05 12:35:00', 'DD.MM.YYYY HH:mm'); // 05.12.2018 12:35
```