<template>
  <section v-if="isMobileDevice()"  id="Services" class="d-flex services">
    <div class="chevron-container">
      <div style="height: 100%" class="chevron-svg" data-aos="fade-down" data-aos-duration="500" data-aos-delay="200">
        <Chevron class="chevron"></Chevron>
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

      <div class="active action-container">
        <a href="javascript:;" @click.prevent="title = 'Development'; text = texts[0]; setAppear(title)"></a>
        <Cube />
      </div>

      <div class="action-container">
        <a href="javascript:;" @click.prevent="title = 'Design'; text = texts[1]; setAppear(title)"></a>
        <Cube />
      </div>

      <div class="action-container">
        <a href="javascript:;" @click.prevent="title = 'Marketing'; text = texts[2]; setAppear(title)"></a>
        <Cube />
      </div>
    </div>
  </section>

  <section v-else  class="d-flex services">
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

      <div class="active action-container">
        <a href="javascript:;" @click.prevent="title = 'Development'; text = texts[0]; setAppear(title)"></a>
        <Cube />
      </div>

      <div class="action-container">
        <a href="javascript:;" @click.prevent="title = 'Design'; text = texts[1]; setAppear(title)"></a>
        <Cube />
      </div>

      <div class="action-container">
        <a href="javascript:;" @click.prevent="title = 'Marketing'; text = texts[2]; setAppear(title)"></a>
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
        text: 'Nowadays the world is advancing more and more in the technological development, and it is important that your business is not left behind during its growth. That\'s why we offer a wide variety of development options in which we can provide the best advice depending on the need of your project.',

        texts: [
          'Nowadays the world is advancing more and more in the technological development, and it is important that your business is not left behind during its growth. That\'s why we offer a wide variety of development options in which we can provide the best advice depending on the need of your project.',
          'The way we present ourselves to the world is one of the most important things. That is why we are fully convinced that having a good brand image is a point in favor of your company. We focus on capturing the attention of your target audience and transmitting values through different design areas.',
          'Considering the impact and scope offered by a good positioning on the web, we study and analyze the target audience in order to connect your company with your customers. Through careful digital marketing strategies, SEO and RRSS we will provide the best advice to position your company on the web.'
        ]

      };
    },
    methods: {
      setAppear: (title) => {
        var elements = document.getElementsByClassName('fade-element');
        var controllerActive = document.querySelector('.active.action-container');
        var controllers = document.getElementsByClassName('action-container');

        for (let i = elements.length - 1; i >= 0; i--)
          elements[i].classList.toggle('show');

        setTimeout(function () {
          for (let i = elements.length - 1; i >= 0; i--)
            elements[i].classList.toggle('show');
        }, 100);

        controllerActive.classList.remove('active');

        switch (title) {
          case 'Development':
            controllers[0].classList.add('active');
            break;

          case 'Design':
            controllers[1].classList.add('active');
            break;

          default:
            controllers[2].classList.add('active');
            break;
        }
      },

      isMobileDevice: () => {
        return window.innerWidth < 992;
      }
    }
  };
</script>
