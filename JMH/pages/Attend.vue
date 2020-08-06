<template>
    <v-container
        class="fill-height"
         align="center"
          justify="center"
        fluid
      >
        <v-col cols="6" class=" bd-right fill-height ">
         <v-card >
          <v-list>
            <template  v-for="(profile,index) in profileInfo" >
            
              <CustomList
              :key="index"
              :icon="`mdi-message-text`"
              :content="profile.value"
              />
              <v-divider
                :key="index"
                inset
              />
            </template>
          </v-list>
  
        
        </v-card>
        </v-col>
          <v-col cols="6">
               <v-row
          align="center"
          justify="center"
        >
        </v-row>
        </v-col>
      
      </v-container>
</template>
<script>
import CustomList from '../components/CustomList'
export default {
    data(){
      return{
        test : {},
      }
    },
    layout : 'main',
    components : {
      CustomList
    },
     computed : {
      user(){
        return this.$store.getters.userInfo;
      },
      profileInfo(){
        return this.$store.getters.profileInfo
      }
    },
//    asyncComputed : {
//      profileInfo : {
//        get(){
//          return this.$store.dispatch('roomStateChange')
//                .then(this.$store.getters.profileInfo);
//        }
//      }
//    }
    
}
</script>