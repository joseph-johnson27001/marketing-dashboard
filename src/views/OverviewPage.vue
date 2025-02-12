<template>
  <div class="overview-page">
    <div class="kpi-container">
      <KpiCard
        title="Revenue"
        value="$15,200"
        percentage="8.5"
        icon="fas fa-dollar-sign"
      />
      <KpiCard
        title="Users"
        value="1,250"
        percentage="-2.3"
        icon="fas fa-users"
      />
      <KpiCard
        title="Engagement"
        value="75%"
        percentage="5.1"
        icon="fas fa-chart-line"
      />
      <KpiCard
        title="Conversions"
        value="320"
        percentage="-1.2"
        icon="fas fa-shopping-cart"
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
}
</style>
