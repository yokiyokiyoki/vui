<template>
  <div class="container">
    <div class="main-content">
      <div class="page-container clearfix">
        <div class="page-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "highlight.js/styles/atom-one-dark.css";
export default {
  name: "App"
};
</script>
<style>
.doc-table {
  table-layout: fixed;
  width: inherit;
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  color: #515a6e;
  font-size: 12px;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #515a6e;
}
</style>
