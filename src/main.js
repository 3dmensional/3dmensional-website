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

(function () {
  scrollFunction();

  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

  if (scrollTop < innerHeight) document.body.classList.value = 'Home';
  else if (scrollTop < innerHeight * 2) document.body.classList.value = 'About';
  else if (scrollTop < innerHeight * 3) document.body.classList.value = 'Services';
  else document.body.classList.value = 'Contact';
})();

window.addEventListener('wheel', (event) => {
  var logo = document.getElementById('logo');

  if (event.deltaY > 40) {
    // Scroll bottom

    switch (document.body.classList.value) {
      case 'Home':
        document.body.classList.remove('Home');
        smoothScroll(document.getElementById('About'));
        setTimeout(() => {
          document.body.classList.add('About');
        }, 200);
        if (!logo.classList.contains('positive'))
          logo.classList = 'positive';
        break;

      case 'About':
        document.body.classList.remove('About');
        smoothScroll(document.getElementById('Services'));
        setTimeout(() => {
          document.body.classList.add('Services');
        }, 200);
        if (!logo.classList.contains('negative'))
          logo.classList = 'negative';
        break;

      case 'Services':
        document.body.classList.remove('Services');
        smoothScroll(document.getElementById('Contact'));
        setTimeout(() => {
          document.body.classList.add('Contact');
        }, 200);
        if (!logo.classList.contains('positive'))
          logo.classList = 'positve';
        break;

      default:
        break;
    }
  } else if (event.deltaY < -40) {
    // Scroll top

    switch (document.body.classList.value) {
      case 'About':
        document.body.classList.remove('About');
        smoothScroll(document.getElementById('Home'));
        setTimeout(() => {
          document.body.classList.add('Home');
        }, 200);
        if (!logo.classList.contains('negative'))
          logo.classList = 'negative';
        break;

      case 'Services':
        document.body.classList.remove('Services');
        smoothScroll(document.getElementById('About'));
        setTimeout(() => {
          document.body.classList.add('About');
        }, 200);
        if (!logo.classList.contains('positive'))
          logo.classList = 'positive';
        break;

      case 'Contact':
        document.body.classList.remove('Contact');
        smoothScroll(document.getElementById('Services'));
        setTimeout(() => {
          document.body.classList.add('Services');
        }, 200);
        if (!logo.classList.contains('negative'))
          logo.classList = 'negative';
        break;

      default:
        break;
    }
  } else
    event.preventDefault();

});
