<template>
  <div class="text-center">
    <v-snackbar
      v-model="snackbar"
      :timeout="timeoutValue"
      :color="colorValue"
      :label="colorValue"
      :value="colorValue"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>
<script>
  export default {
    props : {
        text : String,
        colorValue : String,
        timeoutValue : Number,
    },
    data(){
      return{
        snackbar : false,
      }
    },
    methods :{
      showSnackBar(){
        this.snackbar = true;
      }
    }    
  }
</script>