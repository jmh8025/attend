<template>
  <v-app id="inspire">
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
                  <v-toolbar-title>Login form</v-toolbar-title>
                 
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Login"
                      name="login"
                      prepend-icon="mdi-account"
                      type="text"
                      v-model="id"
                    ></v-text-field>
  
                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      v-model="pwd"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="login" color="primary">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
    <BasicAlert 
      ref="basicAlert"
      :text="returnMsg" 
      :timeoutValue="timeoutValue"
      :colorValue="colorValue" />
  </v-app>
  
</template>

<script>
import BasicAlert from '../components/BasicAlert'
export default {
  components : {
    BasicAlert
  },
  data(){
    return{
      id : '',
      pwd : '',
      returnMsg: null,
      snackbar : false,
      colorValue : 'primary',
      timeoutValue : 2000,
    }
  },
  methods : {
    async login () {
      try {
        await this.$store.dispatch('login', {
          id: this.id,
          pw: this.pwd
        }).then(() => this.redirect())
      } catch (e) {
        this.snackBar(e.message);
      }
    },
    redirect () {
      this.$router.push('/Attend')
    },
    snackBar(msg){
      this.returnMsg = msg;
      this.colorValue = 'error';
      this.timeoutValue = 3000;
      this.$refs.basicAlert.showSnackBar();
    }
  }
}
</script>
