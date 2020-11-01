class NewGifoEvent {
  onStart() {
    console.log('entreeeeeeeeeeeeeeeeee')
    const startButtonSelector = this.$( '.button-start' );
    let marcoPermisosSelector = this.$( '.marco-permisos');
    let tituloContainerSelector = this.$( '.titulo-container');

    startButtonSelector.addEventListener( 'click', async () => {
      tituloContainerSelector.style.cssText = 'display: none;';
      marcoPermisosSelector.style.cssText = 'display: block;';

    } );

  }

  $( selector ) {
    return document.querySelector( selector );
  }

  $All( selector ) {
    return document.querySelectorAll( selector );
  }
}


const newGifoEvent = new NewGifoEvent();
export {
  newGifoEvent
};