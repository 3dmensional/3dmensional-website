<template>
  <main>
    <Nav />

    <div class="content">
      <!-- Content page -->
      <section id="Home" class="d-flex banner">
        <h1>Connecting dreams</h1>

        <div class="arrow-container">
          <a href="javascript:;" @click='scroll' ></a>
          <DownArrow class="down-arrow white" @click="scroll"/>
        </div>
      </section>
      <About />
      <Services></Services>
      <Contact />
    </div>

    <Footer></Footer>

  </main>
</template>

<script>
  import Nav from './Nav';
  import About from './About';
  import Services from './Services';
  import Contact from './Contact';
  import Footer from './Footer';
  import DownArrow from '../assets/down-arrow.svg';

  const smoothScroll = require('smoothscroll');

  export default {
    name: 'Main',
    components: {

      Nav,
      About,
      Services,
      Contact,
      Footer,
      DownArrow
    },
    methods: {
      scroll: (event) => {
        event.preventDefault();
        var body = document.getElementsByTagName('body')[0];
        var element = document.getElementById('About');
        smoothScroll(element, 1000);

        body.classList.value = '';
        body.classList.add('About');

        var logo = document.getElementById('logo');

        setTimeout(() => {
          logo.classList = 'positive';
        }, 1000);
      }
    }
  };
</script>
