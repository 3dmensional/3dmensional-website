<template>
  <footer class="d-flex">

    <div class="container d-grid">

      <div class="d-flex logo">
        <figure>

        </figure>
        <span class="slogan">Slogan here!</span>
        <span class="copyright">
          Copyright &copy; 2018. All rights reserved.
        </span>
      </div>
      <div class="nav">
        <ul>
          <li><a href="#" @click.prevent="scroll">Home</a></li>
          <li><a href="#About" @click.prevent="scroll">About Us</a></li>
          <li><a href="#Services" @click.prevent="scroll">Services</a></li>
          <li><a href="#Contact" @click.prevent="scroll">Contact</a></li>
        </ul>
      </div>
      <div class="social">

        <div class="icons">
          <a href="https://www.facebook.com/3dmensionalg/">

            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" />
          </a>
          <a href="https://www.twitter.com/3dmensionalg/">

            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
          </a>
          <a href="https://www.instagram.com/3dmensionalg/">

            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
          </a>
        </div>

        <span v-if="!isMobileDevice()">
          Síguenos en nuestras redes sociales como <b>3DmensionalG</b>
        </span>
      </div>
    </div>

  </footer>
</template>

<script>
  var smoothScroll = require('smoothscroll');

  export default {
    name: 'Footer',
    methods: {
      scroll: (event) => {
        event.preventDefault();
        var target = event.target.href.replace('#', '');
        target = target.split('/');
        var last = target[target.length - 1];
        var element = (last === '') ? document.getElementById('Home') : document.getElementById(last);
        smoothScroll(element, 1000);

        var logo = document.getElementById('logo');

        setTimeout(() => {
          if (last === 'About' || last === 'Contact')
            logo.classList = 'positive';
          else
            logo.classList = 'negative';
        }, 1000);

      },
      isMobileDevice: () => {
        return window.innerWidth < 576;
      }
    }
  };
</script>
