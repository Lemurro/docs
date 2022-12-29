# Работа со строками

## Генератор имени файла с проверкой на существование файлов с подобным именем и автоматической подстройкой имени
```php
generate(string $dest_folder, string $dest_name, string $orig_ext): string
```
Пример:
```php
$dest_folder = __DIR__;

$filename = new \Lemurro\Api\Core\Helpers\File\FileName();
echo $filename->generate($dest_folder, 'file', 'txt'); // file.txt
echo $filename->generate($dest_folder, 'file', 'txt'); // file(1).txt
echo $filename->generate($dest_folder, 'file', 'txt'); // file(2).txt
```

## Подготовка строки для использования в качестве имени файла
После удаления запрещённых символов строка обрезается по длине до 100 символов
```php
clean(string $name): string
```
Пример:
```php
echo \Lemurro\Api\Core\Helpers\File\FileNameCleaner::clean('fileQ?<W>*Y'); // fileQWY
```

## Генератор случайной строки определенной длины
Шаблон: `[A-Za-z0-9]`
```php
generate([int $length = 10]): string
```
Пример:
```php
echo \Lemurro\Api\Core\Helpers\RandomKey::generate(5); // 3Nc3d
```

## Генератор случайного числа определенной длины
Шаблон: `[1-9]`
```php
generate([int $length = 10]): int
```
Пример:
```php
echo \Lemurro\Api\Core\Helpers\RandomNumber::generate(4); // 3683
```