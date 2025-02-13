<template>
  <div class="campaign-table">
    <table>
      <thead>
        <tr>
          <th>Campaign Name</th>
          <th>Start Date</th>
          <th>Status</th>
          <th>Impressions</th>
          <th>Clicks</th>
          <th>Conversions</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(campaign, index) in campaigns" :key="index">
          <td>{{ campaign.name }}</td>
          <td>{{ campaign.startDate }}</td>
          <td>{{ campaign.status }}</td>
          <td>{{ campaign.impressions }}</td>
          <td>{{ campaign.clicks }}</td>
          <td>{{ campaign.conversions }}</td>
          <td>{{ campaign.revenue }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      campaigns: [
        {
          name: "Spring Sale",
          startDate: "2025-01-01",
          status: "Active",
          impressions: 10000,
          clicks: 500,
          conversions: 50,
          revenue: "$500",
        },
        {
          name: "Winter Clearance",
          startDate: "2025-02-01",
          status: "Paused",
          impressions: 8000,
          clicks: 300,
          conversions: 30,
          revenue: "$300",
        },
        {
          name: "Summer Launch",
          startDate: "2025-02-10",
          status: "Active",
          impressions: 15000,
          clicks: 800,
          conversions: 80,
          revenue: "$800",
        },
        {
          name: "Back-to-School",
          startDate: "2025-03-01",
          status: "Active",
          impressions: 12000,
          clicks: 600,
          conversions: 60,
          revenue: "$600",
        },
        {
          name: "Holiday Shopper",
          startDate: "2025-03-10",
          status: "Paused",
          impressions: 5000,
          clicks: 200,
          conversions: 20,
          revenue: "$200",
        },
        {
          name: "Black Friday",
          startDate: "2025-03-10",
          status: "Paused",
          impressions: 5000,
          clicks: 200,
          conversions: 20,
          revenue: "$200",
        },
      ],
    };
  },
};
</script>

<style scoped>
.campaign-table table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  border: 1px solid #eee;
}

.campaign-table th,
.campaign-table td {
  padding: 12px 0.5rem;
  text-align: left;
  font-size: 0.8rem;
  color: #333;
}

.campaign-table th:first-child,
.campaign-table td:first-child {
  width: 130px;
}

.campaign-table th {
  background-color: #4caf50;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.campaign-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.campaign-table tr:hover {
  background-color: #f1f1f1;
}

.campaign-table td {
  border-bottom: 1px solid #e0e0e0;
}

.campaign-table td:nth-child(4),
.campaign-table td:nth-child(5),
.campaign-table td:nth-child(6),
.campaign-table td:nth-child(7) {
  text-align: right;
}

.campaign-table td,
.campaign-table th {
  border-right: 1px solid #e0e0e0;
}

.campaign-table td:last-child,
.campaign-table th:last-child {
  border-right: none;
}
</style>
