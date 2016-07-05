'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Carousel = function ($) {
  var Carousel = function () {
    function Carousel() {
      var selector = arguments.length <= 0 || arguments[0] === undefined ? '.carousel' : arguments[0];

      _classCallCheck(this, Carousel);

      this._selector = selector;
      this._element = $(this._selector);
    }

    _createClass(Carousel, [{
      key: 'init',
      value: function init() {
        var _this = this;

        this._element.each(function () {
          var id = $(this).attr('id');
          var $inner = $(this).find('.carousel-inner');
          var $item = $inner.find('.carousel-item');

          $(this).attr('data-current', 0);
          $inner.wrap('<div class="carousel-table"></div>');

          var $table = $('#' + id).find('.carousel-table');

          $table.css('width', $item.length * 100 + '%');

          $table.find('.carousel-item').css('width', 100 / $item.length + '%');

          _this.initNav(id, $item);
        });

        this.bindNav();
      }
    }, {
      key: 'initNav',
      value: function initNav(id, $item) {
        var target = '#' + id;
        var count = 0;

        var output = '<ol class="carousel-nav">';

        $item.each(function () {
          if (count === 0) {
            output += '<li class="active" data-target="' + target + '" data-slide-to="' + count++ + '"></li>';
          } else {
            output += '<li data-target="' + target + '" data-slide-to="' + count++ + '"></li>';
          }
        });

        output += '</ol>';

        output += '<a class="carousel-arrow carousel-prev glyphicon glyphicon-chevron-left" data-target="' + target + '"></a>';
        output += '<a class="carousel-arrow carousel-next glyphicon glyphicon-chevron-right" data-target="' + target + '"></a>';

        $(target).append(output);
      }
    }, {
      key: 'bindNav',
      value: function bindNav() {
        var _this = this;
        var button = $('.carousel-nav li');
        var prev = $('.carousel-prev');
        var next = $('.carousel-next');

        button.bind('click', function () {
          _this.goTo($(this).attr('data-target'), $(this).attr('data-slide-to'));
        });

        prev.bind('click', function () {
          _this.prev($(this).attr('data-target'));
        });

        next.bind('click', function () {
          _this.next($(this).attr('data-target'));
        });
      }
    }, {
      key: 'goTo',
      value: function goTo(target, slideTo) {
        var currentSlide = $(target).attr('data-current');

        if (currentSlide == slideTo) {
          return;
        } else {
          $(target).attr('data-current', slideTo);
          this.slid(target, slideTo);
        }
      }
    }, {
      key: 'prev',
      value: function prev(target) {
        var currentSlide = $(target).attr('data-current');
        var itemNum = $(target).find('.carousel-item').length;
        var slideTo = currentSlide == '0' ? itemNum - 1 : --currentSlide;

        $(target).attr('data-current', slideTo);
        this.slid(target, slideTo);
      }
    }, {
      key: 'next',
      value: function next(target) {
        var currentSlide = $(target).attr('data-current');
        var itemNum = $(target).find('.carousel-item').length;
        var slideTo = currentSlide == itemNum - 1 ? 0 : ++currentSlide;

        $(target).attr('data-current', slideTo);
        this.slid(target, slideTo);
      }
    }, {
      key: 'slid',
      value: function slid(target, slideTo) {
        var currentNav = $(target).find('.carousel-nav li.active');
        var itemNum = $(target).find('.carousel-item').length;
        var targetPos = slideTo * -100 / itemNum;

        currentNav.removeClass('active').siblings('[data-slide-to=' + slideTo + ']').addClass('active');
        $(target).find('.carousel-table').css('transform', 'translateX(' + targetPos + '%)');
      }
    }]);

    return Carousel;
  }();

  return Carousel;
}(jQuery);
//# sourceMappingURL=main.js.map
