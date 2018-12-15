---
inject: true
to: stores/<%= h.lcFirst(to) %>/dto/index.ts
append: true
skip_if: /<%= h.lcFirst(name) %>.dto'
---
export * from './<%= h.lcFirst(name) %>.dto';