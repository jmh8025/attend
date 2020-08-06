<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon 
        @click.stop="drawer = !drawer" 
      />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">출결시스템</span>
      </v-toolbar-title>
    
      <v-spacer></v-spacer>
      <span>{{name}}{{test}}님 환영합니다</span>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    
   
    data: () => ({
      dialog: false,
      drawer: 0,
      items: [
        { icon: 'mdi-qrcode', text: 'QR코드 검색' },
        { icon: 'mdi-history', text: '최근검색' },
        { icon: 'mdi-bulletin-board', text: '공지사항' },
      ],
    }),
    computed : {
      name(){
        return this.$store.getters.userInfo('eval_nm');
      },
      test(){
        return this.$store.getters.roomState;
      }
    }
  }
</script>
<style scoped>
.bd-right{
  border-right: solid;
}
</style>