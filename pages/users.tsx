import * as React from 'react';
import { Head } from '../components/Head';
import { Layout } from '../components/Layout';
import { UsersListContainer } from '../components/UsersList';

// tslint:disable-next-line:no-default-export
export default function() {
  return (
    <Layout>
      <Head title="some page" />
      <UsersListContainer />
    </Layout>
  );
}
