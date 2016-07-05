const Carousel = (($) => {
  class Carousel {
    constructor (selector = '.carousel') {
      this._selector = selector
      this._element  = $(this._selector)
    }

    init() {
      let _this = this

      this._element.each(function() {
        let id     = $(this).attr('id')
        let $inner = $(this).find('.carousel-inner')
        let $item  = $inner.find('.carousel-item')

        $(this).attr('data-current', 0)
        $inner.wrap('<div class="carousel-table"></div>')

        let $table = $('#' + id).find('.carousel-table')

        $table.css('width', $item.length * 100 + '%')

        $table.find('.carousel-item').css('width', 100/$item.length + '%')

        _this.initNav(id, $item)
      })

      this.bindNav()
    }

    initNav(id, $item) {
      let target = '#' + id
      let count  = 0

      let output = '<ol class="carousel-nav">'

      $item.each(function() {
        if (count === 0) {
          output  += `<li class="active" data-target="${target}" data-slide-to="${count++}"></li>`
        } else {
          output  += `<li data-target="${target}" data-slide-to="${count++}"></li>`
        }
      })

      output    += '</ol>'

      output    += `<a class="carousel-arrow carousel-prev glyphicon glyphicon-chevron-left" data-target="${target}"></a>`
      output    += `<a class="carousel-arrow carousel-next glyphicon glyphicon-chevron-right" data-target="${target}"></a>`

      $(target).append(output)

    }

    bindNav() {
      let _this  = this
      let button = $('.carousel-nav li')
      let prev   = $('.carousel-prev')
      let next   = $('.carousel-next')

      button.bind('click', function() {
        _this.goTo($(this).attr('data-target'), $(this).attr('data-slide-to'))
      })

      prev.bind('click', function() {
        _this.prev($(this).attr('data-target'))
      })

      next.bind('click', function() {
        _this.next($(this).attr('data-target'))
      })
    }

    goTo(target, slideTo) {
      let currentSlide = $(target).attr('data-current')
      
      if (currentSlide == slideTo) {
        return
      } else {
        $(target).attr('data-current', slideTo)
        this.slid(target, slideTo)
      }
    }

    prev(target) {
      let currentSlide = $(target).attr('data-current')
      let itemNum      = $(target).find('.carousel-item').length
      let slideTo      = (currentSlide == '0') ? itemNum-1 : --currentSlide

      $(target).attr('data-current', slideTo)
      this.slid(target, slideTo)
    }

    next(target) {
      let currentSlide = $(target).attr('data-current')
      let itemNum      = $(target).find('.carousel-item').length
      let slideTo      = (currentSlide == itemNum-1) ? 0 : ++currentSlide

      $(target).attr('data-current', slideTo)
      this.slid(target, slideTo)
    }

    slid(target, slideTo) {
      let currentNav   = $(target).find('.carousel-nav li.active')
      let itemNum   = $(target).find('.carousel-item').length
      let targetPos = (slideTo * -100)/itemNum

      currentNav.removeClass('active').siblings(`[data-slide-to=${slideTo}]`).addClass('active')
      $(target).find('.carousel-table').css('transform', `translateX(${targetPos}%)`)
    }
  }

  return Carousel
})(jQuery)
