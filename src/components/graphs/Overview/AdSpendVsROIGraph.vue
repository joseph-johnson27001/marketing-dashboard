<template>
  <div class="ad-spend-roi-graph">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { onMounted, watch, ref } from "vue";
import Chart from "chart.js/auto";
import { fetchAdSpendVsROIData } from "@/api/overview"; // You'll create this API function to fetch data

export default {
  props: {
    selectedRange: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const chartCanvas = ref(null);
    let chartInstance = null;

    function createChart(data) {
      if (chartInstance) chartInstance.destroy();

      chartInstance = new Chart(chartCanvas.value, {
        type: "line",
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
              labels: {
                font: {
                  family: '"Assistant", sans-serif',
                },
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: "#333",
                font: {
                  family: '"Assistant", sans-serif',
                },
              },
              grid: { display: false },
            },
            y: {
              ticks: {
                color: "#333",
                font: {
                  family: '"Assistant", sans-serif',
                },
              },
            },
          },
        },
      });
    }

    function loadChartData(range) {
      fetchAdSpendVsROIData(range)
        .then((data) => {
          if (!data || !data.labels || !data.adSpend || !data.roi) return;

          createChart({
            labels: data.labels,
            datasets: [
              {
                label: "Ad Spend",
                data: data.adSpend,
                fill: false,
                borderColor: "#ff7043",
                tension: 0.2,
                borderWidth: 2,
                pointBackgroundColor: "#ff7043",
                pointBorderColor: "#fff",
                pointBorderWidth: 2,
                pointRadius: 5,
                fontFamily: '"Assistant", sans-serif',
              },
              {
                label: "ROI",
                data: data.roi,
                fill: false,
                borderColor: "#4caf50",
                tension: 0.2,
                borderWidth: 2,
                pointBackgroundColor: "#4caf50",
                pointBorderColor: "#fff",
                pointBorderWidth: 2,
                pointRadius: 5,
                fontFamily: '"Assistant", sans-serif',
              },
            ],
          });
        })
        .catch((error) => {
          console.error("Error fetching chart data:", error);
        });
    }

    onMounted(() => {
      loadChartData(props.selectedRange);
    });

    watch(
      () => props.selectedRange,
      (newRange) => {
        loadChartData(newRange);
      }
    );

    return { chartCanvas };
  },
};
</script>

<style scoped>
.ad-spend-roi-graph {
  width: 100%;
  height: 300px;
  background-color: #fff;
}
</style>
