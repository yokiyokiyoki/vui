## Collapse折叠面板

### 基本用法

```html
<template>
  <ds-collapse v-model="value" :accordion="accordion" @on-change='handleChange'>
    <ds-panel header="介绍" name="1">
    <p>11</p>
    </ds-panel>
    <ds-panel header="介绍3" name="2">
    <p>112</p>
    </ds-panel>
    <ds-panel header="介绍4" name="3">
    <p>112222</p>
    </ds-panel>
</ds-collapse>
</template>
<script>
  export default {
    data() {
      return {
        value: ['1', '2'],
        accordion: false
      };
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  };
</script>
```

### Collapse Props

| 参数    | 说明     | 类型   | 默认值 |
| ------- | -------- | ------  | ------ |
| value | 当前激活的面板的 name，可以使用v-model 双向绑定 | Array / String| — |
| accordion| 手风琴模式，为true时候每次最多展开一个| Boolean|false|


### Collapse Events

| 事件名称 | 说明     | 回调参数 |
| -------- | -------- | -------- |
| on-change    | 切换面板时触发 | 返回当前激活name的数组|

### Panel Props
| 参数    | 说明     | 类型   | 默认值 |
| ------- | -------- | ------  | ------ |
| name | 当前面板的 name，与 Collapse的value对应 | String| — |
| header| 头部内容 | String| — |

### Panel Slot
| 参数    | 说明     |
| ------- | -------- | 
| 无 | 描述内容 | 
