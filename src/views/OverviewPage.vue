<template>
  <div class="overview-page">
    <LoadingSpinner v-if="overviewStore.loading" />
    <div v-else>
      <div class="kpi-container">
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

      <div class="top-container">
        <div class="chart-container">
          <ChartContainerCard chartTitle="Subscribers">
            <template v-slot="{ selectedRange }">
              <SubscribersGraph :selectedRange="selectedRange" />
            </template>
          </ChartContainerCard>
        </div>
        <ChartContainerCard chartTitle="Ad Spend vs ROI">
          <template v-slot="{ selectedRange }">
            <AdSpendVsROIGraph :selectedRange="selectedRange" />
          </template>
        </ChartContainerCard>
      </div>

      <div class="chart-containers">
        <div class="chart-container">
          <TableCard cardTitle="Current Campaigns">
            <CampaignTable />
          </TableCard>
        </div>
        <div class="chart-container">
          <div class="map-container">
            <MapContainer mapTitle="Viewers" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useOverviewStore } from "@/store/overviewStore";
import KpiCard from "@/components/ui/KpiCard.vue";
import ChartContainerCard from "@/components/ui/ChartContainerCard.vue";
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";
import MapContainer from "@/components/ui/MapContainer.vue";
import { onMounted, computed } from "vue";
import SubscribersGraph from "@/components/graphs/Overview/SubscribersGraph.vue";
import AdSpendVsROIGraph from "@/components/graphs/Overview/AdSpendVsROIGraph.vue";
import CampaignTable from "@/components/tables/Overview/CampaignTable.vue";
import TableCard from "@/components/ui/TableCard.vue";

export default {
  components: {
    KpiCard,
    LoadingSpinner,
    ChartContainerCard,
    MapContainer,
    SubscribersGraph,
    AdSpendVsROIGraph,
    CampaignTable,
    TableCard,
  },

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
  padding: 10px;
}

.kpi-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}

.top-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
  gap: 10px;
}

.chart-containers {
  display: grid;
  grid-template-columns: 3fr 2fr;
  margin-top: 10px;
  gap: 10px;
}
</style>
