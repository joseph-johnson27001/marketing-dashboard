<template>
  <div class="subscribers-graph">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { onMounted, watch, ref } from "vue";
import Chart from "chart.js/auto";

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

    onMounted(() => {
      createChart(getChartData("24hr"));
    });

    watch(
      () => props.selectedRange,
      (newRange) => {
        updateChart(getChartData(newRange));
      }
    );

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
              grid: {
                display: false,
              },
            },
            y: {
              ticks: { color: "#333" },
            },
          },
        },
      });

      console.log(chartInstance);
    }

    function updateChart(data) {
      if (chartInstance) {
        chartInstance.data = data;
        chartInstance.update();
      }
    }

    function getChartData(range) {
      let labels = [];
      let data = [];

      switch (range) {
        case "24hr":
          labels = Array.from({ length: 24 }, (_, i) => `${i + 1}h`);
          data = labels.map(() => Math.floor(Math.random() * 100));
          break;
        case "lastWeek":
          labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
          data = labels.map(() => Math.floor(Math.random() * 1000));
          break;
        case "lastMonth":
          labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
          data = labels.map(() => Math.floor(Math.random() * 5000));
          break;
        case "lastYear":
          labels = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          data = labels.map(() => Math.floor(Math.random() * 20000));
          break;
      }

      return {
        labels,
        datasets: [
          {
            label: "Subscribers",
            data,
            fill: false,
            borderColor: "#0288d1",
            tension: 0.2,
            borderWidth: 2,
            pointBackgroundColor: "#0288d1",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 5,
            fontamily: '"Assistant", sans-serif',
          },
        ],
      };
    }

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
