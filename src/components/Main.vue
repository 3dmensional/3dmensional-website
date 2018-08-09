<template>
  <main>

    <nav class="d-flex fixed">
      <figure>
        <a href="#">
          <Logo class="negative"></Logo>
        </a>

      </figure>
      <div class="menu">

        <i class="icon icon-menu"></i>
        <ul class="d-flex">
          <li class="d-flex"><a class="nav-link" href="#">Home</a></li>
          <li class="d-flex"><a class="nav-link" href="#About">About Us</a></li>
          <li class="d-flex"><a class="nav-link" href="#Services">Services</a></li>
          <li class="d-flex"><a class="nav-link" href="#Contact">Contact</a></li>
        </ul>
      </div>

    </nav>

    <div class="content">
      <!-- Content page -->
      <section class="d-flex banner">
        <h1>Here the amazing title</h1>
        <span class="icon icon-next">down</span>
      </section>
      <About />
      <Services></Services>
      <section class="d-flex contact">
        <h1>Here we go the Contact. Yeah</h1>
      </section>
    </div>

    <footer>

    </footer>

  </main>
</template>

<script>
  import Logo from '../assets/logo-neg.svg';
  import About from './About';
  import Services from './Services';

  export default {
    name: 'Main',
    components: {
      Logo,
      About,
      Services
    }
  };
</script>
