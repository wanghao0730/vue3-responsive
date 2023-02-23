<script setup lang="ts" name="Footer">
import { onMounted } from 'vue'
import WOW from 'wow.js'

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
</script>

<template>
  <section class="other-link">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-3 col-md-4 col-12 animate__animated animate__lightSpeedInLeft wow"
          data-wow-duration="2s"
          :data-wow-delay="`${i * 0.5}s`"
          v-for="i in 4"
          :key="i"
        >
          <div class="widget">
            <h3>company</h3>
            <ul>
              <li>
                <a href="">About us</a>
              </li>
              <li><a href="">We are hiring</a></li>
              <li>
                <a href="">Meet the team</a>
              </li>
              <li>
                <a href="">Terms of use</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer class="bottom">
    <div class="container">
      <div class="raw">
        <div class="col-12">
          <p>© 2023 ll Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.other-link {
  margin-top: 70px;
  background: #f5f5f5;
  border-bottom: 5px solid #c52d2f;
  font-size: 14px;
  padding: 70px 0;
  .widget {
    margin-top: 0;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 22px;
    color: #000;
    ul {
      list-style: none;
      li {
        display: block;
        padding: 5px 0;
        a {
          background: transparent;
          text-decoration: none;
          border: none;
          color: #808080;
          font-size: 15px;
          transition: all ease-in-out 500ms;
          &:hover {
            color: red;
          }
        }
      }
    }
  }
}
.bottom {
  padding-top: 30px;
  padding-bottom: 30px;
  color: #fff;
  background: #2e2e2e;
  font-size: 20px;
}
</style>
