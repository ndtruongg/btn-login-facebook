# btn-login-facebook

## Config

- Code

```
<BtnLoginFacebook @profile="getProfile">
  Login with facebook
</BtnLoginFacebook>

// export default {
methods:
  getProfile(data) {
    console.log(data)
  }
```

- Create env variable `VUE_APP_FACEBOOK_APP_ID`

- Get profile by emit `@profile`

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

- Token:
