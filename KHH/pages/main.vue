<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row xs="12" align="center" justify="center">
          <v-col xs="5">
            상세페이지
          </v-col>
          <v-col xs="7">
            <client-only>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="10"
              class="elevation-1"
              @click:row="rowClick"
            ></v-data-table>
            </client-only> 
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ authUser }} 환영합니다.</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    computed: {
      headers() {
        return this.$store.state.headers;
      },
      desserts() {
        return this.$store.state.student;
      },
      authUser() {
        return this.$store.state.authUser.eval_nm;
      } 

    },
    middleware: 'auth',
    
  }
</script>

