---
inject: true
to: config/types/IConfig.ts
append: true
---
export interface I<%= h.ucFirst(name) %> extends IWithPublic {
  // TODO: Write your stuff here
}