---
inject: true
to: config/development.config.ts
after: serverRuntimeConfig
---
    <%= h.lcFirst(name) %>: {},