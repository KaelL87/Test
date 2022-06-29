import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import Spinner from '../spinner';
import './pageloading.scss';
interface IProps {
  show?: boolean;
}

const PageLoading: React.FC<IProps> = ({ show }) => {
  const { loading } = useSelector((state: RootState) => state.app);
  const showLoading = typeof show === 'boolean' ? show : loading !== 0;

  return (
    <div className="page-loading" style={{ display: showLoading ? '' : 'none' }}>
      <div className="loading-content">
        <Spinner />
      </div>
    </div>
  );
};

export default PageLoading;
