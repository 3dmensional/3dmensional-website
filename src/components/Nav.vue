<template>

    <nav class="d-flex fixed">
      <figure>
        <a href="#">
          <Logo v-if="!isMobileDevice()" id="logo"></Logo>
          <LogoIcon v-else id="logo" />
        </a>

      </figure>
      <div class="menu">

        <i class="icon icon-menu"></i>
        <ul class="d-flex">
          <li class="d-flex"><a class="nav-link" href="#" @click="scroll">Home</a></li>
          <li class="d-flex"><a class="nav-link" href="#About" @click="scroll">About Us</a></li>
          <li class="d-flex"><a class="nav-link" href="#Services" @click="scroll">Services</a></li>
          <li class="d-flex"><a class="nav-link" href="#Contact" @click="scroll">Contact</a></li>
        </ul>
      </div>

    </nav>

</template>

<script>
  import Logo from '../assets/logo-neg.svg';
  import LogoIcon from '../assets/logo-responsive.svg';

  var smoothScroll = require('smoothscroll');

  export default {
    name: 'Nav',
    components: {
      Logo,
      LogoIcon
    },
    methods: {
      scroll: (event) => {
        event.preventDefault();
        var body = document.getElementsByTagName('body')[0];
        var target = event.target.href.replace('#', '');
        target = target.split('/');
        var last = target[target.length - 1];
        var element = (last === '') ? document.getElementById('Home') : document.getElementById(last);
        smoothScroll(element, 1000);

        body.classList.value = '';
        body.classList.add((last) === '' ? 'Home' : last);

        var logo = document.getElementById('logo');

        setTimeout(() => {
          if (last === 'About' || last === 'Contact')
            logo.classList = 'positive';
          else
            logo.classList = 'negative';
        }, 1000);

      },

      isMobileDevice: () => {
        return window.innerWidth < 768;
      }
    }
  };
</script>
