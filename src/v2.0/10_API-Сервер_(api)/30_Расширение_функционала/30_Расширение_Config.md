# Расширение Config
Для переопределения настроек вы можете создать файлы в каталоге `/app/Overrides/Configs`

Например необходимо переопределить часть настроек `database` и настроить `guides`, создадим два файла:

**database.yaml**
```yaml
database:
  mysql:
    password: "my_password"
```
**guides.yaml**
```yaml
guides:
  classes:
    example: "Example"
```

Также вы можете создавать неограниченное количество своих файлов с настройками, они все попадут в переменную `$this->dic['config']`