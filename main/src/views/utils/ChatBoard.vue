<template>
  <v-app id="inspire">
    <v-app-bar
      app
      extended
    >
        <v-toolbar-title>メッセージ</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card"
            cols="12"
          >
            <v-card>

              <v-list lines="two">
                <v-list-subheader>{{ card }}</v-list-subheader>
                  <v-list-item v-for="n in 6" :key="n">
                    <template v-slot:prepend>
                      <v-avatar color="grey-darken-1"></v-avatar>
                    </template>

                    <v-list-item-subtitle class="message">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-textarea
        v-model="body"
        prepend-inner-icon="mdi-comment"
        class="mx-2"
        label="メッセージを送信する"
        rows="3"
        auto-grow
      ></v-textarea>
      <v-btn
        class="me-4"
        type="submit"
        @click="submit"
      >
        submit
      </v-btn>

      <v-btn @click="handleReset">
        clear
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    created () {
      this.user_id = this.$route.query.user_id;
      console.log("user_id", this.user_id);
    },
    data: () => ({
      body: '',
      user_id: '',
      cards: ['Today'],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],
    }),
    methods: {
      submit() {
        console.log(this.body)
      },
      handleReset() {
        console.log("clear log")
      }
    }
  }
</script>

<style scoped>
.message {
  text-align: left;
}
</style>