<template>
  <main>

    <nav class="d-flex fixed">
      <figure>
        <a href="#">
          <Logo id="logo" class="negative"></Logo>
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

    <div class="content">
      <!-- Content page -->
      <section id="Home" class="d-flex banner">
        <h1>Here the amazing title</h1>
        <span class="icon icon-next">down</span>
      </section>
      <About />
      <Services></Services>
      <Contact />
    </div>

    <footer>

    </footer>

  </main>
</template>

<script>
  import Logo from '../assets/logo-neg.svg';
  import About from './About';
  import Services from './Services';
  import Contact from './Contact';

  var smoothScroll = require('smoothscroll');

  export default {
    name: 'Main',
    components: {
      Logo,
      About,
      Services,
      Contact
    },
    methods: {
      scroll: (event) => {
        event.preventDefault();
        var target = event.target.href.replace('#', '');
        target = target.split('/');
        console.log(target);
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

      }
    }
  };
</script>
