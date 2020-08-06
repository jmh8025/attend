<template>
     <v-list-item>
        <v-list-item-action>
        <v-icon>{{icon}}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
        <v-list-item-title>{{content}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
        <slot></slot>
        </v-list-item-action>
    </v-list-item>
</template>
<script>
export default {
     props : {
        icon : String,
        content : String
    },
}
</script>