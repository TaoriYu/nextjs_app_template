import React from 'react';
import { Head } from '../components/Head';
import { Layout } from '../components/Layout';
import { RepoListContainer } from '../components/RepoList';

// tslint:disable-next-line:no-default-export
export default function() {
  return (
    <Layout>
      <Head title="some page" />
      <RepoListContainer />
    </Layout>
  );
}
