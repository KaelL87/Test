import { AxiosResponse } from 'axios';
import HttpRequest from 'src/services/http-request';

export const getCartelera = async (index: number): Promise<AxiosResponse> =>
  HttpRequest.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=45bf6592c14a965b33549f4cc7e6c664&page=${index}`,
  );

export const getMostViews = async (index: number): Promise<AxiosResponse> =>
  HttpRequest.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&sort_by=popularity.asc&include_video=false&page=${index}`,
  );

export const getMostViewsBoys = async (index: number): Promise<AxiosResponse> =>
  HttpRequest.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&sort_by=popularity.asc&include_adult=false&with_genres=28&page=${index}`,
  );

export const searchMoviesApi = async (search: string, index: number): Promise<AxiosResponse> =>
  HttpRequest.get(
    `https://api.themoviedb.org/3/search/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&query=${search}&page=${index}`,
  );
