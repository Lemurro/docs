В качестве шаблонизатора используется symfony-компонент [symfony/templating](https://github.com/symfony/templating)

В шаблонах по умолчанию доступны следующие переменные:
- **$core_css** - путь до файла `/assets/core-*.min.css`
- **$core_js** - путь до файла `/assets/core-*.min.js`
- **$app_css** - путь до файла `/assets/app-*.min.css`
- **$app_js** - путь до файла `/assets/app-*.min.js`
- **$api_url** - URL-адрес API-сервера (`SettingsGeneral::API_URL`)
- **$uri** - получает значение из запроса (`$this->request->getRequestUri()`)
- **$short_root** - Короткий путь до корня (`SettingsGeneral::SHORT_ROOT_PATH`)
- **$title** - заголовок страницы
- **$index** - путь до шаблона страницы (`$this->request->get('_controller')`)
- **$data** - массив значений полученных от маршрутизатора (`array_merge($this->request->attributes->all(), $this->request->query->all())`)