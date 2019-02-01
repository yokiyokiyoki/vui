<template>
  <div class="button">
    <div class="list">
      <ds-button >default</ds-button>
      <ds-button type="primary">primary</ds-button>
      <ds-button type="dashed">dashed</ds-button>
      <ds-button type="text">text</ds-button>
      <ds-button type="info">info</ds-button>
      <ds-button type="success">success</ds-button>
      <ds-button type="warning">warning</ds-button>
      <ds-button type="error">error</ds-button>
    </div>
    <div class="list">
      <ds-button size="large">large</ds-button>
      <ds-button >default</ds-button>
      <ds-button size="small">small</ds-button>
    </div>
    <div class="list ghost">
      <ds-button ghost>default</ds-button>
      <ds-button type="primary" ghost>primary</ds-button>
      <ds-button type="dashed" ghost>dashed</ds-button>
      <ds-button type="text" ghost>text</ds-button>
      <ds-button type="info" ghost>info</ds-button>
      <ds-button type="success" ghost>success</ds-button>
      <ds-button type="warning" ghost>warning</ds-button>
      <ds-button type="error" ghost>error</ds-button>
    </div>
    <div class="list">
      <ds-button disabled>default</ds-button>
      <ds-button type="primary" disabled>primary</ds-button>
      <ds-button type="dashed" disabled>dashed</ds-button>
      <ds-button type="text" disabled>text</ds-button>
      <ds-button type="info" disabled>info</ds-button>
      <ds-button type="success" disabled>success</ds-button>
      <ds-button type="warning" disabled>warning</ds-button>
      <ds-button type="error" disabled>error</ds-button>
    </div>
    <div class="list ghost">
      <ds-button ghost disabled>default</ds-button>
      <ds-button type="primary" ghost disabled>primary</ds-button>
      <ds-button type="dashed" ghost disabled>dashed</ds-button>
      <ds-button type="text" ghost disabled>text</ds-button>
      <ds-button type="info" ghost disabled>info</ds-button>
      <ds-button type="success" ghost disabled>success</ds-button>
      <ds-button type="warning" ghost disabled>warning</ds-button>
      <ds-button type="error" ghost disabled>error</ds-button>
    </div>
    <div class="list block">
      <ds-button block>default</ds-button>
      <ds-button type="primary" block>primary</ds-button>
      <ds-button type="dashed" block>dashed</ds-button>
      <ds-button type="text" block>text</ds-button>
      <ds-button type="info" block>info</ds-button>
      <ds-button type="success" block>success</ds-button>
      <ds-button type="warning" block>warning</ds-button>
      <ds-button type="error" block>error</ds-button>
    </div>
    <div class="list group">
      <ds-button-group>
        <ds-button >default</ds-button>
        <ds-button >default</ds-button>
        <ds-button >default</ds-button>
      </ds-button-group>
      <ds-button-group>
        <ds-button type="primary">primary</ds-button>
        <ds-button type="primary">primary</ds-button>
        <ds-button type="primary">primary</ds-button>
      </ds-button-group>
      <ds-button-group>
        <ds-button type="info">info</ds-button>
        <ds-button type="info">info</ds-button>
        <ds-button type="info">info</ds-button>
      </ds-button-group>
      <ds-button-group>
        <ds-button type="success">success</ds-button>
        <ds-button type="success">success</ds-button>
        <ds-button type="success">success</ds-button>
      </ds-button-group>
      <ds-button-group>
        <ds-button type="warning">warning</ds-button>
        <ds-button type="warning">warning</ds-button>
        <ds-button type="warning">warning</ds-button>
      </ds-button-group>
      <ds-button-group>
        <ds-button type="error">error</ds-button>
        <ds-button type="error">error</ds-button>
        <ds-button type="error">error</ds-button>
      </ds-button-group>
      <ds-button-group>
        <ds-button type="info">info</ds-button>
        <ds-button type="success">success</ds-button>
        <ds-button type="warning">warning</ds-button>
        <ds-button type="error">error</ds-button>
      </ds-button-group>
    </div>
     <div class="list">
       <button>222</button>
       <button>22244</button>
    </div>
  </div>
  
</template>
<script>

export default {};
</script>
<style lang="less" scoped>
.list{
  margin:10px 0px;
  padding:10px 5px;
  &.ghost{
    background: #bec8c8;
  }
  &.block{
    width:250px;
    button{
      margin-bottom: 10px;
    }
  }
  &.group{
    div{
      margin-bottom: 10px;
    }
  }
}
</style>

