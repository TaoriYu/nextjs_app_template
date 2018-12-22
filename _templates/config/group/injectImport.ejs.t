---
inject: true
to: /config/config.ts
prepend: true
skip_if: import * as <%= h.lcFirst(name) %> from './<%= h.lcFirst(name) %>'
---
import * as <%= h.lcFirst(name) %> from './<%= h.lcFirst(name) %>';