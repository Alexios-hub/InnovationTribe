<template>
  <div class="hello">
    <div class="input-div">
      <label for="name">姓名</label>
      <input type="text" name="name" v-model.trim="name">
    </div>
    <div class="input-div">
      <label for="email">邮箱</label>
      <input type="text" name="email" v-model.trim="email">
    </div>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data() {
    return {
      name: '',
      email: ',
    };
  },
  methods: {
    submit() {
      if (!this.name) {
        alert('请填写姓名');
        return;
      } else if (!this.email) {
        alert('请填写手机号');
        return;
      } else {
        let formData = {
          name: this.name,
          email: this.email,
        };
        axios({
          method: 'post',
          url: '/api/email',
          data: formData,
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
