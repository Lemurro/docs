load_search_index({"pages":[{"title":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0441 1.8 \u0434\u043e 1.9","text":"API-module \u041a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u0430\u0436\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f [Auth] \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u0431\u0440\u0443\u0442\u0444\u043e\u0440\u0441\u0430 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u043a\u043e\u0434\u043e\u0432 \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430: \u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443: -- \u0414\u0430\u0442\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043a\u043e\u0434\u0430 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 CREATE TABLE IF NOT EXISTS `auth_codes_lasts` ( `id` BIGINT(22) NOT NULL AUTO_INCREMENT, `user_id` INT(11) NOT NULL, `created_at` DATETIME NOT NULL, PRIMARY KEY (`id`) ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci; \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0443 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433 api\\app\\Configs\\SettingsAuth.php: \/** * \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0439 \u043d\u043e\u0432\u044b\u0445 \u043a\u043e\u0434\u043e\u0432 \u0432 \u0434\u0435\u043d\u044c * * @var int *\/ const ATTEMPTS_PER_DAY = 50; [\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438] \u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 sessions \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044f: ALTER TABLE `sessions` ADD `device_info` JSON AFTER `user_id`, ADD `geoip` JSON AFTER `device_info`, ADD `admin_entered` TINYINT(1) NOT NULL DEFAULT '0' AFTER `geoip`; \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f [Response] \u0412 \u043c\u0430\u0441\u0441\u0438\u0432\u0435 \u043e\u0442\u0432\u0435\u0442\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043a\u043b\u044e\u0447 success \u0442\u0438\u043f\u0430 bool, \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043d\u0430 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043e\u0448\u0438\u0431\u043e\u043a \u0435\u0433\u043e \u0432\u043c\u0435\u0441\u0442\u043e isset($result['errors']), \u0442.\u043a. \u0432 \u0432\u0435\u0440\u0441\u0438\u0438 2.0 \u043a\u043b\u044e\u0447 errors \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d \u0432 \u043a\u043b\u044e\u0447 error. WEB-module \u041a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u0430\u0436\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f [Gulp-\u043f\u043b\u0430\u0433\u0438\u043d] \u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u043f\u043b\u0430\u0433\u0438\u043d gulp-file-include: \u0441\u0442\u0430\u0440\u044b\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439: &lt;!-- include &quot;path\/to\/xxx.html&quot; --&gt; \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439: &lt;!-- include('path\/to\/xxx.html') --&gt; \u043f\u0443\u0442\u044c \u0434\u043e \u0444\u0430\u0439\u043b\u0430 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u043a\u043e\u0440\u043d\u044f, \u043a\u043e\u0440\u043d\u0435\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \/src\/html. [\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c] \u041d\u043e\u0432\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c: \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0430\u0440\u0445\u0438\u0432 1.9.0_profile.zip \u0438 \u0440\u0430\u0441\u043f\u0430\u043a\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \/src. \u0432 \u0444\u0430\u0439\u043b\u0435 \/src\/html\/include\/menu_topbar.html \u043f\u0435\u0440\u0435\u0434 \u043f\u0443\u043d\u043a\u0442\u043e\u043c \u0412\u044b\u0445\u043e\u0434 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442: &lt;li class=\"m-nav__item\"&gt; &lt;a href=\"\/profile\" data-navigo class=\"m-nav__link\"&gt; &lt;i class=\"m-nav__link-icon fas fa-fw fa-user-circle\"&gt;&lt;\/i&gt; &lt;span class=\"m-nav__link-title\"&gt; &lt;span class=\"m-nav__link-wrap\"&gt; &lt;span class=\"m-nav__link-text\"&gt; \u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c &lt;\/span&gt; &lt;\/span&gt; &lt;\/span&gt; &lt;\/a&gt; &lt;\/li&gt; \u0432 \u0444\u0430\u0439\u043b\u0435 \/src\/js\/0-app\/200-routes.js \u0432 \u0431\u043b\u043e\u043a\u0435 \u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442: '\/profile': function (params, query) { app.page = { name: 'profile', title: '\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c', onLoad: function () { lemurro.profile.init(); }, params: params, query: query, }; }, [\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438] \u0412 \u043c\u0435\u0442\u043e\u0434\u0435 lemurro.users.remove \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 name. [\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438] \u0412 \u043c\u0435\u0442\u043e\u0434\u0435 lemurro.users.showData \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 callback. [\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u0438] \u0412 \u043c\u0435\u0442\u043e\u0434\u0435 lemurro.guide.remove \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 name. \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0440\u0435\u0434\u043d\u0435\u0439 \u0432\u0430\u0436\u043d\u043e\u0441\u0442\u0438 [JS] \u0412\u043c\u0435\u0441\u0442\u043e \u043a\u043e\u0434\u0430 result.hasOwnProperty('errors') \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0434 lemurro.hasErrors(result). [JS-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u043a\u0438] \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430 \u0447\u0435\u0440\u0435\u0437 new LightAjax \u0442\u043e\u0433\u0434\u0430 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u043d\u0430\u0442\u044c \u043e\u0431 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u0445: \u0412\u043c\u0435\u0441\u0442\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 settings.color \u0442\u0435\u043f\u0435\u0440\u044c \u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 settings.classColor, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 Content Security Policy, \u043c\u043e\u0436\u043d\u043e \u043d\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c, \u0442\u043e\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u043b\u0430\u0441\u0441 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e. \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 callbackAlert \u043f\u043e\u043c\u0435\u0449\u0451\u043d \u0432\u043d\u0443\u0442\u0440\u044c settings: settings.callbackAlert. \u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043a\u043e\u0433\u0434\u0430 \u0436\u0451\u0441\u0442\u043a\u043e \u043c\u0435\u043d\u044f\u043b\u0438\u0441\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432 jQuery.ajaxSetup, \u0442\u0435\u043f\u0435\u0440\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u043d\u0443\u0442\u0440\u0438 LightAjax. [\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438] \u0412 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \/src\/js\/users\/ \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c js-\u0444\u0430\u0439\u043b \u0441 \u043c\u0435\u0442\u043e\u0434\u043e\u043c users.afterShowData: \/** * \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u043f\u043e\u0441\u043b\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 * * @param {Object} data * * @author \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0429\u0435\u0440\u0431\u0430\u043a\u043e\u0432 &lt;atomcms@ya.ru&gt; * * @version 17.04.2020 *\/ users.afterShowData = function (data) { }; [\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438] \u0412 \u0444\u0430\u0439\u043b\u0435 \/src\/html\/pages\/users\/content.html: \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0431\u043b\u043e\u043a ul#js-tabs__links \u043d\u043e\u0432\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442: &lt;li class=\"nav-item\"&gt; &lt;a href=\"#tab-auth-keys\" class=\"nav-link\" data-toggle=\"tab\" data-target=\"#tab-auth-keys\"&gt; &lt;i class=\"fas fa-key\"&gt;&lt;\/i&gt; \u041a\u043b\u044e\u0447\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 &lt;\/a&gt; &lt;\/li&gt; \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0431\u043b\u043e\u043a div#js-tabs__contents \u043d\u043e\u0432\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442: &lt;div class=\"tab-pane\" id=\"tab-auth-keys\" role=\"tabpanel\"&gt; &lt;!-- include('pages\/users\/auth_keys.html') --&gt; &lt;\/div&gt; \u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0444\u0430\u0439\u043b\u044b auth_keys.html \u0438 tpl_auth_keys__items.html \u0438 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \/src\/html\/pages\/users. \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f [\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438] \u0412 \u0444\u043e\u0440\u043c\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f\\\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043c\u043e\u0436\u043d\u043e \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e \u0440\u0430\u0437\u0431\u0438\u0442\u044c \u0431\u043b\u043e\u043a\u0438 \u0441 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439 \u0438 \u043f\u0440\u0430\u0432\u0430\u043c\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0432 \u0444\u0430\u0439\u043b\u0435 form.html.","tags":"","url":"Obnovlenie_s_1.8_do_1.9.html"},{"title":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0441 1.7 \u0434\u043e 1.8","text":"API-module \u041a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u0430\u0436\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f [Core] \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043d\u043e\u0432\u044b\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u041e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u0434\u043b\u044f \u0435\u0433\u043e \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u043a\u043e\u043d\u0444\u0438\u0433-\u0444\u0430\u0439\u043b api\/app\/Configs\/SettingsMaintenance.php \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f: &lt;?php \/** * \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f * * @author \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0429\u0435\u0440\u0431\u0430\u043a\u043e\u0432 &lt;atomcms@ya.ru&gt; * @version 21.11.2019 *\/ namespace Lemurro\\Api\\App\\Configs; \/** * Class SettingsMaintenance * * @package Lemurro\\Api\\App\\Configs *\/ class SettingsMaintenance { \/** * \u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \\ \u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 * * @var boolean *\/ const ACTIVE = false; \/** * \u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0438 * * @var string *\/ const MESSAGE = '\u041f\u0440\u043e\u0435\u043a\u0442 \"' . SettingsGeneral::APP_NAME . '\" \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0434\u043b\u044f \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 5 \u043c\u0438\u043d\u0443\u0442 \u0438\u043b\u0438 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443'; } [Users] \u0418\u0437\u043c\u0435\u043d\u0451\u043d \u0442\u0438\u043f \u043f\u043e\u043b\u044f roles \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043f\u043e \u043f\u0440\u0430\u0432\u0430\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u0430: ALTER TABLE `info_users` CHANGE `roles` `roles` JSON NULL DEFAULT NULL; [Users] \u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 users \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044f (\u0442\u0435\u043f\u0435\u0440\u044c \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 users \u0437\u0430\u043f\u0438\u0441\u044c \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0435 \u0443\u0434\u0430\u043b\u044f\u0435\u0442\u0441\u044f): ALTER TABLE `users` ADD `updated_at` DATETIME NULL AFTER `created_at`, ADD `deleted_at` DATETIME NULL AFTER `updated_at`; WEB-module \u041a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u0430\u0436\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432 Example, \u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u0438 \u0438 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0445\u0435\u043b\u043f\u0435\u0440\u0430 lemurro.helper.initBootstrapConfirmation. \u0412 \u044f\u0434\u0440\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u0442\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0445\u0435\u043b\u043f\u0435\u0440 lemurro.helper.initBootstrapConfirmation \u0438\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u0414\u043b\u044f \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u043d\u0430 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0445\u0435\u043b\u043f\u0435\u0440 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432 \u043a\u043d\u043e\u043f\u043a\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u0434: data-toggle=&quot;confirmation&quot;, \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0443\u0436\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u044f\u0434\u0440\u0435 \u0415\u0441\u043b\u0438 \u0432\u044b \u043a\u0430\u043a\u0438\u0435-\u0442\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0430\u043f\u043e\u043b\u043d\u044f\u043b\u0438 \u0438\u043b\u0438 \u043c\u0435\u043d\u044f\u043b\u0438 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0442\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0441\u043b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 DOM \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0445\u0435\u043b\u043f\u0435\u0440\u0430 \u0434\u043b\u044f \u044d\u0442\u0438\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432: \/\/ \u041f\u0440\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441 \u043a\u043d\u043e\u043f\u043a\u0430\u043c\u0438, \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0446\u0435\u043b\u0438\u043a\u043e\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0432\u043d\u0435\u0441\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f var container = $('#js-example__items'); lemurro.helper.initBootstrapConfirmation(container, null); \/\/ \u041b\u0438\u0431\u043e \u0432\u0441\u0435\u0433\u043e \u043e\u0434\u0438\u043d \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0430\u0431\u043e\u0440\u0430 var row = $('#js-users__items').find('tr[data-item-id=\"' + result.data.id + '\"]'); lemurro.helper.initBootstrapConfirmation(row, null); \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0445\u0435\u043b\u043f\u0435\u0440\u0435 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438. \u041c\u0435\u0442\u043e\u0434\u044b lemurro.users.lock \u0438 lemurro.users.unlock \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u0437 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432, \u0447\u0442\u043e\u0431\u044b \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c callback, \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \/src\/js\/users\/ \u0424\u0430\u0439\u043b 300-lock.js \/** * \u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f * * @param {string} id \u0418\u0414 \u0437\u0430\u043f\u0438\u0441\u0438 * * @author \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0429\u0435\u0440\u0431\u0430\u043a\u043e\u0432 &lt;atomcms@ya.ru&gt; * @version 21.01.2020 *\/ users.lock = function (id) { lemurro.users.lock(id, function (result) { \/\/ }); }; \u0424\u0430\u0439\u043b 300-unlock.js \/** * \u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f * * @param {string} id \u0418\u0414 \u0437\u0430\u043f\u0438\u0441\u0438 * * @author \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0429\u0435\u0440\u0431\u0430\u043a\u043e\u0432 &lt;atomcms@ya.ru&gt; * @version 21.01.2020 *\/ users.unlock = function (id) { lemurro.users.unlock(id, function (result) { \/\/ }); }; \u0418 \u0432 \u0444\u0430\u0439\u043b\u0435 \/src\/html\/pages\/users\/tpl_item.html \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043d\u043e\u0432\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0432\u043c\u0435\u0441\u0442\u043e lemurro.users.lock \u0438 lemurro.users.unlock \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c users.lock \u0438 users.unlock \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0440\u0435\u0434\u043d\u0435\u0439 \u0432\u0430\u0436\u043d\u043e\u0441\u0442\u0438 [\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438] \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u0430 \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0412 \u0444\u0430\u0439\u043b\u0435 \/src\/html\/pages\/users\/content.html \u043f\u0435\u0440\u0435\u0434 \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440 &lt;!-- include \"users\/filter.html\" --&gt; &lt;!-- include \"users\/list.html\" --&gt; \u0421\u043e\u0436\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0444\u0430\u0439\u043b\u0430 \/src\/html\/pages\/users\/filter.html \u043c\u043e\u0436\u043d\u043e \u0432\u0437\u044f\u0442\u044c \u0437\u0434\u0435\u0441\u044c \u0418\u0437 \u0444\u0430\u0439\u043b\u0430 \/src\/html\/pages\/users\/list.html \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0431\u0440\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438 \u043f\u043e\u043b\u0435 \u0441\u0442\u0430\u0440\u043e\u0433\u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430","tags":"","url":"Obnovlenie_s_1.7_do_1.8.html"}]});