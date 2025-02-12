<template>
  <div class="overview-page">
    <div class="kpi-container">
      <KpiCard
        title="Revenue"
        value="$15,200"
        percentage="8.5"
        icon="fas fa-dollar-sign"
        iconColor="#10b981"
      />
      <KpiCard
        title="Users"
        value="1,250"
        percentage="-2.3"
        icon="fas fa-users"
        iconColor="#01a9f2"
      />
      <KpiCard
        title="Engagement"
        value="75%"
        percentage="5.1"
        icon="fas fa-chart-line"
        iconColor="#f59e0b"
      />
      <KpiCard
        title="Conversions"
        value="320"
        percentage="-1.2"
        icon="fas fa-shopping-cart"
        iconColor="#a855f7"
      />
      <KpiCard
        title="Retention Rate"
        value="88%"
        percentage="3.4"
        icon="fas fa-redo"
        iconColor="#d86890"
      />
      <KpiCard
        title="New Signups"
        value="540"
        percentage="12.7"
        icon="fas fa-user-plus"
        iconColor="#6366f1"
      />
    </div>
  </div>
</template>

<script>
import KpiCard from "@/components/ui/KpiCard.vue";

export default {
  components: {
    KpiCard,
  },
};
</script>

<style scoped>
.overview-page {
  padding: 20px;
}
.kpi-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Now 6 in a row */
  gap: 10px;
}
</style>
