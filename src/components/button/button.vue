<template>
  <component :is="tagName" :class="classes" :disabled="disabled" v-bind="tagProps" @click="handleClick">
    <!-- 是否显示插槽内容 -->
    <span v-if="showSlot" ref="slot"><slot></slot></span>
  </component>
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
    },
    //设置button的原生type属性
    htmlType:{
      default:'button',
      type:String,
      validator(value){
        let typeList = ['button','submit','reset']
        return oneOf(value,typeList)
      }
    },
    //跳转的链接
    href:{
      type:[String,Object]
    },
    target:{
      default:'_self',
      type:String,
      validator(value){
        let typeList = ['_self','_blank','_parent','_top']
        return oneOf(value,typeList)
      }
    },

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
    },
    //是否传入了href属性 是否渲染成<a>标签
    //whether there is the href attribute and shoud it be rendered as <a>
    isHrefPattern(){
      const {href} = this
      return !!href
    },
    linkUrl(){
      const type = typeof this.href
      return type == 'string'?this.href:null //如果传入的href不是string 类型 那就不设置href属性的值
    },
    //<component>is的值，来决定哪一个组件被渲染
    //the value of 'is' attribute 
    tagName(){
      const {isHrefPattern} = this
      return isHrefPattern?'a':'button'
    },
    tagProps(){
      //绑定一个对象到组件上 设置组件的一些属性
      //setting some attributes of this component
      const {isHrefPattern} = this
      if(isHrefPattern){
        const {linkUrl,target} = this
        return {href:linkUrl,target}
      }else{
        //如果是button 设置button原生的type值
        const {htmlType} = this 
        return {type:htmlType}
      }

    }
  },
  mounted(){
    //判断是否有插槽内容
    this.showSlot = this.$slots.default !== undefined;
  },
  methods: {
    handleClick(event) {
      this.$emit('click',event)
      const openInNewWindow = event.ctrlKey || event.metaKey 
      this.handleCheckClick(event,openInNewWindow) 
    },
    //如果有跳转链接 那么需要处理一下
    handleCheckClick(event,new_window = false){
      if(this.href){
        if(this.target == '_blank'){
          //默认打开新窗口跳转
          return false
        }else{
          event.preventDefault()
          this.handleClickLink(new_window)
        }
      }
    },
    handleClickLink(new_window = false){
      const {linkUrl} = this
      if(new_window){
        if(linkUrl){
          window.open(linkUrl) //新窗口打开
        }
      }else{
        //默认的跳转方式
        if(linkUrl){
          window.location.href = this.href
        }else{
          //传入的href是一个对象 路由跳转
          const router = this.$router
          if(router){
            router.push(this.href)
          }
        }
      }
    }
  }
};
var oneOf = function(val,arr){
  return arr.indexOf(val) !== -1
}
</script>
