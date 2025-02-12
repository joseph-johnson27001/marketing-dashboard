<template>
  <div class="kpi-card">
    <div class="kpi-header">
      <span class="kpi-title">{{ title }}</span>
      <i :class="icon" class="kpi-icon" :style="{ color: iconColor }"></i>
    </div>
    <div class="kpi-footer">
      <span class="kpi-value">{{ value }}</span>
      <span class="kpi-percentage" :class="percentageClass">
        {{ percentage }}%
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    value: { type: [String, Number], required: true },
    percentage: { type: Number, required: true },
    icon: { type: String, required: true },
    iconColor: { type: String, required: true },
  },
  computed: {
    percentageClass() {
      return this.percentage >= 0 ? "positive" : "negative";
    },
  },
};
</script>

<style scoped>
.kpi-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 15px;
  gap: 15px;
}

.kpi-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.kpi-title {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}

.kpi-icon {
  font-size: 1.2rem;
}

.kpi-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.kpi-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #444;
}

.kpi-percentage {
  font-size: 1rem;
  font-weight: bold;
  padding: 3px 10px;
  border-radius: 4px;
  border: 1px solid #eee;
}

.positive {
  color: #16a34a;
  background: #d1fae5;
}

.negative {
  color: #dc2626;
  background: #fee2e2;
}
</style>
