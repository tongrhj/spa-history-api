(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = (function () {
  function Router(routes) {
    var _this = this;

    _classCallCheck(this, Router);

    this.routes = routes;

    window.addEventListener('popstate', function (event) {
      _this.route();
    });

    Array.from(document.querySelectorAll('nav a')).forEach(function (anchor) {
      anchor.addEventListener('click', function (event) {
        // Ensures that only internal links are affected
        if (event.target.href.startsWith(window.location.origin)) {
          event.preventDefault();
          history.pushState(null, '', anchor.attributes.href.value);
          _this.route();
        }
      });
    });

    this.route();
  }

  _createClass(Router, [{
    key: 'route',
    value: function route(key) {
      var _this2 = this;

      Array.from(document.querySelectorAll('section')).forEach(function (section) {
        section.classList.remove('visible');
      });

      Object.keys(this.routes).forEach(function (key) {
        if (key === window.location.pathname) {
          var handler = _this2.routes[key];
          document.title = handler.title;
          document.querySelector(handler.element).classList.toggle('visible');
        }
      });
    }
  }]);

  return Router;
})();

exports.default = Router;

},{}]},{},[1]);

},{}],2:[function(require,module,exports){
'use strict';

var Router = require('soup-router');
var router = new Router([{
  route: 'about',
  title: 'About Us',
  element: '#about'
}, {
  route: '/products',
  title: 'Products',
  element: '#products'
}, {
  route: '/',
  title: 'The Museum of SG50 Products',
  element: '#home'
}, {
  route: '',
  title: '404',
  element: '#error'
}]);

// Pre-Modularization
// This code works but we want to seperate the Router from the Routes and Views to maximise code-reuse and to enable work to be divided among team members
// Becomes the code above + index.js within my self-created soup-router module

// window.addEventListener('popstate', (event) => {
//   route()
// })
//
// Array.from(document.querySelectorAll('nav a'))
//   .forEach(anchor => {
//     anchor.addEventListener('click', event => {
//       // Ensures that only non-external links continue to open like default
//       if (event.target.href.startsWith(window.location.origin)) {
//         event.preventDefault()
//         history.pushState(null, '', anchor.attributes.href.value)
//         route()
//       }
//   })
// })
//
// const productSelect = document.querySelector('#products .products')
//
// productSelect.addEventListener('change', () => {
//   const selectedOption = productSelect.options[productSelect.selectedIndex].textContent
//   document.title = 'Products: ' + selectedOption
//   history.replaceState(null, '', '/products/' + selectedOption)
// })
//
// function route () {
//   Array.from(document.querySelectorAll('section'))
//     .forEach((section) => {
//       section.classList.remove('visible')
//     })
//   switch (window.location.pathname) {
//     case '/about':
//       document.title = 'About Us'
//       document.querySelector('#about')
//         .classList.toggle('visible')
//       break
//     case '/products':
//       document.title = 'Products'
//       document.querySelector('#products')
//         .classList.toggle('visible')
//       break
//     case '/':
//       document.title = 'The Museum of SG50 Products'
//       document.querySelector('#home')
//         .classList.toggle('visible')
//       break
//     default:
//       document.title = '404'
//       document.querySelector('#error')
//         .classList.toggle('visible')
//   }
// }
//
// // Ensures that visiting the page initiates /
// route()

},{"soup-router":1}]},{},[2]);
