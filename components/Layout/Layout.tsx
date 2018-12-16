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
          <Menu.Item>Repositories</Menu.Item>
          <Menu.Item>Users</Menu.Item>
        </Menu>
        <Segment attached="bottom">
          {children }
        </Segment>
      </Container>
    </div>
  );
}
