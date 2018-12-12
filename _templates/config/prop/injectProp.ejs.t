---
inject: true
to: config/<%= to %>/index.ts
append: true
---
export * from './<%= h.lcFirst(name) %>';