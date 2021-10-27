# btn-login-facebook

## Config

- Code

```
<BtnLoginFacebook @profile="getProfile" @token="getToken">
  Login with facebook
</BtnLoginFacebook>

methods:
  getProfile(profile) {
    // code
  },
  getToken(token) {
    // code
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
