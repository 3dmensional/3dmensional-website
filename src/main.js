// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
var smoothScroll = require('smoothscroll');

library.add(faTwitter, faFacebook, faFacebookF, faInstagram);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

AOS.init();

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

// Set the logo color when scroll

function scrollFunction () {

  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  var logo = document.getElementById('logo');

  setTimeout(() => {
    let alturaNegativa = scrollTop < innerHeight || (scrollTop < innerHeight * 3 && scrollTop > innerHeight * 2);

    if (alturaNegativa && !logo.classList.contains('negative'))
      logo.classList = 'negative';
    else if (!logo.classList.contains('positive'))
      logo.classList = 'positive';
  }, 500);
}

// set logo color on page load
(function () {
  scrollFunction();

  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

  if (scrollTop < innerHeight) document.body.classList.value = 'Home';
  else if (scrollTop < innerHeight * 2) document.body.classList.value = 'About';
  else if (scrollTop < innerHeight * 3) document.body.classList.value = 'Services';
  // eslint-disable-next-line
  else document.body.classList.value = 'Contact';

})();

// Scroll with wheel
window.addEventListener('wheel', (event) => {
  if (event.deltaY > 40) {
    // Scroll bottom
    scrollDown();

  } else if (event.deltaY < -40) {
    // Scroll top
    scrollUp();

  } else
    event.preventDefault();

});

function scrollDown () {

  var logo = document.getElementById('logo');

  switch (document.body.classList.value) {
    case 'Home':
      document.body.classList.remove('Home');
      smoothScroll(document.getElementById('About'));
      setTimeout(() => {
        document.body.classList.add('About');

        if (!logo.classList.contains('positive'))
          logo.classList = 'positive';
      }, 200);
      break;

    case 'About':
      document.body.classList.remove('About');
      smoothScroll(document.getElementById('Services'));
      setTimeout(() => {
        document.body.classList.add('Services');

        if (!logo.classList.contains('negative'))
          logo.classList = 'negative';
      }, 200);
      break;

    case 'Services':
      document.body.classList.remove('Services');
      smoothScroll(document.getElementById('Contact'));
      setTimeout(() => {
        document.body.classList.add('Contact');

        if (!logo.classList.contains('positive'))
          logo.classList = 'positive';
      }, 200);
      break;

    default:
      break;
  }
}

function scrollUp () {

  var logo = document.getElementById('logo');

  switch (document.body.classList.value) {
    case 'About':
      document.body.classList.remove('About');
      smoothScroll(document.getElementById('Home'));
      setTimeout(() => {
        document.body.classList.add('Home');

        if (!logo.classList.contains('negative'))
          logo.classList = 'negative';
      }, 200);
      break;

    case 'Services':
      document.body.classList.remove('Services');
      smoothScroll(document.getElementById('About'));
      setTimeout(() => {
        document.body.classList.add('About');

        if (!logo.classList.contains('positive'))
          logo.classList = 'positive';
      }, 200);
      break;

    case 'Contact':
      document.body.classList.remove('Contact');
      smoothScroll(document.getElementById('Services'));
      setTimeout(() => {
        document.body.classList.add('Services');

        if (!logo.classList.contains('negative'))
          logo.classList = 'negative';
      }, 200);
      break;

    default:
      break;
  }
}
window.addEventListener('keydown', function (e) {
  if (e.keyCode === 38) {
    // Scroll to top
    e.preventDefault();
    scrollUp();
  } else if (e.keyCode === 40) {
    // Scroll to down
    e.preventDefault();
    scrollDown();
  }
}, false);
