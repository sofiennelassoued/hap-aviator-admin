<template>
  <!--  Body Wrapper -->
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <div class="body-wrapper-inner">
      <app-sidebar />
      <div class="body-wrapper">
        <app-navbar />
        <div class="container-fluid">
          <router-view />
        </div>
      </div>
      <app-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '../../components/app-navbar/index.vue'
import AppSidebar from '../../components/app-sidebar/index.vue'
import AppFooter from '../../components/app-footer/index.vue'
</script>

<style scoped></style>
