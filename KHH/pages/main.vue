<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title>Vuetify 출석점검</v-toolbar-title>
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
      <span class="white--text">&copy; {{ authUser }}님 환영합니다.</span>
    </v-footer>
  </v-app>
</template>


<script>
  export default {
    components: {

    },
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
        let eval_id = this.$store.state.authUser.eval_id;
        let room = this.$store.state.room.filter(rm => { return rm.eval_id[0] == eval_id || rm.eval_id[1] == eval_id});
        let room_no = room[0].room_no;
        let stdObject = this.$store.state.student.filter(std => { return std.room_no == room_no});
        
        for (let index = 0; index < stdObject.length; index++) {
          stdObject[index].no = index + 1;

          if(stdObject[index].photo == "") {
            stdObject[index].card_yn = 'N'
          } else {
            stdObject[index].card_yn = 'Y'
          };

          if(stdObject[index].memo == "") {
            stdObject[index].memo_yn = 'N'
          } else {
            stdObject[index].memo_yn = 'Y'
          }
        }
        return stdObject;
      },
      authUser() {
        let eval_nm = this.$store.state.authUser.eval_nm;
        let comment = this.$store.state.authUser.comment;
        let authUser = comment + ' ' + eval_nm;
        return authUser;
      } 
    },
    methods: {
      rowClick(items) {
        
      }
    },
    middleware: 'auth',
  }
</script>

