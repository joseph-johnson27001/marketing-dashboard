<template>
  <div :class="['sidebar', { collapsed }]">
    <div class="sidebar-header">
      <h1 v-if="!collapsed">Dashboard</h1>
      <i v-if="collapsed" class="fas fa-tachometer-alt"></i>
    </div>
    <ul class="nav">
      <li v-for="(item, index) in navItems" :key="index">
        <router-link :to="item.link" class="nav-item">
          <i :class="item.icon" :style="{ color: item.iconColor }"></i>
          <!-- Dynamic Icon -->
          <span v-if="!collapsed">{{ item.label }}</span>
          <!-- Dynamic Label -->
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      navItems: [
        {
          label: "Overview",
          link: "/",
          icon: "fas fa-line-chart",
          iconColor: "#01a9f2",
        },
        {
          label: "Campaigns",
          link: "/campaigns",
          icon: "fas fa-bullhorn",
          iconColor: "#e74c3c",
        },
        {
          label: "Traffic",
          link: "/traffic",
          icon: "fas fa-chart-line",
          iconColor: "#2ecc71",
        },
        {
          label: "Leads",
          link: "/leads",
          icon: "fas fa-user-friends",
          iconColor: "#9b59b6",
        },
        {
          label: "SEO",
          link: "/seo",
          icon: "fas fa-search",
          iconColor: "#f1c40f",
        },
        {
          label: "Social",
          link: "/social",
          icon: "fas fa-share-alt",
          iconColor: "#34495e",
        },
        {
          label: "Reports",
          link: "/reports",
          icon: "fas fa-file-alt",
          iconColor: "#16a085",
        },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #fff;
  transition: width 0.3s ease;
  height: 100dvh;
  border-right: 1px solid #ddd;
  color: #333;
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar-header {
  text-align: center;
  height: 50px;
  border-bottom: 1px solid #ddd;
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
  padding: 15px 20px;
  text-decoration: none;
  color: #000;
  transition: background-color 0.3s ease;
  cursor: pointer;
  font-size: 1=0.9rem;
  font-family: "Assistant", sans-serif;
}

.nav-item i {
  font-size: 1rem;
  margin-right: 10px;
}

.nav-item:hover {
  background-color: #f4f4f4;
}

.nav-item:hover i {
  color: #3498db;
}

.nav-item span {
  display: inline-block;
}

.sidebar.collapsed .nav-item span {
  display: none;
}
</style>
