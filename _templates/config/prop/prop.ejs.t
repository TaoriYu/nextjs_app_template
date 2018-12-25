---
to: <%= h.projectRoot %>/config/<%= to %>/<%= h.lcFirst(name) %>.ts
---
import { I<%= h.ucFirst(to) %> } from '../types/IConfig';

export const <%= h.lcFirst(name) %>: I<%= h.ucFirst(to) %> = {
  public: false,
}
