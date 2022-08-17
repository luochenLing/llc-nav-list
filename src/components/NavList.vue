<template>
<div class="nav-list-root" ref="root">
    <ul class="nav-list" ref="navList" :style="style">
      <slot name="item"></slot>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "@vue/reactivity";
import{defineProps, onBeforeUnmount, onMounted, watch,PropType} from '@vue/runtime-core'
import { StyleValue } from "vue";


defineOptions({
  name:'llc-nav-list'
})
//#region ref
const root = ref()
const navList = ref()
//#endregion

//#region props

const props = defineProps({
  subtractHeight: {
    type: Number as PropType<number>,
    default: 0,
    required:true
  },
  viewClientHeight: {
    type: Number as PropType<number>,
    default: 0
  },
  //近似等于超出边界时最大可拖动距离(px);
  additionalY: {
    type: Number as PropType<number>,
    default: 50
  },
  // 惯性回弹指数(值越大，幅度越大，惯性回弹距离越长);
  reBoundExponent: {
    type: Number as PropType<number>,
    default: 10,
    validator:(value: number)=> {
      return value > 0;
    }
  },
  //灵敏度(惯性滑动时的灵敏度,值越小，阻力越大),可近似认为速度减为零所需的时间(ms);
  sensitivity: {
    type: Number as PropType<number>,
    default: 1000,
    validator(this:boolean, value: number) {
      return value > 0;
    }
  },
  //列表的UL标签的高度，这个主要是应对可伸缩的UL高度进行适应管理
  domHeight: {
    type: Number as PropType<number>,
    default: 0,
    validator:(value: number)=> {
      return value >= 0;
    }
  }
})

//#endregion

//#region data
const data = ref({
  frameStartTime: 0, //动画开始时间
  frameEndTime: 0, //动画结束时间
  frameTime: 16.7, //最平滑动画的最佳循环间隔是1000ms/60，约等于16.7ms,大多数显示器的刷新频率是60Hz，相当于每秒钟重绘60次
  acceleration: 0, //加速度
  speed: 0, //速度
  lastY: 0, //移动动画后的位置
  startY: 0, //移动开始的起始位置
  currentY: 0, //移动时当前的距离
  translateY: 0, ///运动的距离
  inertiaFrame: 0, //控制动画的开关，类似控制定时器的开关
  touching: false, // 是否处于touch状态;
  startMoveTime: 0, //开始移动时间
  endMoveTime: 0, //结束移动时间
  zeroSpeed: 0.001, // 当speed绝对值小于该值时认为速度为0 (可用于控制惯性滚动结束期的顺滑度)
  reBounding: false, // 是否处于回弹过程;
  fixBottom: false,
  reBoundingDuration: 360 //回弹过程duration;
}).value
//#endregion

//#region watch

watch(()=>props.viewClientHeight,()=>{
  let height = props.viewClientHeight - props.subtractHeight;
  root.value.style.height = `${height}px`;
})

//#endregion

//#region computed
/**
 * computed
 */
const viewAreaHight = computed(()=>{
  return props.viewClientHeight - props.subtractHeight;
})

const navListHeight = computed(()=>{
  if (props.domHeight > 0) {
    return props.domHeight;
  } else {
    return navList.value.offsetHeight;
  }
})
//可视区与可滑动元素高度差值,就是展示你所看到的选项部分高度
const listHeight = computed(()=>{
  return navListHeight.value - viewAreaHight.value;
})

const transitionTimingFunction =computed(()=>{
  return data.reBounding
    ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    : "cubic-bezier(0.1, 0.57, 0.1, 1)";
})

const transitionDuration = computed(()=>{
  if (data.touching || (!data.reBounding && !data.touching)) {
    return 0;
  }
  if (data.reBounding && !data.touching) {
    return data.reBoundingDuration;
  }
})

const style = computed<StyleValue | undefined|any>(()=>{
  if (data.fixBottom) return {};
  return {
    transitionTimingFunction: transitionTimingFunction,
    transitionDuration: `${transitionDuration}ms`,
    transform: `translate3d(0px, ${data.translateY}px, 0px)`
  };
})
 
const isMoveTop = computed(()=>{
  return data.currentY <= data.startY;
})

const isMoveDown = computed(()=>{
  return data.currentY >= data.startY;
})

//#endregion

//#region 方法
onMounted(()=>{
  //绑定事件
  navList.value.addEventListener("touchstart", navTouchStart);
  navList.value.addEventListener("touchmove", navTouchMove);
  navList.value.addEventListener("touchend", navTouchEnd);
})

onBeforeUnmount(()=>{
  //在https://github.com/ScoutYin/ly-tab这个项目做参考的时候发现把事件移除写到了destoryed阶段，在这里发现在这个阶段的元素已经移除了，不能做绑定或移除的操作，所以写到了beforeDestroy，如果不移除，可能会导致其他页面监听这些事件的结果
  navList.value.removeEventListener("touchstart", navTouchStart);
  navList.value.removeEventListener("touchmove", navTouchMove);
  navList.value.removeEventListener("touchend", navTouchEnd);
})

