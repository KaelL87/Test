import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import Main from './main';

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
};

export default Layout;
