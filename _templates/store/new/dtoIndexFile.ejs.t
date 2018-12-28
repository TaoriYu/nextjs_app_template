---
to: <%= h.projectRoot %>/stores/<%= h.lcFirst(name) %>/dto/index.ts
---
export * from './incoming<%= h.ucFirst(name) %>.dto';
