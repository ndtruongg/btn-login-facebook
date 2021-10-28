# btn-login-facebook

Login with Facebook in Vuejs

## Import to your app `main.js`

```
import BtnLoginFacebook from 'btn-login-facebook'
Vue.use(BtnLoginFacebook)
```

- Use in your component

```
<BtnLoginFacebook @profile="getProfile" @token="getToken">
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

- Create env variable `VUE_APP_FACEBOOK_APP_ID`

- Get profile by emit `@profile`, get token by emit `@token`

- Run your app with `https` by add `"serve:ssl": "vue-cli-service serve --https --open --public localhost:8080"` to `scripts` in `package.json`

- Profile data response:

```
{
    "id": "user_id",
    "name": "user_name",
    "picture": {
        "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "user_avatar_url",
            "width": 50
        }
    }
}
```
