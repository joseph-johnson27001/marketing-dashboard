<template>
  <div class="topnav">
    <div class="left">
      <button @click="toggleSidebar" class="hamburger-btn">
        <i class="fas fa-bars"></i>
      </button>
      <button class="search-btn">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div class="right">
      <span class="user-name">John Doe</span>
      <img
        class="profile-pic"
        src="https://via.placeholder.com/30"
        alt="User Profile"
      />
      <button class="mail-btn">
        <i class="fas fa-envelope"></i>
        <span class="badge">3</span>
      </button>
      <button class="notification-btn">
        <i class="fas fa-bell"></i>
        <span class="badge">5</span>
      </button>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.topnav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #fff;
  color: #333;
  width: 100%;
  border-bottom: 1px solid #ccc;
}

.left {
  display: flex;
  align-items: center;
}

.hamburger-btn,
.search-btn {
  background: none;
  border: none;
  color: #333;
  font-size: 18px;
  margin-right: 15px;
}

.right {
  display: flex;
  align-items: center;
}

.user-name {
  margin-right: 10px;
}

.profile-pic {
  border-radius: 50%;
  margin-right: 10px;
}

.mail-btn,
.notification-btn {
  background: none;
  border: none;
  color: white;
  margin-left: 15px;
  position: relative;
}

.badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: red;
  color: white;
  border-radius: 50%;
  font-size: 10px;
  padding: 2px 5px;
}
</style>
