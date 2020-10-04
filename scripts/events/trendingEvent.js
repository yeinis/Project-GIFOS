import { giphyService } from '../services/gifos.service.js';
import { buscar } from '../services/buscar.js';

class TrendingEvent {

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
}

const trendingEvent = new TrendingEvent();
Object.freeze( trendingEvent );

export {
  trendingEvent
};