---
inject: true
to: ./index.ts
append: true
skip_if: /<%= h.lcFirst(name) %>.dto'
---
export * from './<%= h.lcFirst(name) %>.dto';