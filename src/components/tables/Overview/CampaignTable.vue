<template>
  <div class="campaign-table overview">
    <table>
      <thead>
        <tr>
          <th>Campaign Name</th>
          <th>Status</th>
          <th>Impressions</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(campaign, index) in campaigns" :key="index">
          <td>{{ campaign.name }}</td>
          <td>{{ campaign.status }}</td>
          <td>{{ campaign.impressions }}</td>
          <td>{{ campaign.clicks }}</td>
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
          status: "Active",
          impressions: 10000,
          clicks: 500,
        },
        {
          name: "Winter Clearance",
          status: "Paused",
          impressions: 8000,
          clicks: 300,
        },
        {
          name: "Summer Launch",
          status: "Active",
          impressions: 15000,
          clicks: 800,
        },
        {
          name: "Back-to-School",
          status: "Active",
          impressions: 12000,
          clicks: 600,
        },
        {
          name: "Holiday Shopper",
          status: "Paused",
          impressions: 5000,
          clicks: 200,
        },
        {
          name: "Black Friday",
          status: "Paused",
          impressions: 5000,
          clicks: 200,
        },
      ],
    };
  },
};
</script>

<style scoped>
.campaign-table.overview table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  border: 1px solid #eee;
}

.campaign-table.overview th,
.campaign-table.overview td {
  padding: 10px;
  text-align: left;
  font-size: 0.8rem;
  color: #333;
}

.campaign-table.overview th {
  background-color: #4caf50;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.campaign-table.overview tr:nth-child(even) {
  background-color: #f9f9f9;
}

.campaign-table.overview tr:hover {
  background-color: #f1f1f1;
}

.campaign-table.overview td {
  border-bottom: 1px solid #e0e0e0;
}

.campaign-table.overview td:nth-child(3),
.campaign-table.overview td:nth-child(4) {
  text-align: right;
}
</style>
