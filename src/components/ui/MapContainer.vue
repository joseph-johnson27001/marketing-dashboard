<template>
  <div class="map-container">
    <div class="map-header">
      <span class="map-title">{{ mapTitle }}</span>
      <select class="range-dropdown" v-model="selectedRange">
        <option value="24hr">24hr</option>
        <option value="lastWeek">1 Week</option>
        <option value="lastMonth">1 Month</option>
        <option value="lastYear">1 Year</option>
      </select>
    </div>

    <div class="map-placeholder">
      <vue-world-map
        :countryData="viewershipData"
        :lowColor="'#01a9f2'"
        :highColor="'#01a9f2'"
        style="background-color: white"
        :defaultCountryFillColor="'#e4ecef'"
        :countryStrokeColor="'white'"
        :tooltip="tooltipData"
      />
    </div>
  </div>
</template>

<script>
import VueWorldMap from "vue-world-map";

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
      selectedRange: "24hr",
      viewershipData: {
        US: 100,
        CA: 120,
        UK: 400,
        DE: 250,
        FR: 150,
        IN: 80,
        JP: 200,
      },
    };
  },
  watch: {
    selectedRange(newRange) {
      this.updateViewershipData(newRange);
    },
  },
  methods: {
    updateViewershipData(range) {
      switch (range) {
        case "24hr":
          this.viewershipData = {
            US: 100,
            CA: 120,
            UK: 400,
            DE: 250,
            FR: 150,
            IN: 80,
            JP: 200,
          };
          break;
        case "lastWeek":
          this.viewershipData = {
            US: 700,
            CA: 800,
            UK: 1800,
            DE: 1500,
            FR: 1000,
            IN: 600,
            JP: 1200,
          };
          break;
        case "lastMonth":
          this.viewershipData = {
            US: 3000,
            CA: 3500,
            UK: 12000,
            DE: 11000,
            FR: 8000,
            IN: 4000,
            JP: 7000,
          };
          break;
        case "lastYear":
          this.viewershipData = {
            US: 15000,
            CA: 17000,
            UK: 60000,
            DE: 55000,
            FR: 40000,
            IN: 20000,
            JP: 35000,
          };
          break;
        default:
          this.viewershipData = {};
          break;
      }
    },
    tooltipData(countryCode) {
      const views = this.viewershipData[countryCode] || 0;
      return `Views: ${views}`;
    },
  },
  mounted() {
    this.updateViewershipData(this.selectedRange);
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
  gap: 20px;
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
  height: 400px;
  background-color: #f9f9f9;
}
</style>
