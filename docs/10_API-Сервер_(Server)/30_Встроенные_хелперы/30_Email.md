# Email
Для отправки почты используется библиотека [PHPMailer](https://github.com/PHPMailer/PHPMailer)

Сначала необходимо настроить шаблон центральной части письма в файле `/app/Configs/EmailTemplates.php`

\* Шапка и подвал уже определены

Можно в шаблоне использовать переменные, данные для которых будут переданы при отправке
```php
    /**
     * Шаблон примера
     */
    const EXAMPLE = <<<TPL
<tr>
    <td align="center">
        <strong>Пример письма</strong>
    </td>
</tr>
<tr>
    <td>
        Какой-то <strong>[VARIABLE_1]</strong> рассказывающий нам о <strong>[VARIABLE_2]</strong>.
    </td>
</tr>
<tr>
    <td>
        А после этого текста мы ставим изображение.
    </td>
</tr>
<tr>
    <td align="center">
        <img src="cid:someimage" style="max-height:100px;">
    </td>
</tr>
TPL;
```
Отправить письмо:
```php
$this->dic['mailer']->send('EXAMPLE', 'Тестовое письмо', ['atomcms@ya.ru'], [
    '[VARIABLE_1]' => 'текст',
    '[VARIABLE_2]' => 'премудростях отправки писем',
], [
    'someimage' => 'assets/img/logo.png',
], [
    'somefile' => 'assets/img/logo.png',
]);
```