// import GiphyService from './services/gifos.service.js';
import { buscar } from './services/buscar.js';
import { trendingEvent } from './events/trendingEvent.js';
import { menuEvent } from './events/menuEvent.js'; 
import { newGifoEvent } from './events/newGifoEvent.js';

setTimeout( () => {
  buscar.getCardTrending();
  buscar.getTrending();

  // Event Menu
  menuEvent.onShowPageNewGigo();
  menuEvent.onShowPageHome();

  // Event trending
  trendingEvent.onShowMore();
  trendingEvent.onSearchButton();
  trendingEvent.onSearchByTags();
  trendingEvent.onNextTrending();
  trendingEvent.onBeforeTrending();

  // Event new gifos
  newGifoEvent.onStart();


}, 1000 );