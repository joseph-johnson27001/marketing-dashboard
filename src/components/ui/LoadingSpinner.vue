<!-- components/ui/LoadingSpinner.vue -->
<template>
  <div class="loading-container">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
/* Centered Loading Container */
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

/* Spinner Animation */
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ddd;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
