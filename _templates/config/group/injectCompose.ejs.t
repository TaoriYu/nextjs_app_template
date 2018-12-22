---
inject: true
to: config/config.ts
after: defaultConfig,
skip_if: [<%= h.lcFirst(name) %>, '<%= h.lcFirst(name) %>']
---
  [<%= h.lcFirst(name) %>, '<%= h.lcFirst(name) %>'],