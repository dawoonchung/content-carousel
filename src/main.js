const Carousel = (($) => {


  class Carousel {
    constructor ( selector = '.carousel' ) {
      this.selector = selector
    }
    init() {
      console.log( $( this.selector ).length )
    }
  }

  return Carousel

})(jQuery)
