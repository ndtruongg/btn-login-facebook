<template>
  <div>
    <button :class="btnClass" @click="logInWithFacebook">
      <slot></slot>
    </button>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'BtnLoginFacebook',
  props: {
    btnClass: {
      type: String
    }
  },
  async created() {
    await this.initFacebook()
    await this.loadFacebookSDK(document, 'script', 'facebook-jssdk')
  },
  methods: {
    async initFacebook() {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: process.env.VUE_APP_FACEBOOK_APP_ID, //You will need to change this
          cookie: true, // This is important, it's not enabled by default
          xfbml: true,
          version: 'v13.0'
        })
        window.FB.AppEvents.logPageView()
      }
    },

    async logInWithFacebook() {
      const _vue = this

      window.FB.login(async function (response) {
        let authResponse = response.authResponse
        if (authResponse) {
          _vue.$emit('token', authResponse.accessToken)
          _vue.getProfile(authResponse)
        }
        //  else {
        //   alert('User cancelled login or did not fully authorize.')
        // }
      })
      return false
    },

    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    },

    async getProfile(data) {
      await axios
        .get(
          `https://graph.facebook.com/${data.userID}?fields=id,name,email,picture&access_token=${data.accessToken}`
        )
        .then((response) => {
          let { name } = response.data
          let avatar = response.data.picture.data.url
          this.$emit('profile', { name, avatar })
        })
        .catch()
    }
  }
}
</script>
