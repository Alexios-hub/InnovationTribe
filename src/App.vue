<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <router-view/>
    <!-- <Model></Model> -->
    <!-- <LoginIn></LoginIn> -->
    <!-- <QuesFinish></QuesFinish> -->
  </div>
</template>

<script>
import QuesFinish from './components/QuesFinish.vue'
import Register from './components/register.vue'
import SignIn from './components/signIn.vue'
import Course from './components/course.vue'
import Model from './components/model.vue'
import LoginIn from './components/loginIn.vue'
export default {
  name: 'app',
  components: {
    Register,
    SignIn,
    Course,
    Model,
    LoginIn,
    QuesFinish
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
