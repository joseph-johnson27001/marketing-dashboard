<template>
  <div :class="['sidebar', { collapsed }]">
    <div class="sidebar-header">
      <h1 v-if="!collapsed">Dashboard</h1>
      <i v-if="collapsed" class="fas fa-tachometer-alt"></i>
    </div>
    <ul class="nav">
      <li>
        <router-link to="/" class="nav-item">
          <i class="fas fa-tachometer-alt"></i>
          <span v-if="!collapsed">Overview</span>
        </router-link>
      </li>
      <li>
        <router-link to="/campaigns" class="nav-item">
          <i class="fas fa-bullhorn"></i>
          <span v-if="!collapsed">Campaigns</span>
        </router-link>
      </li>
      <li>
        <router-link to="/traffic" class="nav-item">
          <i class="fas fa-chart-line"></i>
          <span v-if="!collapsed">Traffic</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script></script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #fff;
  transition: width 0.3s ease;
  height: 100dvh;
  border-right: 1px solid #ccc;
  color: #333;
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar-header {
  text-align: center;
  height: 50px;
  border-bottom: 1px solid #ccc;
}

.sidebar-header h1 {
  font-size: 24px;
  margin: 0;
  padding: 10px;
}

.nav {
  list-style: none;
  padding: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  text-decoration: none;
}

.nav-item i {
  margin-right: 10px;
}

.nav-item span {
  display: inline-block;
}

.sidebar.collapsed .nav-item span {
  display: none;
}
</style>
