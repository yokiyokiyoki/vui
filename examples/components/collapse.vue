<template>
  <div class="collapse">
    <ds-collapse v-model="value" :accordion="accordion" @on-change="handleChange">
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
  </div>
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
      console.log(value);
    }
  }
};
</script>
