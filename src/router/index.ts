import HomeView from "@/views/home/index.vue";
import TestView from "@/views/test/index.vue";
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
// Offer Validations
import OfferValidationDetailsView from "@/views/offer-validations/details/index.vue";
import OfferValidationsView from "@/views/offer-validations/home/index.vue";
// Categories
import CategoriesDetailsView from "@/views/categories/details/index.vue";
import CategoriesView from "@/views/categories/home/index.vue";
import NewCategoryView from "@/views/categories/new/index.vue";
// Interests
import InterestsDetailsView from "@/views/interests/details/index.vue";
import InterestsView from "@/views/interests/home/index.vue";
import NewInterestView from "@/views/interests/new/index.vue";
// Countries
import CountriesDetailsView from "@/views/countries/details/index.vue";
import CountriesView from "@/views/countries/home/index.vue";
import NewCountryView from "@/views/countries/new/index.vue";
// Regions
import RegionDetailsView from "@/views/countries/details/regions/details/index.vue";
import RegionsView from "@/views/countries/details/regions/home/index.vue";
import NewRegionView from "@/views/countries/details/regions/new/index.vue";
// States
import StateDetailsView from "@/views/countries/details/states/details/index.vue";
import StatesView from "@/views/countries/details/states/home/index.vue";
import NewStateView from "@/views/countries/details/states/new/index.vue";
// Amenities
import AmenityDetailsView from "@/views/amenities/details/index.vue";
import AmenitiesView from "@/views/amenities/home/index.vue";
import NewAmenityView from "@/views/amenities/new/index.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/test",
      name: "test",
      component: TestView,
    },
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
      name: "offer-details",
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
      name: "gift-details",
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
      name: "advertiser-details",
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
      name: "partner-details",
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
      name: "user-details",
      component: UsersDetailsView,
    },
    // Offer Validations
    {
      path: "/offer-validations",
      name: "offer-validations",
      component: OfferValidationsView,
    },
    {
      path: "/offer-validations/:id",
      name: "offer-validation-details",
      component: OfferValidationDetailsView,
    },
    // Categories
    {
      path: "/categories",
      name: "categories",
      component: CategoriesView,
    },
    {
      path: "/categories/new",
      name: "new-category",
      component: NewCategoryView,
    },
    {
      path: "/categories/:id",
      name: "category-details",
      component: CategoriesDetailsView,
    },
    // Interests
    {
      path: "/interests",
      name: "interests",
      component: InterestsView,
    },
    {
      path: "/interests/new",
      name: "new-interest",
      component: NewInterestView,
    },
    {
      path: "/interests/:id",
      name: "interest-details",
      component: InterestsDetailsView,
    },
    // Countries
    {
      path: "/countries",
      name: "countries",
      component: CountriesView,
    },
    {
      path: "/countries/new",
      name: "new-country",
      component: NewCountryView,
    },
    {
      path: "/countries/:id",
      name: "country-details",
      component: CountriesDetailsView,
    },
    // Regions
    {
      path: "/countries/:id/regions",
      name: "regions",
      component: RegionsView,
    },
    {
      path: "/countries/:id/regions/new",
      name: "new-region",
      component: NewRegionView,
    },
    {
      path: "/countries/:countryId/regions/:regionId",
      name: "region-details",
      component: RegionDetailsView,
    },
    // States
    {
      path: "/countries/:id/states",
      name: "states",
      component: StatesView,
    },
    {
      path: "/countries/:id/states/new",
      name: "new-state",
      component: NewStateView,
    },
    {
      path: "/countries/:countryId/states/:stateId",
      name: "state-details",
      component: StateDetailsView,
    },
    // Amenities
    {
      path: "/amenities",
      name: "amenities",
      component: AmenitiesView,
    },
    {
      path: "/amenities/new",
      name: "new-amenity",
      component: NewAmenityView,
    },
    {
      path: "/amenities/:id",
      name: "amenity-details",
      component: AmenityDetailsView,
    },
  ],
});
export default router;
