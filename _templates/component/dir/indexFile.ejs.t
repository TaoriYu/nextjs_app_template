---
to: <%= cwd %>/<%= h.ucFirst(name) %>/index.ts
---
export * from './<%= h.ucFirst(name) %>';
