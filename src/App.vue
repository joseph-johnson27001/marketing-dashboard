<template>
  <div id="app">
    <SideBar :collapsed="collapsed" />
    <div class="main-content">
      <div class="content">
        <TopNav @toggle-sidebar="toggleSidebar" />
        <div class="main">
          <router-view />
        </div>
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

* {
  font-family: "Assistant", sans-serif;
}

#app {
  min-height: 100dvh;
  width: 100%;
  display: flex;
}

.main-content {
  display: flex;
  width: 100%;
}

.content {
  flex-grow: 1;
  background-color: #f8fafb;
}

.main {
  padding: 10px;
}
</style>
