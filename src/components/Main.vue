<template>
  <main>
    <Nav />

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

    <Footer></Footer>

  </main>
</template>

<script>
  import Nav from './Nav';
  import About from './About';
  import Services from './Services';
  import Contact from './Contact';
  import Footer from './Footer';

  export default {
    name: 'Main',
    components: {

      Nav,
      About,
      Services,
      Contact,
      Footer
    }
  };
</script>
