# Сборка Metronic
В Lemurro используется Metronic v5.5.5 и его Demo5

## Установка инструментов
1. `npm install --global npm@latest`
2. `npm install --global yarn`
3. `npm install --global gulp-cli`
4. `cd {metronic_root}/theme/default/tools`
5. `yarn install`

## Изменение настроек CSS
- В файле `{metronic_root}/theme/default/src/sass/framework/_config.scss` меняем основные настройки Metronic, в частности сделаем основным шрифт Roboto
```scss
//== The body element font settings
$m--root-font: (
    size: (
        desktop: 14px,
        tablet: 14px,
        mobile: 13px
    ),
    weight: 400,
    color: (
        light: #333333,
        dark: #efefef
    )
)!default;

//== Font families
$m--font-families: (
    regular: 'Roboto',
    heading: 'Roboto'
)!default;
```
- В файле `{metronic_root}/theme/default/src/sass/demo/demo5/_framework-config.scss` меняем настройки необходимого нам шаблона
```scss
//== The body element font settings
$m--root-font: (
    size: (
        desktop: 14px,
        tablet: 14px,
        mobile: 13px
    ),
    weight: 400,
    color: (
        light: #333333,
        dark: #efefef
    )
);
```

## Настройка конфига сборщика
В файле `{metronic_root}/theme/default/tools/themes/default.conf.json`, для сокращения собранного пакета рекомендуются следующие настройки:

Поле | Значение | Описание
--- | --- | ---
`config.demo` | `"demo5"` | Название демо, которую будем собирать, чтобы значительно сократить время сборки
`config.compile.rtl.enabled` | `false` | Отключаем создание css-файла для режима `rtl`
`config.compile.jsUglify` | `true` | Сжимаем js-файлы
`config.compile.cssMinify` | `true` | Сжимаем css-файлы
`build.vendors.base.src.optional` | &bull; `bootstrap-datetime-picker`<br>&bull; `select2`<br>&bull; `inputmask`<br>&bull; `summernote`<br>&bull; `jquery-validation`<br>&bull; `sweetalert2`<br>&bull; `line-awesome` | В этом блоке можно удалить все библиотеки кроме указанных, они обязательно необходимы, также вы можете не удалять какие-то другие библиотеки, необходимые вам
`build.vendors.custom` |  | В этом блоке можно удалить все библиотеки

## Сборка Metronic
1. `cd {metronic_root}/theme/default/tools`
2. `gulp --prod`
3. Готовая сборка тут `{metronic_root}/theme/default/dist`

## Копируем необходимые файлы
1. Содержимое каталога `{metronic_root}/theme/default/dist/demo5/assets/vendors/base` копируем в каталог проекта `/src/copy-to-build/assets/metronic-vx.x.x/base`
2. Содержимое каталога `{metronic_root}/theme/default/dist/demo5/assets/demo/demo5/base` копируем в каталог проекта `/src/copy-to-build/assets/metronic-vx.x.x/demo5`

## Подключение Metronic
- Подключаем CSS в файле `/src/html/include/css.html`
```html
<link href="{your_metronic_root}/base/vendors.bundle.css" rel="stylesheet" type="text/css">
<link href="{your_metronic_root}/demo5/style.bundle.css" rel="stylesheet" type="text/css">
```
- Подключаем JS в файле `/src/html/include/js.html`
```html
<script src="{your_metronic_root}/base/vendors.bundle.js" type="text/javascript"></script>
<script src="{your_metronic_root}/demo5/scripts.bundle.js" type="text/javascript"></script>
```