<template>
  <div class="map-container" @mousemove="updateTooltipPosition">
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
        @mouseover="showTooltip"
        @mouseleave="hideTooltip"
      />
    </div>

    <!-- Tooltip -->
    <div
      v-if="tooltipVisible"
      class="tooltip"
      :style="{ bottom: '10px', right: '10px' }"
    >
      {{ tooltipContent }}
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
      selectedRange: "daily",
      viewershipData: {},
      tooltipVisible: false,
      tooltipContent: "",
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
    showTooltip(event) {
      const countryCode = event.target.id;
      if (!countryCode || !this.viewershipData[countryCode]) {
        this.tooltipVisible = false;
        return;
      }
      const views = this.viewershipData[countryCode] || 0;
      this.tooltipContent = `${countryCode} Views: ${views}`;
      this.tooltipVisible = true;
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
  position: relative;
}

.map-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.map-title {
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

.map-placeholder {
  height: 300px;
  background-color: #f9f9f9;
}

/* Tooltip Styling */
.tooltip {
  position: absolute;
  background-color: black;
  color: white;
  padding: 6px 10px;
  border-radius: 5px;
  font-size: 0.85rem;
  z-index: 10;
}
</style>
