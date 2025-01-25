import HomeView from "@/views/home/index.vue";
// Offers
import OffersDetailsView from "@/views/offers/details/index.vue";
import OffersView from "@/views/offers/home/index.vue";
import NewOfferView from "@/views/offers/new/index.vue";
// Advertisements
import AdvertisementsDetailsView from "@/views/advertisements/details/index.vue";
import AdvertisementsView from "@/views/advertisements/home/index.vue";
import NewAdvertisementView from "@/views/advertisements/new/index.vue";
// Gifts
import GiftsDetailsView from "@/views/gifts/details/index.vue";
import GiftsView from "@/views/gifts/home/index.vue";
import NewGiftView from "@/views/gifts/new/index.vue";
// Partners
import PartnersDetailsView from "@/views/partners/details/index.vue";
import PartnersView from "@/views/partners/home/index.vue";
import NewPartnerView from "@/views/partners/new/index.vue";
// Advertisers
import AdvertisersDetailsView from "@/views/advertisers/details/index.vue";
import AdvertisersView from "@/views/advertisers/home/index.vue";
import NewAdvertiserView from "@/views/advertisers/new/index.vue";
// Users
import UsersDetailsView from "@/views/users/details/index.vue";
import UsersView from "@/views/users/home/index.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // Advertisements
    {
      path: "/advertisements",
      name: "advertisements",
      component: AdvertisementsView,
    },
    {
      path: "/advertisements/new",
      name: "new-advertisement",
      component: NewAdvertisementView,
    },
    {
      path: "/advertisements/:id",
      name: "advertisement-details",
      component: AdvertisementsDetailsView,
    },
    // Offers
    {
      path: "/offers",
      name: "offers",
      component: OffersView,
    },
    {
      path: "/offers/new",
      name: "new-offer",
      component: NewOfferView,
    },
    {
      path: "/offers/:id",
      name: "offers-details",
      component: OffersDetailsView,
    },
    // Gifts
    {
      path: "/gifts",
      name: "gifts",
      component: GiftsView,
    },
    {
      path: "/gifts/new",
      name: "new-gift",
      component: NewGiftView,
    },
    {
      path: "/gifts/:id",
      name: "gifts-details",
      component: GiftsDetailsView,
    },
    // Advertisers
    {
      path: "/advertisers",
      name: "advertisers",
      component: AdvertisersView,
    },
    {
      path: "/advertisers/new",
      name: "new-advertiser",
      component: NewAdvertiserView,
    },
    {
      path: "/advertisers/:id",
      name: "advertisers-details",
      component: AdvertisersDetailsView,
    },
    // Partners
    {
      path: "/partners",
      name: "partners",
      component: PartnersView,
    },
    {
      path: "/partners/new",
      name: "new-partner",
      component: NewPartnerView,
    },
    {
      path: "/partners/:id",
      name: "partners-details",
      component: PartnersDetailsView,
    },
    // Users
    {
      path: "/users",
      name: "users",
      component: UsersView,
    },
    {
      path: "/users/:id",
      name: "users-details",
      component: UsersDetailsView,
    }
  ],
});

export default router;
