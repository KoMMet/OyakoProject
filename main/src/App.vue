<template>
  <v-app>
    <v-main>
      <MainFrame/>
    </v-main>
  </v-app>
</template>

<script>
import MainFrame from './components/MainFrame.vue'

export default {
  name: 'App',
  
  // コンポーネント呼び出し
  components: {
    MainFrame
  },

  data: () => ({
    //
  }),
}
</script>
