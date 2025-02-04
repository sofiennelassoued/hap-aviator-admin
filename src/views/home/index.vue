<template>
  <div>
    <h3>
      Quick links
    </h3>
    <div class="my-3" />
    <div class="card">
      <div class="card-body">
        <p>Entities</p>
        <div class="row">
          <div class="col-4">
            <h6>Offers</h6>
            <div>
              <router-link to="/offers">View</router-link>
            </div>
          </div>
          <div class="col-4">
            <h6>Advertisements</h6>
            <div>
              <router-link to="/advertisements">View</router-link>
            </div>
          </div>
          <div class="col-4">
            <h6>Gifts</h6>
            <div>
              <router-link to="/gifts">View</router-link>
            </div>
            <div>
              <router-link to="/gifts/new">Create</router-link>
            </div>
          </div>
          <div class="col-4">
            <h6>Offer validations</h6>
            <div>
              <router-link to="/offer-validations">View</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-5" />
    <div class="card">
      <div class="card-body">
        <div class="row">
          <p>Accounts</p>
          <div class="col-4">
            <h6>Advertisers</h6>
            <div>
              <router-link to="/advertisers">View</router-link>
            </div>
            <div>
              <router-link to="/advertisers/new">Create</router-link>
            </div>
          </div>
          <div class="col-4">
            <h6>Partners</h6>
            <div>
              <router-link to="/partners">View</router-link>
            </div>
            <div>
              <router-link to="/partners/new">Create</router-link>
            </div>
          </div>
          <div class="col-4">
            <h6>Users</h6>
            <div>
              <router-link to="/users">View</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-5" />
    <div class="card">
      <div class="card-body">
        <div class="row">
          <p>Miscs</p>
          <div class="col-4">
            <h6>Categories</h6>
            <div>
              <router-link to="/categories">View</router-link>
            </div>
            <div>
              <router-link to="/categories/new">Create</router-link>
            </div>
          </div>
          <div class="col-4">
            <h6>Countries</h6>
            <div>
              <router-link to="/countries">View</router-link>
            </div>
            <div>
              <router-link to="/countries/new">Create</router-link>
            </div>
          </div>
          <div class="col-4">
            <h6>Regions</h6>
            <div>
              <router-link to="/countries">View</router-link>
            </div>
            <div>
              <router-link to="/countries/new">Create</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="css" scoped></style>
