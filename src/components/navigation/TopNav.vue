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
      <button class="notification-btn">
        <i class="fas fa-bell"></i>
        <span class="badge">5</span>
      </button>
      <button class="mail-btn">
        <i class="fas fa-envelope"></i>
        <span class="badge">3</span>
      </button>
      <img
        class="profile-pic"
        src="images/ProfilePhoto4.jpg"
        alt="User Profile"
      />
      <span class="user-name">John Doe</span>
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
  border-bottom: 1px solid #ddd;
}

.left {
  display: flex;
  align-items: center;
  margin-left: 5px;
}

button {
  cursor: pointer;
}

.hamburger-btn,
.search-btn {
  background: none;
  border: none;
  color: #333;
  font-size: 0.85rem;
  margin-left: 5px;
}

.right {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.profile-pic {
  border-radius: 50%;
  margin-right: 5px;
  height: 30px;
  width: 30px;
  cursor: pointer;
}

.user-name {
  color: #333;
  font-size: 0.9rem;
  font-weight: 500;
}

.mail-btn,
.notification-btn {
  background: none;
  border: none;
  color: #333;
  margin-right: 15px;
  position: relative;
}

.badge {
  position: absolute;
  top: -7px;
  right: -3px;
  background-color: #d86890;
  color: white;
  border-radius: 50%;
  font-size: 10px;
  padding: 2px 5px;
}
</style>
