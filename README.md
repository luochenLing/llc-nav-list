## 参数
```json
 subtractHeight: {
    type: Number,
    default: 0
  },
  viewClientHeight: {
    type: Number,
    default: 0
  },
  //近似等于超出边界时最大可拖动距离(px);
  additionalY: {
    type: Number,
    default: 50
  },
  // 惯性回弹指数(值越大，幅度越大，惯性回弹距离越长);
  reBoundExponent: {
    type: Number,
    default: 10,
    validator(value: number) {
      return value > 0;
    }
  },
  //灵敏度(惯性滑动时的灵敏度,值越小，阻力越大),可近似认为速度减为零所需的时间(ms);
  sensitivity: {
    type: Number,
    default: 1000,
    validator(value: number) {
      return value > 0;
    }
  },
  //列表的UL标签的高度，这个主要是应对可伸缩的UL高度进行适应管理
  domHeight: {
    type: Number,
    default: 0,
    validator(value: number) {
      return value >= 0;
    }
  }
```

## 注意事项
  - 本插件只适用于H5移动端，技术栈为vue3+ts+vite，vue2的使用者请留意兼容性,插槽名称为item。
  - 使用cdn调用vue的项目更适用，不然可能会导致slot插槽报错问题（isCE）

## 用例：
```javascript
<template>
 <nav-list
    :subtractHeight="data.navHeight"
    :viewClientHeight="data.viewClientHeight"
  >
    <template #item>
      <li
        :class="data.activeIndex == index ? 'avtice' : ''"
        v-for="(item, index) in data.navList"
        :key="index"
      >
        {{ item.text }}
      </li>
    </template>
  </nav-list>
</template>
<script setup lang="ts">
import {NavList} from 'llc-nav-list'
import 'llc-nav-list/dist/style.css'
import { ref } from 'vue'
console.log(NavList)
const data =ref({
    activeIndex: 0,
    navHeight: 50, //横向标题高度，
    viewClientHeight:0,
    navList: [
      { text: "国内", id: "0100" },
      { text: "国外", id: "0200" },
      { text: "热门", id: "0300" },
      { text: "马尔代夫", id: "0400" },
      { text: "泰国", id: "0500" },
      { text: "国内1", id: "0100" },
      { text: "国外1", id: "0200" },
      { text: "热门1", id: "0300" },
      { text: "马尔代夫1", id: "0400" },
      { text: "泰国1", id: "0500" },
      { text: "国内2", id: "0100" },
      { text: "国外2", id: "0200" },
      { text: "热门2", id: "0300" },
      { text: "马尔代夫2", id: "0400" },
      { text: "泰国3", id: "0500" },
      { text: "国内3", id: "0100" },
      { text: "国外3", id: "0200" },
      { text: "热门3", id: "0300" },
      { text: "沙拉把你", id: "0400" },
      { text: "国内", id: "0100" },
      { text: "国外", id: "0200" },
      { text: "热门", id: "0300" },
      { text: "马尔代夫", id: "0400" },
      { text: "泰国", id: "0500" },
      { text: "国内1", id: "0100" },
      { text: "国外1", id: "0200" },
      { text: "热门1", id: "0300" },
      { text: "马尔代夫1", id: "0400" },
      { text: "泰国1", id: "0500" },
      { text: "国内2", id: "0100" },
      { text: "国外2", id: "0200" },
      { text: "热门2", id: "0300" },
      { text: "马尔代夫2", id: "0400" },
      { text: "泰国3", id: "0500" },
      { text: "国内3", id: "0100" },
      { text: "国外3", id: "0200" },
      { text: "热门3", id: "0300" },
      { text: "马尔代夫3", id: "0400" }
    ],
  }
)
 
</script>
```

## git地址：
 https://github.com/luochenLing/llc-nav-list