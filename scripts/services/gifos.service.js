const CONSTANTS = {
  APIKEY: "oaCm5DAm2vNLqV1jjvm6FdhyalnJQka3",
  BASE_PATH: 'https://api.giphy.com/v1',
  TRENDING: '/trending'
};

class GiphyService {
  limit = 0;
  trendingHandler = data => console.log( data );


  /*============================
  =      get trending image    =
  =============================*/
  getTrending() {
    const filter = { api_key: CONSTANTS.APIKEY };
    return this.get( `${ CONSTANTS.BASE_PATH }/gifs` + CONSTANTS.TRENDING + this.getParams( filter ), this.trendingHandler );
  }

  /*============================
  =      get Gif by text       =
  =============================*/
  getGifodByText( text ) {
    this.limit = this.limit + 12;

    const filter = {
      api_key: CONSTANTS.APIKEY,
      q: text,
      limit: this.limit
    };

    return this.get( `${ CONSTANTS.BASE_PATH }/gifs/search` + this.getParams( filter ) );
  }

  /*==============================
  =      get trending Labels     =
  ===============================*/
  getTrendingLabels() {
    const filter = { api_key: CONSTANTS.APIKEY };
    return this.get( CONSTANTS.BASE_PATH + `${ CONSTANTS.TRENDING }/searches` + this.getParams( filter ) );
  }

  /*=================================
  =     get sugerencias by text     =
  ================================= */
  getGifosByTag( text ) {
    const filter = {
      api_key: CONSTANTS.APIKEY,
      q: text
    };

    return this.get( CONSTANTS.BASE_PATH + `/gifs/search/tags` + this.getParams( filter ) );
  }

  /*=================================
  =     get sugerencias by text     =
  ================================= */
  getParams( params ) {
    const paramsString = '?' + new URLSearchParams( params ).toString();
    return paramsString;
  }

  /*====================
  =     get method     =
  =====================*/
  async get( url ) {
    const resp = await fetch( url );
    return await resp.json();
  }


}

const giphyService = new GiphyService();
// Object.freeze( giphyService );

export {
  giphyService,
};

// export default GiphyService;