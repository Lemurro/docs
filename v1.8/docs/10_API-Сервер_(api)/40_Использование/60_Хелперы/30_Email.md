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
use Lemurro\Api\Core\Helpers\Mailer;

/** @var Mailer $mailer */
$mailer = $this->dic['mailer'];
$mailer->send('EXAMPLE', 'Тестовое письмо', ['atomcms@ya.ru'], [
    '[VARIABLE_1]' => 'текст',
    '[VARIABLE_2]' => 'премудростях отправки писем',
], [
    'someimage' => 'path/to/file.img',
], [
    'somefile' => 'path/to/file.ext',
]);
```
\* По умолчанию в конструкторе класса `Mailer` указаны шапка `EmailTemplates::HEADER` и подвал `EmailTemplates::FOOTER`, вы можете указать другие шапку и подвал, создав новый класс
```php
use Lemurro\Api\Core\Helpers\Mailer;

$html_new_header = 'здесь-html-код'; // Смотрите пример здесь api/app/Configs/EmailTemplates.php в константе HEADER
$html_new_footer = 'здесь-html-код'; // Смотрите пример здесь api/app/Configs/EmailTemplates.php в константе FOOTER

$mailer = new Mailer($this->dic, $html_new_header, $html_new_footer);
```

### Встроенный шаблон SIMPLE_MESSAGE
В системе уже есть простой шаблон для писем, когда нужно отправить всего лишь одну строку
```php
use Lemurro\Api\Core\Helpers\Mailer;

/** @var Mailer $mailer */
$mailer = $this->dic['mailer'];
$mailer->send('SIMPLE_MESSAGE', 'Простое письмо', ['atomcms@ya.ru'], [
    '[CONTENT]' => 'Текст в виде одной строки',
]);
```