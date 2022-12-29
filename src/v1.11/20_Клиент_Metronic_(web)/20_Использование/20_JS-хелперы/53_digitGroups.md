# Группировка цифр по разрядам

Синтаксис: `lemurro.helper.digitGroups(value, precision);`
- `value` (string|number) *Обязательно* - Строка или число
- `precision` (number) *Не обязательно* - Точность результата (по умолчанию: 2)

Возвращается `string`

Пример:
```js
lemurro.helper.decimal('123,340'); // '123.34'
lemurro.helper.decimal(' 1230,340 ', 0); // '1 230'

lemurro.helper.decimal(12350.34); // '12 350.34'
lemurro.helper.decimal(12350.3, 3); // '12 350.3'

lemurro.helper.decimal(12350.3455688, -1) // '12 350.3455688'
```
