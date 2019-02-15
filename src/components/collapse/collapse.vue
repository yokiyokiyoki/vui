<template>
  <div class="ds-collapse-wrapper">
    <panel header="介绍">
      <p>11</p>
    </panel>
  </div>
</template>
<script>
import panel from './panel';
export default {
  name: 'ds-collapse',
  components: {
    panel
  },
  props: {
    activeKey: [Array, String],
    defaultActiveKey: {
      type: [Array, String],
      required: true
    },
    accordion: {
      type: Boolean,
      default: false
    },
    destroyInactivePanel: {
      type: Boolean,
      default: false
    }
  }
};
</script>

