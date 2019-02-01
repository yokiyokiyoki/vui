<template>
  <button :class="classes" :disabled="disabled">
    <!-- 是否显示插槽内容 -->
    <span v-if="showSlot" ref="slot"><slot></slot></span>
  </button>
</template>
<script>
const prefixCls = 'ds-btn';
import '../../styles/components/button.less'
export default {
  name: "ds-button",
  data() {
    return {
      showSlot:true,
    };
  },
  props: {
    type:{
      //校验type类型
      validator(value){
        let typeList = ['default','primary','dashed','text','info','success','warning','error']
        return oneOf(value,typeList)
      },
      default:'default'
    },
    size:{
      //校验type类型
      validator(value){
        let typeList = ['default','large','small']
        return oneOf(value,typeList)
      },
      default:'default'
    },
    ghost: {
      type: Boolean,
      default: false
    },
    disabled:{
      type: Boolean,
      default: false
    },
    /*** 是否将按钮宽度设置为父元素的宽度 **/
    block:{
      type:Boolean,
      default:false
    }
  },
  computed:{
    classes(){
      return [
        prefixCls,
        `${prefixCls}-${this.type}`,
        {
          [`${prefixCls}-${this.size}`]: this.size != 'default', //不等于default的时候再添加size的相关class
          [`${prefixCls}-ghost`]:this.ghost,
          [`${prefixCls}-block`]:this.block
        }
      ]
    }
  },
  mounted(){
    console.log(this.$slots)
    //判断是否有插槽内容
    this.showSlot = this.$slots.default !== undefined;
  }
  // methods: {
  //   handleClick() {
  //     console.log(this.msg + this.ds);
  //   }
  // }
};
var oneOf = function(val,arr){
  return arr.indexOf(val) !== -1
}
</script>
