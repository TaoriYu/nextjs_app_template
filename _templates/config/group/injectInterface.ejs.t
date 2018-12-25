---
inject: true
to: <%= h.projectRoot %>/config/types/IConfig.ts
append: true
---
export interface I<%= h.ucFirst(name) %> extends IWithPublic {
  // TODO: Write your stuff here
}