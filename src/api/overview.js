// api/overview.js
export function fetchOverviewData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: "$15,200", percentage: 8.5 },
        { value: "1,250", percentage: -2.3 },
        { value: "75%", percentage: 5.1 },
        { value: "320", percentage: -1.2 },
        { value: "88%", percentage: 3.4 },
        { value: "540", percentage: 12.7 },
      ]);
    }, 300); // Simulate 1s API delay
  });
}
