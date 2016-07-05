'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Carousel = function ($) {
  var Carousel = function () {
    function Carousel() {
      var selector = arguments.length <= 0 || arguments[0] === undefined ? '.carousel' : arguments[0];

      _classCallCheck(this, Carousel);

      this.selector = selector;
    }

    _createClass(Carousel, [{
      key: 'init',
      value: function init() {
        console.log($(this.selector).length);
      }
    }]);

    return Carousel;
  }();

  return Carousel;
}(jQuery);
//# sourceMappingURL=main.js.map
