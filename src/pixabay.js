import axios from 'axios';
export default class PixabayApiService {
  constructor() {
    this.searchQueryEl = '';
    this.page = 1;
    this.per_page = 40;
  }

  async axiosArticales() {
    console.log(this);
    const url = `https://pixabay.com/api/?key=35597062-d171d9a37fc2164dbfe985ce7&q=${this.searchQueryEl}&language=en&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;

    const response = await axios.get(url);
    return response.data;
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get searchQuery() {
    return this.searchQueryEl;
  }
  set searchQuery(newQuery) {
    this.searchQueryEl = newQuery;
  }
}
