---
inject: true
to: config/development.config.ts
after: publicRuntimeConfig
---
    <%= h.lcFirst(name) %>: {},