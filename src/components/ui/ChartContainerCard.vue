<template>
  <div class="chart-container-card">
    <!-- Chart Header -->
    <div class="chart-header">
      <span class="chart-title">{{ chartTitle }}</span>

      <!-- Dropdown for selecting range -->
      <select class="range-dropdown" v-model="selectedRange">
        <option value="hourly">Hourly</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </div>

    <!-- Chart Slot -->
    <div class="chart-placeholder">
      <slot :selectedRange="selectedRange"></slot>

      <!-- Allow graphs to be injected here -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ChartContainerCard",
  props: {
    chartTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedRange: "monthly",
    };
  },
};
</script>

<style scoped>
.chart-container-card {
  background: #fff;
  border-radius: 4px;
  padding: 10px 20px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chart-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #000;
}

.range-dropdown {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}

.chart-placeholder {
  background-color: #f9f9f9;
  border-radius: 4px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  font-size: 1rem;
}
</style>
