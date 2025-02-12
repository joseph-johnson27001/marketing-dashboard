import { createRouter, createWebHistory } from "vue-router";

import Overview from "@/views/OverviewPage.vue";
import Campaigns from "@/views/CampaignsPage.vue";
import Traffic from "@/views/TrafficPage.vue";
import Leads from "@/views/LeadsPage.vue";
import SEO from "@/views/SEOPage.vue";
import Social from "@/views/SocialPage.vue";
import Reports from "@/views/ReportsPage.vue";

const routes = [
  {
    path: "/",
    name: "Overview",
    component: Overview,
  },
  {
    path: "/campaigns",
    name: "Campaigns",
    component: Campaigns,
  },
  {
    path: "/traffic",
    name: "Traffic",
    component: Traffic,
  },
  {
    path: "/leads",
    name: "Leads",
    component: Leads,
  },
  {
    path: "/seo",
    name: "SEO",
    component: SEO,
  },
  {
    path: "/social",
    name: "Social",
    component: Social,
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
