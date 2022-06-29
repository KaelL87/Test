/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Container, Row } from '@nextui-org/react';
import React, { useCallback, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from 'src/helpers/ndex';
import Spinner1 from 'src/components/spinner/spinnerxs';
import { RootState } from 'src/store';
import { getMostViewsBoys } from 'src/store/apis/todoApi';
import { getResults } from 'src/store/slices/moviesSlice';
import CardMovies from '../CardMovies';
import './kids.scss';
import { setLoading } from 'src/store/slices/appSlice';

const Kids: React.FC = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state: RootState) => state.movies);
  const fetchMovies = useCallback(async (index: number, loader: boolean) => {
    if (loader) dispatch(setLoading(true));
    try {
      const res = await getMostViewsBoys(index);
      if (res && res.data) {
        console.log(res.data);
        dispatch(
          getResults({
            data: res.data.results,
            hasMore: res.data.total_pages !== 100,
            page: index,
          }),
        );
      }
    } catch (error) {
      console.log(error);
      if (loader) dispatch(setLoading(false));
    } finally {
      // End loading spinner
      if (loader) dispatch(setLoading(false));
    }
  }, []);
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchMovies(1, true);
    }
    return () => {
      mounted = false;
    };
  }, []);
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      console.log(movies);
    }
    return () => {
      mounted = false;
    };
  }, []);

  const moreNovies = async () => {
    fetchMovies(movies.page + 1, false);
  };
  const fetchMoreData = () => {
    console.log(1);
    setTimeout(() => {
      moreNovies();
    }, 3000);
  };

  return (
    <>
      <Container
        className="kids"
        gap={1}
        css={{
          height: 'calc(100vh - 100px)',
        }}
      >
        <Col className="scroll" id="scrollableDiv3">
          {movies.data !== undefined && (
            <InfiniteScroll
              key={-1}
              dataLength={movies.data.length}
              next={fetchMoreData}
              hasMore={movies.hasMore}
              loader={<Spinner1 />}
              scrollableTarget="scrollableDiv3"
              style={{ overflowX: 'hidden' }}
            >
              <Row wrap="wrap" className="Grid">
                {movies.data.map((item: any, i: number) => (
                  <div key={i}>
                    <CardMovies item={item} />
                  </div>
                ))}
              </Row>
            </InfiniteScroll>
          )}
        </Col>
      </Container>
    </>
  );
};

export default Kids;
