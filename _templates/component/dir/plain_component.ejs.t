---
to: <%= cwd %>/<%= h.ucFirst(name) %>/<%= h.ucFirst(name) %>.tsx
---
import * as React from 'react';
import * as styles from './<%= h.lcFirst(name) %>.css';

export interface I<%= h.ucFirst(name) %>Props {
  children?: React.ReactNode;
}

export function <%= h.ucFirst(name) %>({ children }: I<%= h.ucFirst(name) %>Props) {
  return (
    <div className={styles.style}>{children}</div>
  );
}
