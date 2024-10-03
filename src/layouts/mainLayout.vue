<template>
  <div>
    <tpHeaderVue></tpHeaderVue>
    <main>
      <router-view />
    </main>
    <tpFooterVue></tpFooterVue>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import tpHeaderVue from '../components/layouts/tpHeader.vue'
import tpFooterVue from '../components/layouts/tpFooter.vue'

export default {
  name: 'MyPage',
  components: {
    tpHeaderVue,
    tpFooterVue
  },
  data() {
    return {}
  }
}
</script>
  <style scoped>
/* Style du layout */
</style>
  