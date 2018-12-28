---
inject: true
to: <%= h.projectRoot %>/config/config.ts
after: serverRuntimeConfig
---
    <%= h.lcFirst(name) %>: {},