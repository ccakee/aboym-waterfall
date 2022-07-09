
import aWaterfall from './aboym-waterfall'

aWaterfall.install = Vue => Vue.component(aWaterfall.name, aWaterfall);
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(aWaterfall);
}

export default aWaterfall