//拖动
const moveFollowTouch = () => {
  if (isMoveTop.value) {
    if (
      (data.translateY <= 0 && data.translateY + listHeight.value > 0) ||
      data.translateY > 0
    ) {
      //this.translateY + this.listHeight 正常的可视区域拖动范围
      //可以理解为向上移动的单位都是负数接近于负无穷，向下移动的单位接近于正无穷
      data.translateY += data.currentY - data.lastY; //正常滑行距离
    } else if (data.translateY + listHeight.value <= 0) {
      //溢出可视区的范围
      //additionalY,近似等于超出边界时最大可拖动距离(px);
      data.translateY +=
        (props.additionalY * (data.currentY - data.lastY)) /
        (viewAreaHight.value +
          Math.abs(data.translateY + listHeight.value));
    }
  } else {
    if (data.translateY >= 0) {
      //溢出移动
      data.translateY +=
        (props.additionalY * (data.currentY - data.lastY)) /
        (viewAreaHight.value + data.translateY);
    } else if (
      (data.translateY <= 0 && data.translateY + listHeight.value >= 0) ||
      data.translateY + listHeight.value <= 0
    ) {
      //正常部分计算
      data.translateY += data.currentY - data.lastY;
    }
  }
  data.lastY = data.currentY;
}

//惯性滚动
const moveByInertia = () => {
  data.frameEndTime = new Date().getTime();
  data.frameTime = data.frameEndTime - data.frameStartTime;
  //10,惯性回弹指数
  if (isMoveTop.value) {
    if (data.translateY <= -listHeight.value) {
      //加速度公式
      data.acceleration *=
        (props.reBoundExponent +
          Math.abs(data.translateY + listHeight.value)) /
        props.reBoundExponent;
      //速度衰减
      data.speed = Math.min(data.speed - data.acceleration, 0);
      //溢出时候的操作
    } else {
      //.加速度乘以时间得到的是速度
      data.speed = Math.min(
        data.speed - data.acceleration * data.frameTime,
        0
      ); //速度衰减
    }
  } else if (isMoveDown.value) {
    if (data.translateY >= 0) {
      data.acceleration *=
        (props.reBoundExponent + data.translateY) / props.reBoundExponent;
      data.speed = Math.max(data.speed - data.acceleration, 0);
      //溢出操作
    } else {
      //正常操作
      data.speed = Math.max(
        data.speed - data.acceleration * data.frameTime,
        0
      );
    }
  }
  //匀变速直线运动的公式：速度*时间/2
  data.translateY += (data.speed * data.frameTime) / 2;
  //当speed绝对值小于该值时认为速度为0 (可用于控制惯性滚动结束期的顺滑度)
  if (Math.abs(data.speed) <= data.zeroSpeed) {
    checkReboundY();
    return;
  }
  //滚动一次以后记录一下结束时间更始为下一次的开始时间
  data.frameStartTime = data.frameEndTime;
  data.inertiaFrame = requestAnimationFrame(moveByInertia);
}

//检测是否回弹
const checkReboundY =() => {
  data.reBounding = false;
  if (listHeight.value <= 0) {
    //列表高度小于视窗高度的时候不需要滚动
    data.reBounding = true;
    data.translateY = 0;
  } else if (data.translateY > 0) {
    //上面的高度超了，重置为0,来个回弹效果
    data.reBounding = true;
    data.translateY = 0;
  } else if (data.translateY < -listHeight.value) {
    //下面的距离超了
    data.reBounding = true;
    data.translateY = -listHeight.value;
  }
  //以上部为主，这个看得懂吧
  return data.translateY === 0 || data.translateY === -listHeight.value;
}

const navTouchStart = (e: any)=> {
  e.stopPropagation();
  cancelAnimationFrame(data.inertiaFrame);
  //每次点击的时候初始化动画，记录当前点击的位置
  data.lastY = e.touches[0].clientY;
}

const navTouchMove = (e: any)=> {
  e.preventDefault(); //这个阻止父元素的下拉事件发生
  e.stopPropagation(); //这个阻止冒泡事件
  data.touching = true;
  data.startMoveTime = data.endMoveTime; //上次时间更新开始时间
  data.startY = data.lastY; //上次点击位置更新开始位置
  data.currentY = e.touches[0].clientY; //当前点击位置
  moveFollowTouch();
  data.endMoveTime = e.timeStamp;
}

const navTouchEnd = (e: any) => {
  data.touching = false;
  if (checkReboundY()) {
    //做了边界修正后。停止动画
    cancelAnimationFrame(data.inertiaFrame);
  } else {
    //正常滚动结束的时候的操作
    //手指的停顿时间
    let silenceTime = e.timeStamp - data.endMoveTime;
    //获取移动结束后停止的时间
    let timeStamp = data.endMoveTime - data.startMoveTime;
    //这里的八秒是最佳时间？或许可有可无
    timeStamp = timeStamp > 0 ? timeStamp : 8;
    if (silenceTime > 100) return; // 停顿时间超过100ms不产生惯性滑动;
    //物理学中用速度来表示物体运动的快慢和方向。速度在数值上等于物体运动的位移跟发生这段位移所用的时间的比值。速度的计算公式为v=Δx/Δt
    data.speed = (data.lastY - data.startY) / timeStamp;
    //阻力越小，速度越大
    data.acceleration = data.speed / props.sensitivity;
    data.frameStartTime = new Date().getTime();
    data.inertiaFrame = requestAnimationFrame(moveByInertia);
  }
}
//#endregion

</script>
<style>
.nav-list-root{
  float: left;
  box-sizing: border-box;
  overflow: hidden;
  background: #f8f8f8;
}
.nav-list-root .nav-list{
  margin: 0;
  padding: 0;
}

.nav-list-root .nav-list li{
  list-style: none;
  text-align: center;
  font-size: 14px;
  color: #666;
  height: 42px;
  line-height: 42px;
  border-bottom: solid 1px #e9e9ea;
  position: relative;
}
.nav-list-root .nav-list .avtice {
    background: #fff;
}
.nav-list-root .nav-list .avtice::before {
  content: "";
  width: 3px;
  height: 42px;
  background: #23cc77;
  position: absolute;
  left: 0;
}
</style>
