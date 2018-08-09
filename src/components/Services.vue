<template>
  <section class="d-flex services">
    <Chevron class="chevron"></Chevron>
    <div class="d-grid">
      <h1 class="d-flex">Services</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in pharetra justo. Nulla interdum venenatis est. Nunc leo nulla, tempus in leo in, posuere elementum nisi. Vivamus augue mauris, facilisis eu placerat non, gravida quis odio. Suspendisse id tempor risus. Proin felis justo, finibus id faucibus varius, bibendum a libero. Donec arcu augue, hendrerit at vestibulum at, interdum ut nisi. Pellentesque porta scelerisque arcu, et sagittis neque malesuada suscipit. Cras at nulla eleifend, convallis nisl id, feugiat urna. Nunc ornare quam nec accumsan sodales. Curabitur malesuada diam et quam blandit euismod. Sed malesuada ante eu ligula fermentum aliquam. Integer efficitur in elit varius aliquet. Maecenas laoreet lacinia purus, at condimentum lorem auctor eu.
      </p>
      <div class="d-grid services-elements">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="services-controller">

    </div>
  </section>
</template>

<script>
  import Chevron from '../assets/chevron.svg';

  export default {
    name: 'Services',
    components: {
      Chevron
    }
  };
</script>
