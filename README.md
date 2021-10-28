# btn-login-facebook

Login with Facebook in Vuejs

## Setting in `main.js`

```
import BtnLoginFacebook from 'btn-login-facebook'
Vue.use(BtnLoginFacebook)
```

- Create env variable `VUE_APP_FACEBOOK_APP_ID`

- Get profile by emit `@profile`, get token by emit `@token`, set class name by prop `btnClass`

- Run your app with `https` by add `"serve:ssl": "vue-cli-service serve --https --open --public localhost:8080"` to `scripts` in `package.json`

- Use in your component

```
<BtnLoginFacebook btnClass="btn-login-facebook" @profile="getProfile" @token="getToken">
  Login with facebook
</BtnLoginFacebook>

<script>
export default {
  methods:
    getProfile(profile) {
      // code
    },
    getToken(token) {
      // code
    }
  ...........
}
```

- Profile data response:

```
{
    "name": "user_name",
    "avatar": "avatar_url"
}
```
