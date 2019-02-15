<template>
  <div class="ds-collapse-wrapper">
    <panel header="介绍" name="1">
      <p>11</p>
    </panel>
    <panel header="介绍3" name="2">
      <p>112</p>
    </panel>
  </div>
</template>
<script>
import panel from './panel';
export default {
  name: 'ds-collapse',
  props: {
    value: {
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
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  components: {
    panel
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue() {
      this.setActive();
    }
  },
  mounted() {
    this.setActive();
  },
  methods: {
    setActive() {
      const activeKey = this.getActiveKey();
      this.$children.forEach(child => {
        const name = child.name;
        child.isActive = activeKey.includes(name);
      });
    },
    getActiveKey() {
      let activeKey = this.currentValue || [];
      //如果不是数组，手动变成数组
      if (!Array.isArray(activeKey)) {
        activeKey = [activeKey];
      }
      //手风琴模式下,默认取第一个
      if (this.accordion && activeKey.length > 1) {
        activeKey = [activeKey[0]];
      }
      activeKey.map(key => {
        return key + '';
      });
      return activeKey;
    },
    toggle({ name, isActive }) {
      console.log(name, isActive);
      let newActiveKey = [];
      //手风琴模式
      if (this.accordion) {
        if (!isActive) {
          newActiveKey.push(name);
        }
      } else {
        let activeKey = this.getActiveKey();
        const nameIndex = activeKey.indexOf(name);
        //找出inactive的面板并去掉
        if (isActive) {
          if (nameIndex > -1) {
            activeKey.splice(nameIndex, 1);
          }
        } else {
          if (nameIndex < 0) {
            activeKey.push(name);
          }
        }
        newActiveKey = activeKey;
      }
      this.currentValue = newActiveKey;
      this.$emit('input', newActiveKey);
      this.$emit('on-change', newActiveKey);
    }
  }
};
</script>

