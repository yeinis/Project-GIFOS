// import GiphyService from './services/gifos.service.js';
import { buscar } from './services/buscar.js';
import { trendingEvent } from './events/trendingEvent.js';

setTimeout(() => {
buscar.getCardTrending();
// buscar.searchByTags();

// Event trending
  trendingEvent.onShowMore();  
  trendingEvent.onSearchButton();
  trendingEvent.onSearchByTags();
}, 1000);