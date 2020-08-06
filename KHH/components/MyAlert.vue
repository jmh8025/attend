<template>
  <div>
    <v-alert :type="typeValue">
      {{alertMsg}}
    </v-alert>
  </div>
</template>
<script>
export default {
  props: {
    typeValue : String,
    alertMsg : String,
  }
}
</script>