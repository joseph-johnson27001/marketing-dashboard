import { defineStore } from "pinia";
import { fetchOverviewData } from "@/api/overview";

export const useOverviewStore = defineStore("overview", {
  state: () => ({
    kpis: [],
    loading: true,
  }),

  actions: {
    async loadOverviewData() {
      this.loading = true;
      this.kpis = await fetchOverviewData();
      this.loading = false;
    },
  },
});
