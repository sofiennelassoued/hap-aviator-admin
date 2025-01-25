<template>
  <!-- Sidebar Start -->
  <aside class="left-sidebar">
    <!-- Sidebar scroll-->
    <div>
      <div class="brand-logo d-flex align-items-center justify-content-between">
        <router-link to="/">
          <div class="d-flex">
            <a class="text-nowrap logo-img">
              <iconify-icon icon="solar:bell-linear" class="fs-6"></iconify-icon>
            </a>
            <div class="mx-2">
              Hap Pilot Admin
            </div>
          </div>
        </router-link>
        <div class=" close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
          <i class="ti ti-x fs-8"></i>
        </div>
      </div>
      <!-- Sidebar navigation-->
      <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
        <ul id="sidebarnav">
          <li class="nav-small-cap">
            <iconify-icon icon="solar:menu-dots-linear" class="nav-small-cap-icon fs-4"></iconify-icon>
            <span class="hide-menu">Entities</span>
          </li>
          <router-link to="/offers">
            <li class="sidebar-item">
              <a class="sidebar-link" :class="route.path === '/offers' ? 'active' : ''"
                aria-expanded="false">
                <iconify-icon icon="solar:gift-bold"></iconify-icon>
                <span class="hide-menu">Offers</span>
              </a>
            </li>
          </router-link>
          <router-link to="/advertisements">
            <li class="sidebar-item">
              <a class="sidebar-link" :class="route.path === '/advertisements' ? 'active' : ''" aria-expanded="false">
                <iconify-icon icon="solar:gallery-round-bold"></iconify-icon>
                <span class="hide-menu">Advertisements</span>
              </a>
            </li>
          </router-link>
          <router-link to="/gifts">
            <li class="sidebar-item">
              <a class="sidebar-link" :class="route.path === '/gifts' ? 'active' : ''"
                aria-expanded="false">
                <iconify-icon icon="solar:tag-bold"></iconify-icon>
                <span class="hide-menu">Gifts</span>
              </a>
            </li>
          </router-link>
          <li>
            <span class="sidebar-divider lg"></span>
          </li>
          <li class="nav-small-cap">
            <iconify-icon icon="solar:menu-dots-linear" class="nav-small-cap-icon fs-4"></iconify-icon>
            <span class="hide-menu">Accounts</span>
          </li>
          <router-link to="/advertisers">
            <li class="sidebar-item">
              <a class="sidebar-link" :class="route.path === '/advertisers' ? 'active' : ''" aria-expanded="false">
                <iconify-icon icon="solar:shield-user-bold-duotone"></iconify-icon>
                <span class="hide-menu">Advertisers</span>
              </a>
            </li>
          </router-link>
          <router-link to="/partners">
            <li class="sidebar-item">
              <a class="sidebar-link" :class="route.path === '/partners' ? 'active' : ''" aria-expanded="false">
                <iconify-icon icon="solar:user-circle-bold-duotone"></iconify-icon>
                <span class="hide-menu">Partners</span>
              </a>
            </li>
          </router-link>
          <router-link to="/users">
            <li class="sidebar-item">
              <a class="sidebar-link" :class="route.path === '/users' ? 'active' : ''" aria-expanded="false">
                <iconify-icon icon="solar:user-bold"></iconify-icon>
                <span class="hide-menu">Users</span>
              </a>
            </li>
          </router-link>
        </ul>
      </nav>
      <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
  </aside>
  <!--  Sidebar End -->
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
