<script setup lang="ts" Name="home">
import { reactive, onMounted } from 'vue'
import WOW from 'wow.js'
import { getAsserts } from '/@/utils/pub-use'
interface ISliderContent {
  id: number
  img: string
  content: Record<string, any>[]
}
const slideArys = reactive<ISliderContent[]>([
  {
    id: 1,
    img: 'slider/bg1.jpg',
    content: [
      { id: 1, content: 'Lorem ipsum dolor sit amet consectetur adipisicing' },
      { id: 2, content: 'Lorem ipsum dolor siht amet consectetur adipisicing' },
    ],
  },
  {
    id: 2,
    img: 'slider/bg2.jpg',
    content: [
      { id: 1, content: 'Lorem ipsum dolor sit amet consectetur adipisicing' },
      { id: 2, content: 'Lorem ipsum dolor sit amet consectetur adipisicing' },
    ],
  },
  {
    id: 3,
    img: 'slider/bg3.jpg',
    content: [
      { id: 1, content: 'Lorem ipsum dolor sit amet consectetur adipisicing' },
      { id: 2, content: 'Lorem ipsum dolor sit amet consectetur adipisicing' },
    ],
  },
])
// 挂载时使用wow
onMounted(() => {
  const wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window
  })
  wow.init()
})

// const sliderList: reactive<ISliderContent[]> = [
//   {
//     id: 1,
//     img:'../assets/slider/bg1.jpg'
//     content: [{ id: 1, content: '为什么为什么我们' }],
//   },
// ]
</script>

<template>
  <div class="main">
    <section class="main-slider">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <template v-for="item in slideArys" :key="item.id">
            <div
              :class="['carousel-item', { active: item.id === 1 }]"
              :data-bs-interval="10000 * item.id"
            >
              <img
                :src="getAsserts(item.img)"
                class="d-block w-100"
                alt="..."
              />
              <div class="inner">
                <div class="container">
                  <div class="raw slider-top">
                    <div class="col-sm-12 col-12">
                      <div class="content">
                        <h1
                          class="animate__animated animate__fadeInUpBig animate__delay-1s"
                        >
                          {{ item.content[0].content }}
                        </h1>
                        <h2
                          class="animate__animated animate__fadeInUpBig animate__delay-2s"
                        >
                          {{ item.content[1].content }}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <!-- 又是一个section -->
    <section class="feature">
      <div class="container">
        <div
          class="header animate__animated animate__fadeInDown animate__delay-1s d-flex flex-column align-items-center justify-content-center wow"
          data-wow-duration="2s"
        >
          <h2>Features</h2>
          <p
            class="lead animate__animated animate__fadeInDown animate__delay-1s wow"
            data-wow-delay="1s"
            data-wow-duration="2s"
            style="text-align: center; margin-bottom: 60px"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut <br />
            et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-12 animate__animated animate__fadeInDown wow"
            data-wow-duration="2s"
            data-wow-delay="1.5s"
            v-for="i in 6"
            :key="i"
          >
            <div class="feature-wrap">
              <i class="fa fa-bullhorn"></i>
              <h2>Fresh and Clean</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.main-slider {
  position: relative;
  .carousel-item {
    position: relative;
    .inner {
      position: absolute;
      z-index: 1000;
      top: 0;
      left: 0;
      right: 0;
      .slider-top {
        margin-top: 140px;
        @media only screen and (max-width: 768px) {
          margin-top: 50px;
        }
        .content {
          padding-left: 50px;
          margin-top: 150px;
          color: white;
          font-size: 35px;
          @media only screen and (max-width: 768px) {
            margin-top: 60px;
            font-size: 18px;
          }
        }
      }
    }
  }
}
.feature {
  padding-top: 50px;
  background: #f2f2f2;
  padding-bottom: 40px;
  .feature-wrap {
    margin-bottom: 30px;
    overflow: hidden;
    h2 {
      margin-top: 10px;
      font-size: 20px;
      @media screen and (min-width: 768px) and (max-width: 991px) {
        font-size: 16px;
      }
      @media screen and (max-width: 600px) {
        font-size: 15px;
      }
    }
    h3 {
      font-size: 16px;
      color: #787878;
      font-weight: 400;
      line-height: 24px;
    }
    i {
      font-size: 48px;
      height: 110px;
      width: 110px;
      margin: 3px;
      border-radius: 100%;
      line-height: 110px;
      text-align: center;
      background-color: #ffffff;
      border: 3px solid #ffffff;
      float: left;
      margin-right: 25px;
      cursor: pointer;
      transition: all ease-in-out 600ms;

      &:hover {
        border-color: darkmagenta;
        color: pink;
        font-size: 55px;
      }
    }
  }
}
</style>
