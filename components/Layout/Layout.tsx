import Link from 'next/link';
import * as React from 'react';
import { Container, Menu, Segment } from 'semantic-ui-react';

export interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div>
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
