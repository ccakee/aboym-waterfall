# aboym-waterfall 组件使用

---

简介：一个瀑布流组件 
注意：除了卡没什么缺点 (hh

```js
// ------全局引入------
import Vue from 'vue';
import aWaterfall from 'aboym-waterfall';
Vue.use(aWaterfall);


// ------局部引入------
import aWaterfall from 'aboym-waterfall';
export default {
  components: {
    aWaterfall
  }
}

// 简单案例
<template>
  <div id="app">
    <aWaterfall :itemWidth="260" :listData="listData" :gap="10" :gapTop="10">
      <template slot-scope="{itemData}">
        <div class="box">
          {{itemData}}
        </div>
      </template>
    </aWaterfall>
  </div>
</template>

<script>
import aWaterfall from 'aboym-waterfall';
export default {
  components: {
    aWaterfall
  },
  data() {
    return {
      listData: [
        { height: 300, id: 1, name: '张三', ip: '123.23.12.313' },
        { height: 200, id: 1, name: '张三1', ip: '123.23.12.3' },
        { height: 100, id: 1, name: '张三2', ip: '123.23.12.3' },
        { height: 300, id: 1, name: '张三3', ip: '123.23.12.3' },
        { height: 200, id: 1, name: '张三4', ip: '123.23.12.3' },
        { height: 100, id: 1, name: '张三5', ip: '123.23.12.3' },
        { height: 500, id: 1, name: '张三6', ip: '123.23.12.3' },
        { height: 400, id: 1, name: '张三7', ip: '123.23.12.3' },
        { height: 500, id: 1, name: '张三8', ip: '123.23.12.3' },
        { height: 200, id: 1, name: '张三9', ip: '123.23.12.3' },
        { height: 200, id: 1, name: '张三10', ip: '123.23.12.3' },
        { height: 100, id: 1, name: '张三11', ip: '123.23.12.3' },
        { height: 100, id: 1, name: '张三12', ip: '123.23.12.3' },
        { height: 900, id: 1, name: '张三13', ip: '123.23.12.3' },
      ]
    }
  },
}
</script>


<style>
.box{
  border:1px solid #ccc;
}
</style>

// -----------------------------------
```
属性：
```js
 /* 每一项的宽度 */
itemWidth: {
    type: Number | String,
    required: true,
    default: 100
},
/* 列表数据 */
listData: {
    type: Array,
    required: true,
},
/* 间隙 gapTop|gapBottom|gapLeft|gapRight和gap同时传入 以gapTop|gapBottom|gapLeft|gapRight为准 */
gap: {
    type: Number | String,
},
gapTop: {
    type: Number | String,
},
gapBottom: {
    type: Number | String,
},
gapLeft: {
    type: Number | String,
},
gapRight: {
    type: Number | String,
}

```

