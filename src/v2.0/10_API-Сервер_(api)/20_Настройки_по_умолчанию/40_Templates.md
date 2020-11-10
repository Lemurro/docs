# Templates
Шаблоны по умолчанию находятся в ядре `/vendor/lemurro/api-core/src/Configs/templates`

Каждый шаблон это html-файл, кроме файла logo.base64

## logo.base64
Это логотип приложения в формате base64, для преобразования вашего логотипа в формат base64 можно воспользоваться онлайн-сервисом [BASE64 Image](https://www.base64-image.de), загрузите своё изображение и нажмите кнопку `copy image`

## _template.html
Полный шаблон письма, обратите внимание на переменные `__LOGO_BASE64__` и `__BODY__` они будут автоматически заменены данными из шаблона логотипа и указанного шаблона с содержимым
```html
<table border="0" cellpadding="0" cellspacing="0" style="width: 100%; background: #eee">
    <tr>
        <td style="padding: 20px">
            <table
                border="0"
                cellpadding="0"
                cellspacing="20"
                align="center"
                style="
                    width: 600px;
                    color: #444444;
                    font-size: 14px;
                    font-family: arial, helvetica, sans-serif;
                    line-height: 1.5;
                    border: 5px #b28b6b solid;
                    background: #fff;
                "
            >
                <tbody>
                    <tr>
                        <td align="center"><img src="[__LOGO_BASE64__]" style="max-height: 60px" /></td>
                    </tr>
                    [__BODY__]
                    <tr>
                        <td>
                            <strong>С уважением,</strong>
                            <br />
                            команда Lemurro
                            <br />
                            <a href="mailto:info@bestion.ru" style="color: #8e694d">info@bestion.ru</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</table>
```

## simple_message.html
Простой шаблон содержимого в одной ячейке таблицы
```
<tr>
    <td>[CONTENT]</td>
</tr>
```

Про переопределение шаблонов читайте [здесь](../30_Расширение_функционала/30_Расширение_Templates.md)