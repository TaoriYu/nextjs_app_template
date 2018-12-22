---
inject: true
to: ./index.ts
append: true
skip_if: <%= h.lcFirst(name) %>'
---
export * from './<%= h.lcFirst(name) %>';