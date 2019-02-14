<template>
  <div class="container">
    <nav>
      <ul>
        <li>
          <router-link to="/button">Button</router-link>
        </li>
        <li>
          <router-link to="/collapse">collapse</router-link>
        </li>
        <li>
          <router-link to="/icon">icon</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
