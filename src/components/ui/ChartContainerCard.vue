<template>
  <div class="chart-container-card">
    <!-- Chart Header -->
    <div class="chart-header">
      <!-- Chart Title (Top Left) -->
      <span class="chart-title">{{ chartTitle }}</span>

      <!-- Dropdown (Top Right) -->
      <select class="range-dropdown" v-model="selectedRange">
        <option value="24hr">24hr</option>
        <option value="lastWeek">1 Week</option>
        <option value="lastMonth">1 Month</option>
        <option value="lastYear">1 Year</option>
      </select>
    </div>

    <!-- Chart Placeholder (Below Header) -->
    <div class="chart-placeholder">
      <!-- The actual graph will be here later -->
      <p>Graph will appear here</p>
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
      selectedRange: "24hr",
    };
  },
};
</script>

<style scoped>
.chart-container-card {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chart-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
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
