<template>
  <main>
    <Nav />

    <div class="content">
      <!-- Content page -->
      <section id="Home" class="d-flex banner">
        <h1>Here the amazing title</h1>

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
        console.log(event);
        smoothScroll(document.getElementById('About'));
      }
    }
  };
</script>
