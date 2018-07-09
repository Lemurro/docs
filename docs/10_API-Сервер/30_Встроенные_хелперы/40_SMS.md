# SMS
Для отправки sms воспользуйтесь кодом:
```php
/** @var \Lemurro\Api\Core\SMS\SMS $sms */
$sms = $this->dic['sms'];

// Отправка через указанный шлюз
$sms->send('71234567890', 'Сообщение', 'p1sms');

// Отправка через шлюз по умолчанию (SettingsSMS::DEFAULT_GATEWAY)
$sms->send('71234567890', 'Сообщение');
```

Уже настроена работа с двумя сервисами [sms.ru](http://sms.ru) и [p1sms.ru](http://p1sms.ru)