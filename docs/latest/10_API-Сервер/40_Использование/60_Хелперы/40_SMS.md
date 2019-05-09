> **v1.0, v1.1, v1.3**

**Список изменений**

Версия | Описание
--- | ---
1.3 | Namespace SMS перенесён в Helpers
1.1 | Для своего шлюза добавлен интерфейс

# SMS
Для отправки sms воспользуйтесь кодом:
```php
use Lemurro\Api\Core\Helpers\SMS\SMS;

/** @var SMS $sms */
$sms = $this->dic['sms'];

// Отправка через другой шлюз
$other_gateway = new OtherGatewaySMS();
$sms->send('71234567890', 'Сообщение', $other_gateway);

// Отправка через шлюз по умолчанию (sms.ru)
$sms->send('71234567890', 'Сообщение');
```

По умолчанию настроена работа с сервисом [sms.ru](http://sms.ru)

## Свой шлюз отправки sms
> **v1.1**

```php
<?php
use Lemurro\Api\Core\Abstracts\GatewaySMS;

class OtherGatewaySMS implements GatewaySMS
{
    /**
     * Отправка sms
     *
     * @param string $phone   Номер телефона получателя
     * @param string $message Сообщение
     *
     * @return array
     */
    public function send($phone, $message)
    {
        // Код отправки sms, обработки ответа и возврата результата
    }
}
```
1. Обязательно наличие публичного метода `send`
2. Метод `send` принимает 2 параметра `$phone` и `$message`
3. В случае успешной отправки возвращается массив
 ```php
 return [
     'success' => true,
     'message' => 'Сообщение об успешной отправке со служебной информацией (не обязательно)',
 ];
 ```
4. В случае ошибки отправки возвращается массив
 ```php
 return [
     'success' => false,
     'message' => 'Текст ошибки',
 ];
 ```
5. Текст из `message` будет помещён в лог

> **v1.0**

```php
<?php
use Lemurro\Api\Core\Abstracts\GatewaySMS;

class OtherGatewaySMS
{
    /**
     * Отправка sms
     *
     * @param string $phone   Номер телефона получателя
     * @param string $message Сообщение
     *
     * @return array
     */
    public function send($phone, $message)
    {
        // Код отправки sms, обработки ответа и возврата результата
    }
}
```