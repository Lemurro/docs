# Настройка Framework7
\* Указанные ниже настройки можно переопределить в файле: `/src/js/0-config/100-config.js` в переменной `config.overrideF7Settings`
- **id** *default: `'ru.bestion.lemurro'`* - идентификатор пакета приложения
- **name** *default: `'Lemurro'`* - название приложение, используется в `app.dialog()`, если не указать там другой заголовок
- **version** *default: `'0.1.0'`* - версия приложения, может быть использовано другими компонентами
- **theme** *default: `'md'`* - тема приложения:
  - `ios` - iOS
  - `md` - Material Design
  - `auto` - автоматическое определение темы в зависимости от устройства
- **root** *default: `'#app'`* - корневой элемент приложения
- **panel** *default: `{swipe: 'both'}`* - включение свайпа боковых панелей:
  - `left` - только левая
  - `right` - только правая
  - `both` - обе
  - `none` - никакая
- **touch** *default: `{fastClicks: false}`* - отключено во избежания багов со сторонними библиотеками жестов
- **on** *default: `object`* - Обратите внимание, если вы будете добавлять новые события, вам необходимо будет не забыть в вашем объекте также привести код для `pageInit`:
  ```javascript
  {
      pageInit: function (event) {
          app.panel.close();
          lemurro._initPage(event.name);
      }
  }
  ```