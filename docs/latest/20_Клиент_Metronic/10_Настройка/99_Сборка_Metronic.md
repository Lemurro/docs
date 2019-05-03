> **v1.0.0**

# Сборка Metronic

## Установка инструментов
1. `cd {metronic_root}/default/tools`
2. `npm install --global npm@latest`
3. `npm install --global yarn`
4. `npm install --global gulp-cli`
5. `yarn install`

## Изменение настроек CSS
- В файле `{metronic_root}/default/src/sass/framework/_config.scss` меняем основные настройки Metronic, в частности сделаем основным шрифт Roboto
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
- В файле `{metronic_root}/default/src/sass/demo/demo5/_framework-config.scss` меняем настройки необходимого нам шаблона
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

## Сборка Metronic
1. В файле `{metronic_root}/default/tools/themes/default.conf.json` есть переменная `demo`, укажите там `demo5` для сборки только определённого шаблона или укажите пустую строку для сборки ВСЕХ шаблонов
2. `cd {metronic_root}/default/tools`
3. `gulp --prod`
4. Готовая сборка тут `{metronic_root}/default/dist`

## Копируем необходимые файлы
1. Содержимое каталога `{metronic_root}/default/dist/demo5/assets/vendors/base` копируем в каталог проекта `/src/assets/metronic-vx.x.x/base`
2. Содержимое каталога `{metronic_root}/default/dist/demo5/assets/demo/demo5/base` копируем в каталог проекта `/src/assets/metronic-vx.x.x/demo5`

## Подключение Metronic
- Подключаем CSS в файле `/src/html/include/css.html`
```html
<link href="{metronic_root}/base/vendors.bundle.css" rel="stylesheet" type="text/css">
<link href="{metronic_root}/demo5/style.bundle.css" rel="stylesheet" type="text/css">
```
- Подключаем JS в файле `/src/html/include/js.html`
```html
<script src="{metronic_root}/base/vendors.bundle.js" type="text/javascript"></script>
<script src="{metronic_root}/demo5/scripts.bundle.js" type="text/javascript"></script>
```