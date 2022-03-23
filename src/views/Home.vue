<template>
  <div class="home">
    <SignIn></SignIn>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '../components/register.vue'
import SignIn from '../components/signIn.vue'
export default {
  components: {
    Register,
    SignIn
  }
}
</script>
