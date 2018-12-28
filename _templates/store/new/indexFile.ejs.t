---
to: <%= h.projectRoot %>/stores/<%= h.lcFirst(name) %>/index.ts
skip_if: <%= h.lcFirst(name) %>.store
---
export * from './<%= h.lcFirst(name) %>.store';
