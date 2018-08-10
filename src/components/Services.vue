<template>
  <section class="d-flex services">
    <div class="chevron-container">
      <div style="height: 100%" class="chevron-svg" data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
        <Chevron id="Services" class="chevron"></Chevron>
      </div>
    </div>
    <div class="d-grid">
      <transition name="fade" appear>
        <h1 class="show fade-element d-flex">{{ title }}</h1>
      </transition>

      <transition name="fade" appear>
        <p class="show fade-element">
          {{ text }}
        </p>
      </transition>
      <div class="d-grid services-elements">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="d-flex services-controller">

      <div class="action-container">
        <a href="javascript:;" @click.prevent="title = 'Development'; setAppear(title)"></a>
        <Cube />
      </div>

      <div class="action-container">
        <a href="javascript:;" @click.prevent="title = 'Design'; setAppear(title)"></a>
        <Cube />
      </div>

      <div class="action-container">
        <a href="javascript:;" @click.prevent="title = 'Marketing'; setAppear(title)"></a>
        <Cube />
      </div>
    </div>
  </section>
</template>

<script>
  import Chevron from '../assets/chevron.svg';
  import Cube from '../assets/cube.svg';

  export default {
    name: 'Services',
    components: {
      Chevron,
      Cube
    },
    data: () => {
      return {
        title: 'Development',
        text: 'Hello World',
        active: 0

      };
    },
    methods: {
      setAppear: (title) => {
        var elements = document.getElementsByClassName('fade-element');

        for (let i = elements.length - 1; i >= 0; i--)
          elements[i].classList.toggle('show');

        setTimeout(function () {
          for (let i = elements.length - 1; i >= 0; i--)
            elements[i].classList.toggle('show');
        }, 100);

      }
    }
  };
</script>
