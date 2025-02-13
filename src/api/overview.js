import OverviewData from "@/data/OverviewData.json";

export function fetchOverviewData() {
  return Promise.resolve(OverviewData.kpis);
}

export function fetchSubscribersGraphData(range) {
  return Promise.resolve(
    OverviewData.subscribersGraph[range] || { labels: [], data: [] }
  );
}
