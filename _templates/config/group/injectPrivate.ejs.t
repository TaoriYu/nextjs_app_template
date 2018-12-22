---
inject: true
to: config/config.ts
after: serverRuntimeConfig
---
    <%= h.lcFirst(name) %>: {},