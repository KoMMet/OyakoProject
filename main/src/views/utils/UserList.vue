<template>
  <v-app id="inspire">
    <v-app-bar
      app
      extended
    >
        <v-toolbar-title>ユーザー一覧</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
    </v-app-bar>

    <v-main v-layout-top=0>
      <v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <router-link :to="{ path: '/chat', query: { user_id: n}}">
                <v-avatar color="surface-variant" size="64"></v-avatar>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    //
  }
</script>