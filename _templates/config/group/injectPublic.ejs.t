---
inject: true
to: <%= h.projectRoot %>/config/config.ts
after: publicRuntimeConfig
---
    <%= h.lcFirst(name) %>: {},