import React from 'react';
import Head from '../components/head';
import { RepoListContainer } from '../components/RepoList';

// tslint:disable-next-line:no-default-export
export default function() {
  return (
    <div>
      <Head title="some page" />
      <RepoListContainer />
    </div>
  );
}
