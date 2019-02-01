<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = 'ds-btn-group';
export default {
    name: "ds-button-group",
    computed:{
        classes(){
            return [
                `${prefixCls}`,

            ]
        }
    }
}
</script>

