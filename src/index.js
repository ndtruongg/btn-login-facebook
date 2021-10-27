import BtnLoginFacebook from './BtnLoginFacebook.vue'

function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('btn-login-facebook', BtnLoginFacebook)
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

BtnLoginFacebook.install = install

export default BtnLoginFacebook
