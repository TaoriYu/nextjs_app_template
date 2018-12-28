---
inject: true
to: <%= h.projectRoot %>/config/config.ts
after: defaultConfig,
skip_if: [<%= h.lcFirst(name) %>, '<%= h.lcFirst(name) %>']
---
  [<%= h.lcFirst(name) %>, '<%= h.lcFirst(name) %>'],