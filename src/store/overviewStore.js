import { defineStore } from "pinia";
import { fetchOverviewData } from "@/api/overview";

export const useOverviewStore = defineStore("overview", {
  state: () => ({
    kpis: [],
  }),

  actions: {
    async loadOverviewData() {
      this.kpis = await fetchOverviewData();
    },
  },
});
