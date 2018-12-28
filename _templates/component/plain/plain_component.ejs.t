---
to: <%= cwd %>/<%= h.ucFirst(name) %>.tsx
---
import * as React from 'react';

export interface I<%= h.ucFirst(name) %>Props {
  children?: React.ReactNode;
}

export function <%= h.ucFirst(name) %>({ children }: I<%= h.ucFirst(name) %>Props) {
  return (
    <div>{children}</div>
  );
}
