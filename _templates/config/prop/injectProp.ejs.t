---
inject: true
to: <%= h.projectRoot %>/config/<%= to %>/index.ts
append: true
---
export * from './<%= h.lcFirst(name) %>';