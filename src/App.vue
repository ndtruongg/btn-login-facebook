<template>
  <div id="app">
    <BtnLoginFacebook @profile="getInfo">Login with facebook</BtnLoginFacebook>
  </div>
</template>

<script>
import BtnLoginFacebook from './BtnLoginFacebook.vue'

export default {
  name: 'App',
  components: { BtnLoginFacebook },
  methods: {
    getInfo(data) {
      console.log(data)
    }
  }
}
</script>
