<template>
  <div>
    <button @click="handleClick">我是{{msg}}按钮</button>
    <span>{{msg+ds}}</span>
  </div>
</template>
<script>
export default {
  name: "ds-button",
  data() {
    return {
      ds: "ds-ui"
    };
  },
  props: {
    msg: {
      require: true,
      type: String
    }
  },
  methods: {
    handleClick() {
      console.log(this.msg + this.ds);
    }
  }
};
</script>
