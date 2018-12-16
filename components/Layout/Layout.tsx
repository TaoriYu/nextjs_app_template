import * as React from 'react';
import * as styles from './layout.css';
import Link from 'next/link';
import { Container, Menu, Segment } from 'semantic-ui-react';

export interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.main}>
      <Container>
        <Menu attached="top">
          <Link href="/" prefetch>
            <Menu.Item as="a">Repositories</Menu.Item>
          </Link>
          <Link href="/users" prefetch>
            <Menu.Item as="a">Users</Menu.Item>
          </Link>
        </Menu>
        <Segment attached="bottom">
          {children }
        </Segment>
      </Container>
    </div>
  );
}
