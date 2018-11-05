import Button from '../packages/button/index.js'

const components = [
  Button
]

const install = function (Vue, opts = {}) {
// 将所有的 组件 挂载到全局资源
  components.map(component => {
    Vue.component(component.name, component)
  })
}

// 当检测到 Vue 是全局变量的时候，自动将 执行 `install` 方法
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  version: '0.0.1',
  install,
  Button // 单独暴露 Button 组件，方便单独引入
}

module.exports.default = module.exports
