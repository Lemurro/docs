# Doctrine DBAL

По умолчанию уже существует элемент `$this->dic['dbal']`

Для подсказок кода используйте:
```php
/** @var \Doctrine\DBAL\Connection $dbal */
$dbal = $this->dic['dbal'];
```
Если вам необходимо только подключение к БД:
```php
$dbal = \Lemurro\Api\Core\Helpers\DB::init();
```

Если ваш класс расширяет класс `\Lemurro\Api\Core\Abstracts\Action`, тогда в вашем классе уже есть свойство `$this->dbal`:
```php
protected Connection $dbal;
```

## Insert
```php
$cnt = $this->dbal->insert('table_name', [
    'field1' => 'value1',
    'field2' => 'value2',
]);
if ($cnt !== 1) {
    return Response::error500('Произошла ошибка при добавлении записи, попробуйте ещё раз');
}

$id = $this->dbal->lastInsertId();
```

## Update
```php
$this->dbal->update('table_name', [
    'field2' => 'value2new',
], [
    'id' => $id
]);
```

Подробная документация по методам [здесь](https://www.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/data-retrieval-and-manipulation.html#api)
