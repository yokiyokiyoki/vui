<template>
  <i :class="classes" :style="styles" @click="handleClick"></i>
</template>
<script>
const prefixCls = 'ds-icon'
import '../../styles/common/iconfont/iconfont.less'

export default {
  name: 'ds-icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: 14
    },
    spin: {
      type: Boolean,
      default: false
    },
    rotate: {
      type: [Number, String],
      default: 0
    },
    custom: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.type}`]: this.type !== '',
          [`${this.custom}`]: this.custom !== '',
          [`${prefixCls}-spin`]: this.spin,
        }
      ]
    },
    styles() {
      return [
        this.size && {
          fontSize: `${this.size}px`
        },
        this.rotate && {
          transform: `rotate(${this.rotate}deg)`
        }
      ]
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
};
</script>

