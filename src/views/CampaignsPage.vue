<template>
  <div class="chart-container">
    <TableCard cardTitle="Current Campaigns">
      <CampaignTable />
    </TableCard>
  </div>
</template>

<script>
import CampaignTable from "@/components/tables/Campaigns/CampaignTable.vue";
import TableCard from "@/components/ui/TableCard.vue";

export default {
  components: {
    CampaignTable,
    TableCard,
  },
};
</script>
