import React, { Suspense } from 'react';
import Layout from './layouts';
import './app.scss';
import PageLoading from './components/page-loading';

const App: React.FC = () => (
  <>
    <Suspense fallback={<PageLoading />}>
      <Layout />
      <PageLoading />
    </Suspense>
  </>
);

export default App;
