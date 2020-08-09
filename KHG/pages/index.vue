<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">출석위원 로그인</div>
        <v-list-item-title class="headline mb-1">
          <label for="user_id">아이디</label>
          <input type="text" name="user_id" id="user_id">
          <br/>
          <label for="user_id">패스워드</label>
          <input type="text" name="user_password" id="user_password">
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn text @click="login()">로그인</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  components : {
  },
  data(){
    return{
      user_id : '',
      user_password : '',
    }
  },
  methods : {
    async login() {
      try {
        await this.$store.dispatch('login', {
          id: this.user_id,
          pw: this.user_password
        }).then(() => this.redirect())
      } catch (e) {
        alert(e.message);
      }
    },
    redirect () {
      this.$router.push('/Attend')
    }
  }
}
</script>

<style>
</style>
