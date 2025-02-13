<template>
  <div class="map-container">
    <div class="map-header">
      <span class="map-title">{{ mapTitle }}</span>
      <select class="range-dropdown" v-model="selectedRange">
        <option value="hourly">Hourly</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </div>

    <div class="map-placeholder">
      <vue-world-map
        :countryData="viewershipData"
        :lowColor="'#b3e8ff'"
        :highColor="'#01a9f2'"
        style="background-color: white"
        :defaultCountryFillColor="'#e4ecef'"
        :countryStrokeColor="'white'"
      />
    </div>
  </div>
</template>

<script>
import VueWorldMap from "vue-world-map";
import { fetchViewershipData } from "@/api/overview";

export default {
  name: "MapContainer",
  components: {
    VueWorldMap,
  },
  props: {
    mapTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedRange: "hourly",
      viewershipData: {},
    };
  },
  watch: {
    selectedRange(newRange) {
      this.loadViewershipData(newRange);
    },
  },
  methods: {
    async loadViewershipData(range) {
      try {
        const data = await fetchViewershipData(range);
        this.viewershipData = data;
      } catch (error) {
        console.error("Error fetching viewership data:", error);
      }
    },
  },
  mounted() {
    this.loadViewershipData(this.selectedRange);
  },
};
</script>

<style scoped>
.map-container {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
}

.map-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.map-title {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}

.range-dropdown {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}

.map-placeholder {
  height: 300px;
  background-color: #f9f9f9;
}
</style>
