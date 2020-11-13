# Сборка Metronic
В Lemurro используется `Metronic v7.1+` и его `Demo12`

## Первым действием открываем каталог
`cd {metronic_root}/theme/html/tools`

## Установка инструментов
1. `npm install --global npm@latest`
2. `npm install --global yarn`
3. `gulp --version` - если выполнив эту команду вы видите не версию CLI, тогда необходимо удалить обычную версию Gulp командой `npm rm --global gulp`
4. `npm install --global gulp-cli`
5. `yarn install`

## Изменение настроек CSS
- В файле `{metronic_root}/theme/html/demo12/src/sass/components/_variables.bootstrap.scss` меняем основные настройки Metronic:
    ```scss
    $font-family-base: Roboto, Helvetica, "sans-serif" !default;
    ```
- В файле `{metronic_root}/theme/html/demo12/src/sass/layout/_variables.scss` меняем настройки темы:
    ```scss
    $header-config: (
    // Desktop Mode
    desktop: (
        bg-color: #FFF,
        ...
    ),

    // Tablet & Mobile Modes
    tablet-and-mobile: (
        bg-color: #FFF,
        ...
    )
    ) !default;
    ```

## Настройка конфига сборщика
В файле `{metronic_root}/theme/html/tools/gulp.config.json`, для сокращения собранного пакета рекомендуются следующие настройки:
- `config.compile.rtl.enabled` = `false` - отключаем создание css-файла для режима `rtl`
- `build.vendors.base.src.optional` - в этом блоке вы можете сами решить какие библиотеки оставить, а какие убрать, кроме указанных ниже, они обязательно необходимы:
  - `bootstrap-datepicker`
  - `bootstrap-timepicker`
  - `bootstrap-switch`
  - `inputmask`
  - `toastr`
  - `sweetalert2`
- `build.vendors.custom` - в этом блоке можно удалить все библиотеки

## Сборка Metronic
1. `gulp --prod --demo12`
2. Готовая сборка тут `{metronic_root}/theme/html/demo12/dist`

## Копируем необходимые файлы
1. `{metronic_root}/theme/html/demo12/dist/assets/css/style.bundle.css`
2. `{metronic_root}/theme/html/demo12/dist/assets/js/scripts.bundle.js`
3. `{metronic_root}/theme/html/demo12/dist/assets/plugins/global/*.*`

Копирование выполняем в каталог проекта `/src/copy-to-build/assets/metronic-vx.x.x`

## Config.js
В каталоге `/src/copy-to-build/assets/metronic-vx.x.x` создаём файл `config.js` со следующим содержимым:
```javascript
var KTAppSettings = {
    'breakpoints': {
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1200,
    },
    'colors': {
        theme: {
            base: {
                white: '#ffffff',
                primary: '#0BB783',
                secondary: '#E5EAEE',
                success: '#1BC5BD',
                info: '#8950FC',
                warning: '#FFA800',
                danger: '#F64E60',
                light: '#F3F6F9',
                dark: '#212121',
            },
            light: {
                white: '#ffffff',
                primary: '#D7F9EF',
                secondary: '#ECF0F3',
                success: '#C9F7F5',
                info: '#EEE5FF',
                warning: '#FFF4DE',
                danger: '#FFE2E5',
                light: '#F3F6F9',
                dark: '#D6D6E0',
            },
            inverse: {
                white: '#ffffff',
                primary: '#ffffff',
                secondary: '#212121',
                success: '#ffffff',
                info: '#ffffff',
                warning: '#ffffff',
                danger: '#ffffff',
                light: '#464E5F',
                dark: '#ffffff',
            },
        },
        gray: {
            'gray-100': '#F3F6F9',
            'gray-200': '#ECF0F3',
            'gray-300': '#E5EAEE',
            'gray-400': '#D6D6E0',
            'gray-500': '#B5B5C3',
            'gray-600': '#80808F',
            'gray-700': '#464E5F',
            'gray-800': '#1B283F',
            'gray-900': '#212121',
        },
    },
    'font-family': 'Roboto',
};
```

## Подключение Metronic
- Подключаем CSS в файле `/src/html/include/css.html`
    ```html
    <link href="{your_metronic_root}/plugins.bundle.css" rel="stylesheet" type="text/css">
    <link href="{your_metronic_root}/style.bundle.css" rel="stylesheet" type="text/css">
    <link href="{your_metronic_root}/fonts/keenthemes-icons/ki.css" rel="stylesheet" type="text/css">
    ```
- Подключаем JS в файле `/src/html/include/js.html`
    ```html
    <script src="{your_metronic_root}/config.js" type="text/javascript"></script>
    <script src="{your_metronic_root}/plugins.bundle.js" type="text/javascript"></script>
    <script src="{your_metronic_root}/scripts.bundle.js" type="text/javascript"></script>
    ```