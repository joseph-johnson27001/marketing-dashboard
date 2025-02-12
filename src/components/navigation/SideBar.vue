<template>
  <div :class="['sidebar', { collapsed }]">
    <div class="sidebar-header">
      <h1 v-if="!collapsed">Dashboard</h1>
      <i v-if="collapsed" class="fas fa-tachometer-alt"></i>
    </div>

    <div class="nav-items">
      <ul class="nav">
        <!-- Loop through filtered navItems (without logout) -->
        <li v-for="(item, index) in filteredNavItems" :key="index">
          <router-link :to="item.link" class="nav-item">
            <i :class="item.icon" :style="{ color: item.iconColor }"></i>
            <span v-if="!collapsed">{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Logout item at the bottom -->
    <div class="logout" v-if="logoutItem">
      <router-link :to="logoutItem.link" class="nav-item">
        <i
          :class="logoutItem.icon"
          :style="{ color: logoutItem.iconColor }"
        ></i>
        <span v-if="!collapsed">{{ logoutItem.label }}</span>
      </router-link>
    </div>
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
          iconColor: "#dd6d6b",
        },
        {
          label: "Traffic",
          link: "/traffic",
          icon: "fas fa-bar-chart",
          iconColor: "#3BCB98",
        },
        {
          label: "Leads",
          link: "/leads",
          icon: "fas fa-user",
          iconColor: "#B57EDC",
        },
        {
          label: "SEO",
          link: "/seo",
          icon: "fas fa-search",
          iconColor: "#F1C40F",
        },
        {
          label: "Social",
          link: "/social",
          icon: "fas fa-share-alt",
          iconColor: "#4B78D0",
        },
        {
          label: "Reports",
          link: "/reports",
          icon: "fas fa-file-alt",
          iconColor: "#16C28D",
        },
      ],
      logoutItem: {
        label: "Logout",
        // link: "/logout",
        icon: "fas fa-sign-out-alt",
        iconColor: "#e74c3c",
      },
    };
  },
  computed: {
    filteredNavItems() {
      return this.navItems;
    },
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
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
  padding: 10px 20px;
  font-weight: 400;
  text-align: left;
}

.nav-items {
  flex-grow: 1;
}

.nav {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
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

/* Logout button positioned at the bottom */
.logout {
  margin-top: auto;
}
</style>
