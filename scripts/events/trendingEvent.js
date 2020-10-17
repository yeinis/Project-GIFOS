import { giphyService } from '../services/gifos.service.js';
import { buscar } from '../services/buscar.js';

class TrendingEvent {
  positionSliderTrending = 0;

  /*===================================
  =       Event button show more      =
  ====================================*/
  onShowMore() {
    const showMoreSelector = this.$( '.button-more' );

    showMoreSelector.addEventListener( 'click', async ( event ) => {
      console.log( 'entre al boton click' );
      this.getTrendingByText();

    } );
  }

  /*===================================
  =     Event search with button      =
  ====================================*/
  onSearchButton() {
    const buscarSelector = this.$( '#buscar' );

    buscarSelector.addEventListener( 'click', async () => {
      buscar.getTrendingByText( this.$( '#text-buscar' ).value );
    } );
  }

  /*===================================
  =       Event seachr by letters     =
  ====================================*/
  onSearchByTags() {
    const textTobuscarSelector = this.$( '#text-buscar' );

    textTobuscarSelector.addEventListener( 'keyup', async () => {

      const textBuscar = textTobuscarSelector.value;

      buscar.searchByTags( textBuscar );
    } );
  }

  /*===================================
  =       Event search by item        =
  ====================================*/
  onSearchByItem() {
    const itemSelector = document.querySelectorAll( '.list-sugerencias > div > p.item-text' );

    itemSelector.forEach( element => {
      element.addEventListener( 'click', async ( event ) => {
        var item = event.target;
        buscar.getTrendingByText( item.innerText );

      } );

    } );
  }

  /*===================================
  =      Event Buttong next image     =
  ====================================*/
  onNextTrending() {
    const buttonNextSelector = this.$( '.next' );
    const buttonBeforeSelector = this.$( '.before' );
    
    buttonNextSelector.addEventListener( 'click', async () => {
      this.positionSliderTrending = this.positionSliderTrending - 250;
      console.log( 'netx ----', this.positionSliderTrending );
      if ( this.positionSliderTrending != 0 ) {
        buttonBeforeSelector.disabled =  false;
      }

      const imgTrendingSelector = this.$All( '.trending-traslate' );
      imgTrendingSelector.forEach( element => {
        element.style.cssText = `transform: translate( ${ this.positionSliderTrending }px );`;
      } );
    } );
  }


  /*===================================
  =      Event Buttong before image     =
  ====================================*/
  onBeforeTrending() {
    const buttonBeforeSelector = this.$( '.before' );

    if ( this.positionSliderTrending === 0 ) {
      buttonBeforeSelector.disabled = true;
    }
    
    buttonBeforeSelector.addEventListener( 'click', async () => {
      this.positionSliderTrending = this.positionSliderTrending + 250;
      console.log( 'before ----', this.positionSliderTrending );
      if ( this.positionSliderTrending === 0 ) {
        buttonBeforeSelector.disabled = true;
      }

      const imgTrendingSelector = this.$All( '.trending-traslate' );
      imgTrendingSelector.forEach( element => {
        element.style.cssText = `transform: translate( ${ this.positionSliderTrending }px );`;
      } );
    } );
  }

  /*======================================
  =    method search trending by text    =
  =======================================*/
  getTrendingByText() {
    const buscarSelector = this.$( '#text-buscar' );
    const text = buscarSelector.value;
    buscar.getTrendingByText( text );

  }

  /*===============================
    =     Query Selector global     =
    ================================*/
  $( selector ) {
    return document.querySelector( selector );
  }
  
  $All( selector ) {
    return document.querySelectorAll( selector );
  }
}

const trendingEvent = new TrendingEvent();
// Object.freeze( trendingEvent );

export {
  trendingEvent
};