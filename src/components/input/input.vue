<template>
  <div class="ds-input">
    <input type="text" v-model="msg">
  </div>
</template>
<script>
export default {
  name: 'ds-input',
  data() {
    return {
      msg: 'ds-ui'
    };
  }
};
</script>
