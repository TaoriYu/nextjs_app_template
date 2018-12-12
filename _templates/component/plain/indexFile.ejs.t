---
inject: true
to: <%= cwd %>/index.ts
append: true
skip_if: <%= h.ucFirst(name) %>
---
export * from './<%= h.ucFirst(name) %>';