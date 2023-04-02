import axios from 'axios';

const API_KEY = '250b660de277c9bf01aaf41149686697';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class MovieAPI {
  async getTrendingMovies() {
    try {
      const response = await axios.get(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getMovieDetails(movieId) {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getMovieCredits(movieId) {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
