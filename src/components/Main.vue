<template>
  <main>

    <nav class="d-flex">
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
    </div>

  </main>
</template>

<script>
  import Logo from '../assets/logo-neg.svg';

  export default {
    name: 'Main',
    components: {
      Logo
    }
  };
</script>
