const CONSTANTS = {
  APIKEY: "oaCm5DAm2vNLqV1jjvm6FdhyalnJQka3",
  BASE_PATH: 'https://api.giphy.com/v1',
  TRENDING: '/trending'
};

class GiphyService {

  limit = 0;

  async get( url ) {
    const resp = await fetch( url );
    return await resp.json();
  }

  trendingHandler = data => console.log( data );

  trending() {
    const filter = { api_key: CONSTANTS.APIKEY };
    return this.get( `${ CONSTANTS.BASE_PATH }/gifs` + CONSTANTS.TRENDING + this.getParams( filter ), this.trendingHandler );
  }

  getGifodByText( text ) {    
    this.limit = this.limit + 12;

    const filter = {
      api_key: CONSTANTS.APIKEY,
      q: text,
      limit: this.limit
    };
    console.log( 'queryyyyyyy', filter );
    return this.get( `${ CONSTANTS.BASE_PATH }/gifs/search` + this.getParams( filter ) );
  }

  // ====== get trending ======
  getTrending() {
    const filter = { api_key: CONSTANTS.APIKEY };
    return this.get( CONSTANTS.BASE_PATH + `${ CONSTANTS.TRENDING }/searches` + this.getParams( filter ) );
  }

  // ====== get sugerencias by text ======
  getGifosByTag( text ) {
    const filter = {
      api_key: CONSTANTS.APIKEY,
      q: text
    };
    return this.get( CONSTANTS.BASE_PATH + `/gifs/search/tags` + this.getParams( filter ) );

  }



  getParams( params ) {
    const paramsString = '?' + new URLSearchParams( params ).toString();
    return paramsString;
  }

}

const giphyService = new GiphyService();
// Object.freeze( giphyService );

export {
  giphyService,
};

// export default GiphyService;