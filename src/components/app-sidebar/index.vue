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
              Happipi
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
            <span class="hide-menu">Home</span>
          </li>
          <router-link to="/">
            <li class="sidebar-item">
              <a class="sidebar-link" :class="!route.query.status && route.path !== '/new' ? 'active' : ''"
                aria-expanded="false">
                <iconify-icon icon="solar:play-bold"></iconify-icon>
                <span class="hide-menu">Live</span>
              </a>
            </li>
          </router-link>
          <router-link to="/?status=paused">
            <li class="sidebar-item">
              <a class="sidebar-link" :class="route.query.status === 'paused' ? 'active' : ''" aria-expanded="false">
                <iconify-icon icon="solar:pause-bold"></iconify-icon>
                <span class="hide-menu">Paused</span>
              </a>
            </li>
          </router-link>
          <router-link to="/new">
            <li class="sidebar-item">
              <a class="sidebar-link" :class="route.path === '/new' ? 'active' : ''" aria-expanded="false">
                <iconify-icon icon="solar:pen-2-bold"></iconify-icon>
                <span class="hide-menu">Create</span>
              </a>
            </li>
          </router-link>
          <li>
            <span class="sidebar-divider lg"></span>
          </li>
          <li class="nav-small-cap">
            <iconify-icon icon="solar:menu-dots-linear" class="nav-small-cap-icon fs-4"></iconify-icon>
            <span class="hide-menu">Requires attention</span>
          </li>
          <router-link to="/?status=draft">
            <li class="sidebar-item">
              <a class="sidebar-link" :class="route.query.status === 'draft' ? 'active' : ''" aria-expanded="false">
                <iconify-icon icon="solar:clapperboard-edit-bold"></iconify-icon>
                <span class="hide-menu">Draft</span>
              </a>
            </li>
          </router-link>
          <router-link to="/?status=pending">
            <li class="sidebar-item">
              <a class="sidebar-link" :class="route.query.status === 'pending' ? 'active' : ''" aria-expanded="false">
                <iconify-icon icon="solar:clock-circle-bold"></iconify-icon>
                <span class="hide-menu">Pending</span>
              </a>
            </li>
          </router-link>
          <router-link to="/?status=rejected">
            <li class="sidebar-item">
              <a class="sidebar-link" :class="route.query.status === 'rejected' ? 'active' : ''" aria-expanded="false">
                <iconify-icon icon="solar:forbidden-circle-bold"></iconify-icon>
                <span class="hide-menu">Rejected</span>
              </a>
            </li>
          </router-link>
          <router-link to="/?status=archived">
            <li class="sidebar-item">
              <a class="sidebar-link" :class="route.query.status === 'archived' ? 'active' : ''" aria-expanded="false">
                <iconify-icon icon="solar:archive-minimalistic-bold"></iconify-icon>
                <span class="hide-menu">Archived</span>
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
