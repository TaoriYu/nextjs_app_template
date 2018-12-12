---
inject: true
to: config/development.config.ts
after: defaultConfig,
skip_if: [<%= h.lcFirst(name) %>, '<%= h.lcFirst(name) %>']
---
  [<%= h.lcFirst(name) %>, '<%= h.lcFirst(name) %>'],