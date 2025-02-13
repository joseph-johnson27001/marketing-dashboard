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
        US: 400,
        CA: 120,
        UK: 200,
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
            GB: 400,
            DE: 250,
            FR: 150,
            IN: 80,
            JP: 200,
            TH: 200,
            AU: 300,
            BR: 150,
            MX: 220,
            IT: 180,
            ES: 250,
            NL: 130,
            RU: 190,
            ZA: 170,
            AR: 110,
            SE: 210,
            PL: 160,
            KR: 300,
          };
          break;
        case "lastWeek":
          this.viewershipData = {
            US: 700,
            CA: 800,
            GB: 1800,
            DE: 1500,
            FR: 1000,
            IN: 600,
            JP: 1200,
            TH: 400,
            AU: 650,
            BR: 850,
            MX: 900,
            IT: 1100,
            ES: 1050,
            NL: 900,
            RU: 1200,
            ZA: 1100,
            AR: 800,
            SE: 950,
            PL: 800,
            KR: 1300,
          };
          break;
        case "lastMonth":
          this.viewershipData = {
            US: 3000,
            CA: 3500,
            GB: 12000,
            DE: 11000,
            FR: 8000,
            IN: 4000,
            JP: 7000,
            TH: 1000,
            AU: 3200,
            BR: 4500,
            MX: 4000,
            IT: 4000,
            ES: 3800,
            NL: 3500,
            RU: 5000,
            ZA: 4200,
            AR: 3500,
            SE: 4600,
            PL: 4200,
            KR: 5500,
          };
          break;
        case "lastYear":
          this.viewershipData = {
            US: 15000,
            CA: 17000,
            GB: 60000,
            DE: 55000,
            FR: 40000,
            IN: 20000,
            JP: 35000,
            TH: 20000,
            AU: 18000,
            BR: 25000,
            MX: 22000,
            IT: 25000,
            ES: 27000,
            NL: 24000,
            RU: 30000,
            ZA: 22000,
            AR: 25000,
            SE: 28000,
            PL: 25000,
            KR: 35000,
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
