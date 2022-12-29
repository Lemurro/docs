# Помощник для управления табами

Активно используется в разделе `Справочники`

# lemurro.tabs.showTab(tabID)
Покажем указанный таб
- `tabID` {string} *Обязательно* - Идентификатор нужного таба

# lemurro.tabs.tabInsertEdit(action, tabFormName, tabPrevName)
Скрыть\Показать вторую вкладку
- `action` {string} *Обязательно* - Действие (show|hide)
- `tabFormName` {string} *Опционально* - Имя таба с формой или null, тогда будет: tab-form
- `tabPrevName` {string} *Опционально* - Имя предыдущего таба или null, тогда будет: tab-list

# lemurro.tabs.getTabTitle(type)
Получение заголовка для таба из шаблона
- `type` {string} *Обязательно* - Вид шаблона (add|edit)