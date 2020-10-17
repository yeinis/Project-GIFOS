import { giphyService } from '../services/gifos.service.js';
import { buscar } from '../services/buscar.js';

class MenuEvent {


  /*===================================
  =       Event button new gifo       =
  ====================================*/
  onShowPageNewGigo() {
    const newGifoSelector = this.$( '.crear-gifo' );

    newGifoSelector.addEventListener( 'click', async () => {
      let homeSelector = this.$( '.home-section' );
      let newGifoSelector = this.$( '.new-gifos-section' );

      homeSelector.style.cssText = `display: none;`;
      newGifoSelector.style.cssText = 'display: block;';
    } );
  }

  /*=====================
  =    Event logo       =
  =======================*/
  onShowPageHome() {
    const newGifoSelector = this.$( '.logo-mobile' );

    newGifoSelector.addEventListener( 'click', async () => {
      let homeSelector = this.$( '.home-section' );
      let newGifoSelector = this.$( '.new-gifos-section' );

      homeSelector.style.cssText = 'display: block;';
      newGifoSelector.style.cssText = 'display: none;';

    } );
  }

  $( selector ) {
    return document.querySelector( selector );
  }

  $All( selector ) {
    return document.querySelectorAll( selector );
  }

}

const menuEvent = new MenuEvent();

export {
  menuEvent
};