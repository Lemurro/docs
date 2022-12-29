# Безопасное получение integer

Синтаксис: `lemurro.helper.integer(value);`
- `value` (string|number) *Обязательно* - Строка или число

Возвращается число `number`

Пример:
```js
lemurro.helper.integer('123,340'); // 123
lemurro.helper.integer(' 1 230,340 '); // 1230
lemurro.helper.integer(123.34); // 123
lemurro.helper.integer(123.3); // 123
lemurro.helper.integer(123.3455688) //123
```
