> **v1.0**

# Преобразование строки в дробное число с необходимой точностью

Решает проблему, когда вводят в поле дробное число с разделителем ","

Синтаксис: `lemurro.helper.decimal(value, precision);`
- `value` (string|float) *Обязательно* - Строка с дробным числом или число
- `precision` (integer) *Не обязательно* - Точность результата (по умолчанию: 2)

Возвращается число `float`

Пример:
```js
lemurro.helper.decimal('123,340'); // 123.34
lemurro.helper.decimal(' 1 230,340 ', 0); // 1230

lemurro.helper.decimal(123.34); // 123.34
lemurro.helper.decimal(123.3, 3); // 123.3
```