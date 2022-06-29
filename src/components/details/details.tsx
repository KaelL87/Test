/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'src/helpers/ndex';
import { RootState } from 'src/store';
import { IMovie } from 'src/types';
import CardDetails from '../CardDetails';
import './details.scss';

const Details: React.FC = () => {
  const { searchMovies, movies } = useAppSelector((state: RootState) => state.movies);
  const params = useParams();
  const [item, setItem] = useState({} as IMovie);
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const temp = movies.data.find(item => item.id.toString() === params.id?.slice(1)) as IMovie;
      if (temp === undefined) {
        const result = searchMovies.data.find(
          item => item.id.toString() === params.id?.slice(1),
        ) as IMovie;
        setItem(result);
      } else setItem(temp);
    }
    return () => {
      mounted = false;
    };
  }, [params]);
  return (
    <>
      <Container
        className="search"
        gap={1}
        css={{
          height: 'calc(100vh - 125px)',
        }}
      >
        {item && <CardDetails item={item} />}
      </Container>
    </>
  );
};

export default Details;
