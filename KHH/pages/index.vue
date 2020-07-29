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
                <v-toolbar-title></v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="login"
                    ref="login"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                    ref="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="LoginClick">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import alert from '@/components/alert.vue'

  export default {
    components: {
      alert
    },
    methods: {
      LoginClick() {
        let resultObj = {
            login: this.login,
            password: this.password
        }
        this.$store.commit('login', resultObj);
        let login_chk = this.$store.state.rv[0].chk;
        if(login_chk == 'idfail') {
          console.log('등록하지 않은 아이디입니다.');
          this.password = "";
          this.$refs.login.focus();
        } else if(login_chk == 'pwfail') {
          console.log('잘못된 비밀번호입니다..');
          this.password = "";
          this.$refs.password.focus();
        } else {
          console.log('로그인 성공!');
        }
      }
    },
    data() {
      return {
        login: '',
        password: ''
      }
    }
  }
</script>