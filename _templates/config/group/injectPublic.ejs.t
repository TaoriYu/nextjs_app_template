---
inject: true
to: config/config.ts
after: publicRuntimeConfig
---
    <%= h.lcFirst(name) %>: {},