---
to: <%= cwd %>/<%= h.ucFirst(Name) %>.tsx
---
import * as React from 'react';

export interface I<%= h.ucFirst(Name) %>Props {
  children?: React.ReactNode;
}

export function <%= h.ucFirst(Name) %>({ children }: I<%= h.ucFirst(Name) %>Props): React.ReactNode {
  return (
    <div>{children}</div>
  );
}
