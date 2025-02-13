<template>
  <div class="table-container-card">
    <!-- Card Header -->
    <div class="card-header">
      <span class="card-title">{{ cardTitle }}</span>
    </div>

    <!-- Table Slot -->
    <div class="table-placeholder">
      <slot></slot>
      <!-- Allow tables to be injected here -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TableCard",
  props: {
    cardTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.table-container-card {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  height: 325px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #000;
}

.table-placeholder {
  border-radius: 4px;
  margin-top: 10px;
}
</style>
