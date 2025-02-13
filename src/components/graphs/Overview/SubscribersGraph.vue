<template>
  <div class="subscribers-graph">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { onMounted, watch, ref } from "vue";
import Chart from "chart.js/auto";
import { fetchSubscribersGraphData } from "@/api/overview";

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
            },
          },
          scales: {
            x: {
              ticks: { color: "#333" },
              grid: { display: false },
            },
            y: {
              ticks: { color: "#333" },
            },
          },
        },
      });
    }

    function loadChartData(range) {
      fetchSubscribersGraphData(range)
        .then((data) => {
          if (!data || !data.labels || !data.data) return;

          createChart({
            labels: data.labels,
            datasets: [
              {
                label: "Subscribers",
                data: data.data,
                fill: false,
                borderColor: "#0288d1",
                tension: 0.2,
                borderWidth: 2,
                pointBackgroundColor: "#0288d1",
                pointBorderColor: "#fff",
                pointBorderWidth: 2,
                pointRadius: 5,
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
.subscribers-graph {
  width: 100%;
  height: 300px;
  background-color: #fff;
}
</style>
