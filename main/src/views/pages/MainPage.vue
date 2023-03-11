<template>
  <v-app id="inspire">
    <v-app-bar
      class="px-3"
      color="white"
      flat
      density="compact"
    >
      <v-avatar
        color="grey-darken-1"
        size="32"
      ></v-avatar>

      <v-spacer></v-spacer>

      <v-tabs
        centered
        color="grey-darken-2"
      >
        <v-tab
          v-for="[icon, title, link] in links"
          :key="icon"
          :title="title"
          :to="link"
        >
          <v-icon>{{ icon }}</v-icon>{{ title }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

        <v-tab
          to="/login"
        >
          logout
        </v-tab>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        ['mdi-home', 'home', '/'],
        ['', 'Dashboard', '/'],
        ['','Community','/community'],
        ['','Famiry_Tree','/famiryTree'],
        ['','Announce','/'],
      ]
    }),
  }
</script>