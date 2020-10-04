import { giphyService } from './gifos.service.js';


class Buscar {

  /*====================================
  =       Get and search trending      =
  ====================================*/
  async getTrendingByText( textParam ) {
    const textBuscar = textParam;
    let tags = '';

    if ( textBuscar ) {
      let result = await giphyService.getGifodByText( textBuscar );
      const imgSelector = this.$( '.buscados-section' );
      const tittleSelector = this.$( '.title-text' );

      tittleSelector.innerHTML = `<p class="titulos text-color-purple p-2">${ textBuscar } </p>`;

      result.data.forEach( element => {
        tags = tags + `
        <div class="col-6">
          <img src=${ element.images.downsized.url } width="141" height="117" alt="${ element.title }">
        </div>`;
      } );

      imgSelector.innerHTML = tags;
    } else {
      alert( 'Error, Debe ingresar un valor para filtrar' );
    }

  }

  /*=========================================
  =      Get and paint Trending Labels      =
  ==========================================*/
  async getCardTrending() {
    const result = await giphyService.getTrending();
    if ( result.data.length === 0 ) { return; }

    const selector = this.$( '.trending-container' );
    let tag = '';

    result.data.forEach( element => {
      tag = tag + `<a class="text pl-2">${ element },</a>`;
    } );

    selector.innerHTML = tag;
  }

  /*=====================================
  =        paint uggested trends       =
  =====================================*/
  async searchByTags( textBuscar ) {
    let tag = '';
    const sectionSearchSelection = this.$( '.section-search' );
    const inputBuscandoSelector = this.$( '.input-buscar' );
    const sugerenciasSelector = this.$( '.list-sugerencias' );

    if ( textBuscar ) {
      const result = await giphyService.getGifosByTag( textBuscar );

      result.data.forEach( element => {
        tag = tag + `
          <div class="d-flex align-item-center item">
            <i class="fa fa-search pr-3 text-color-list" aria-hidden="true"></i>
            <p class="text item-text pl-2 letra-list">${ element.name }</p>
          </div>`;
      } );

      inputBuscandoSelector.classList.add( 'input-buscando' );
      sectionSearchSelection.classList.add( 'border-section-search' );
      sugerenciasSelector.innerHTML = tag;
    } else {
      inputBuscandoSelector.classList.remove( 'input-buscando' );
      sectionSearchSelection.classList.remove( 'border-section-search' );
      sugerenciasSelector.innerHTML = '';
    }

    this.onSearchByItem();
  }

  /*=====================================
   =      search by suggested trends     =
   =====================================*/
  onSearchByItem() {
    const itemSelector = document.querySelectorAll( '.list-sugerencias > div > p.item-text' );

    itemSelector.forEach( element => {
      element.addEventListener( 'click', async ( event ) => {
        var item = event.target;
        buscar.getTrendingByText( item.innerText );
      } );
    } );
  }

  /*===============================
  =     Query Selector global     =
  ================================*/
  $( selector ) {
    return document.querySelector( selector );
  }

}

const buscar = new Buscar();
Object.freeze( buscar );

export {
  buscar
};