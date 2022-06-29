/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Details from 'src/components/details/details';
import MostViews from 'src/components/mostViews/mostviews';
import Search from 'src/components/search/search';
import Playing from '../../components/playing/playing';
import Kids from 'src/components/kids/kids';

const Main: React.FC = () => {
  return (
    <div id="main">
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/playing" />} />
          <Route path="playing" element={<Playing />} />
          <Route path="popular" element={<MostViews />} />
          <Route path="kids" element={<Kids />} />
          <Route path="search" element={<Search />} />
          <Route path="details:id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Main;
