---
to: <%= h.projectRoot %>/stores/<%= h.lcFirst(name) %>/<%= h.lcFirst(name) %>.store.ts
---
<% storeName = h.ucFirst(name) -%>
<% hasApi = true -%>
<% if (hasApi) { -%>
import { Api } from '../api';
<% } -%>
import { makeStore } from '../provider/MakeStore';

@makeStore(<%= storeName %>Store)
export class <%= storeName %>Store <%= hasApi ? 'extends Api ' : '' %>{

}
