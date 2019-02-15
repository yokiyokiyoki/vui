<template>
  <div class="collapse">
    <ds-collapse v-model="value"></ds-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ['1', '2']
    };
  }
};
</script>
