# Phone - Валидация сотового телефона

## Проверка строки на сотовый телефонный номер России
```php
hasPhone(string $phone[, string $region = 'RU']): bool
```
Пример:
```php
$phone = new \Lemurro\Api\Core\Helpers\SMS\Phone();
var_dump($phone->hasPhone('8 (963) 881-28-58')); // bool(true)
var_dump($phone->hasPhone('какая-то строка')); // bool(false)
```

## Нормализация телефонного номера
```php
normalize(string $phone[, string $region = 'RU']): ?string
```
Пример:
```php
$phone = new \Lemurro\Api\Core\Helpers\SMS\Phone();
var_dump($phone->normalize('8 (963) 881-28-58')); // string(12) "+79638812858"
var_dump($phone->normalize('какая-то строка')); // NULL
```