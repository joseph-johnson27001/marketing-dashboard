<template>
  <div class="overview-page">
    <LoadingSpinner v-if="overviewStore.loading" />
    <div v-else class="kpi-container">
      <KpiCard
        v-for="(kpi, index) in kpiData"
        :key="index"
        :title="kpi.title"
        :value="overviewStore.kpis[index]?.value"
        :percentage="overviewStore.kpis[index]?.percentage || 0"
        :icon="kpi.icon"
        :iconColor="kpi.iconColor"
      />
    </div>
  </div>
</template>

<script>
import { useOverviewStore } from "@/store/overviewStore";
import KpiCard from "@/components/ui/KpiCard.vue";
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";
import { onMounted, computed } from "vue";

export default {
  components: { KpiCard, LoadingSpinner },

  setup() {
    const overviewStore = useOverviewStore();

    onMounted(() => {
      overviewStore.loadOverviewData();
    });

    const kpiData = computed(() => [
      { title: "Revenue", icon: "fas fa-dollar-sign", iconColor: "#10b981" },
      { title: "Users", icon: "fas fa-users", iconColor: "#3b82f6" },
      { title: "Engagement", icon: "fas fa-chart-line", iconColor: "#f59e0b" },
      {
        title: "Conversions",
        icon: "fas fa-shopping-cart",
        iconColor: "#ef4444",
      },
      { title: "Retention Rate", icon: "fas fa-redo", iconColor: "#a855f7" },
      { title: "New Signups", icon: "fas fa-user-plus", iconColor: "#6366f1" },
    ]);

    return { overviewStore, kpiData };
  },
};
</script>

<style scoped>
.overview-page {
  padding: 20px;
}

.kpi-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}
</style>
