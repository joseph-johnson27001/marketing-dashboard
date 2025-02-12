<template>
  <div id="app">
    <SideBar :collapsed="collapsed" />
    <div class="main-content">
      <div class="content">
        <TopNav @toggle-sidebar="toggleSidebar" />
        <router-view />
        <!-- Dynamically load pages like Overview, Campaigns, Traffic -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TopNav from "./components/navigation/TopNav.vue";
import SideBar from "./components/navigation/SideBar.vue";

const collapsed = ref(false);

const toggleSidebar = () => {
  collapsed.value = !collapsed.value;
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}

#app {
  min-height: 100dvh;
  width: 100%;
  display: flex;
  font-family: "Assistant", serif;
}

.main-content {
  display: flex;
  width: 100%;
}

.content {
  flex-grow: 1;
  background-color: #f8fafb;
}
</style>
