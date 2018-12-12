---
message: |
  - hygen {bold config group} --name [NAME]
    Creates a configuration group in project config directory with index file and sample configuration property.
    Also it inject a type reference to configuration typings and development.config.ts. You may fill configuration
    type interface in IConfig.ts after creation. It's may be useful to use with:
    hygen config prop --to [currently created group] --name [new property name]

  - hygen {bold config prop} --to [TO] --name [NAME]
    Creates a config property field in [TO] directory. {bold [TO]} - must be a {red single} word {red existing }
    directory name. It also inject a reference to property in index file.
---