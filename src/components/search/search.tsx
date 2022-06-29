/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Container, Input, Row, Text, Grid } from '@nextui-org/react';
import React, { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from 'src/helpers/ndex';
import Spinner1 from 'src/components/spinner/spinnerxs';
import { RootState } from 'src/store';
import { searchMoviesApi } from 'src/store/apis/todoApi';
import { clearSearch, getSearchMovies } from 'src/store/slices/moviesSlice';
import CardCartelera from '../CardMovies';
import './search.scss';
import { setLoading } from 'src/store/slices/appSlice';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const [finish, setFinish] = useState(false);
  const { searchMovies } = useAppSelector((state: RootState) => state.movies);
  const fetchMovies = useCallback(async (search: string, index: number, loader: boolean) => {
    if (loader) dispatch(setLoading(true));
    try {
      const res = await searchMoviesApi(search, index);
      if (res && res.data) {
        console.log(res.data);
        dispatch(
          getSearchMovies({
            data: res.data.results,
            hasMore: res.data.total_pages !== 1000 && res.data.results.length === 20,
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
      if (finish) {
        if (search !== '') fetchMovies(search, 1, true);
        else dispatch(clearSearch());
      }
    }
    return () => {
      mounted = false;
    };
  }, [finish]);
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      console.log(searchMovies);
      if (search === '') dispatch(clearSearch());
    }
    return () => {
      mounted = false;
    };
  }, []);

  const moreNovies = async () => {
    fetchMovies(search, searchMovies.page + 1, false);
  };
  const fetchMoreData = () => {
    console.log(1);
    setTimeout(() => {
      moreNovies();
    }, 3000);
  };

  const handleOnChange = e => {
    let timeout = {} as any;
    setFinish(false);
    clearTimeout(timeout);
    setSearch(e.target.value);
    timeout = setTimeout(() => {
      setFinish(true);
      clearTimeout(timeout);
    }, 3000);
  };
  const handleOnKeyPress = e => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Container
        className="search"
        gap={1}
        css={{
          height: 'calc(100vh - 125px)',
        }}
      >
        <Row justify="center">
          <Input
            aria-label={'search'}
            type="search"
            value={search}
            width="520px"
            placeholder="Search movie"
            onChange={e => handleOnChange(e)}
            onKeyPress={e => handleOnKeyPress(e)}
          />
        </Row>
        <Col className="scroll" id="scrollableDiv3">
          {searchMovies.data !== undefined && searchMovies.data.length > 0 ? (
            <InfiniteScroll
              key={-1}
              dataLength={searchMovies.data.length}
              next={fetchMoreData}
              hasMore={searchMovies.hasMore}
              loader={<Spinner1 />}
              scrollableTarget="scrollableDiv3"
              style={{ overflowX: 'hidden' }}
            >
              <Row wrap="wrap" className="Grid">
                {searchMovies.data.map((item: any, i: number) => (
                  <div key={i}>
                    <CardCartelera item={item} />
                  </div>
                ))}
              </Row>
            </InfiniteScroll>
          ) : (
            <Grid xs={12} justify="center">
              <Text
                h1
                size={60}
                css={{
                  textGradient: '45deg, $blue600 -20%, $pink600 50%',
                  maxWidth: '432px',
                  margin: '0 auto',
                  position: 'relative',
                  top: '50px',
                }}
                weight="bold"
              >
                No search results
              </Text>
            </Grid>
          )}
        </Col>
      </Container>
    </>
  );
};

export default Search;
