<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>로그인</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="id"
                    name="id"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="id"
                    ref="id"
                  ></v-text-field>

                  <v-text-field
                    id="pw"
                    label="pw"
                    name="pw"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="pw"
                    ref="pw"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-snackbar
                :timeout="timeout"
                v-model="snackbar"
              >
                {{alertMsg }}
              </v-snackbar>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">로그인</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>

  export default {
    data() {
      return {
        id: '',
        pw: '',
        alertMsg: '',
        timeout: 2000,
        snackbar: false
      }
    },
    methods: {
     async login () {
      try {
        await this.$store.dispatch('login', {
          id: this.id,
          pw: this.pw
        }).then(() => this.redirect())
      } catch (e) {
        this.alertMsg = e.message;
        this.snackbar = 'true';
        this.timeout = 3000;
      }
    },
    redirect () {
      this.$router.push('/main')
    },
  },
}
</script>