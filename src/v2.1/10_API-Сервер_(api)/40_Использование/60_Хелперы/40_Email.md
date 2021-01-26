# Email
Для отправки почты используется библиотека [PHPMailer](https://github.com/PHPMailer/PHPMailer)

Шаблоны для шапки, подвала, кода входа и простого письма уже определены, подробнее про содержимое шаблонов можно прочитать [здесь](../../20_Настройки_по_умолчанию/40_Templates.md)

Отправить письмо:
```php
/** @var \Lemurro\Api\Core\Helpers\Mailer $mailer */
$mailer = $this->dic['mailer'];
$mailer->send('template_name', 'Текст письма', ['atomcms@ya.ru'], [
    '[VARIABLE_1]' => 'текст',
    '[VARIABLE_2]' => 'премудростях отправки писем',
], [
    'someimage' => 'path/to/file.img',
], [
    'somefile' => 'path/to/file.ext',
]);
```

### Встроенный шаблон simple_message
В системе уже есть простой шаблон для писем в виде одной ячейки таблицы
```php
/** @var \Lemurro\Api\Core\Helpers\Mailer $mailer */
$mailer = $this->dic['mailer'];
$mailer->send('simple_message', 'Простое письмо', ['atomcms@ya.ru'], [
    '[CONTENT]' => 'Текст в виде одной строки',
]);
```

### Оправка отдельного письма со своим шаблоном
Пример шаблона можно взять [здесь](../../20_Настройки_по_умолчанию/40_Templates.md) из файла `_template.html`
```php
$template = 'здесь ваш новый html-шаблон письма';

$mailer = new \Lemurro\Api\Core\Helpers\Mailer($this->dic, $template);
$mailer->send('simple_message', 'Простое письмо', ['atomcms@ya.ru'], [
    '[CONTENT]' => 'Текст в виде одной строки',
]);
```