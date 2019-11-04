<template>
  <div>
    <v-app-bar fixed app color="primary">
      <v-toolbar-title>
        <v-btn text>
          <v-icon>mdi-home</v-icon>
          <span>PN Request Management System</span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="loggedIn">
        <v-btn text color="black" v-on:click="$emit('logout')">
          <span class="mr-2">Log-out</span>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
    name: 'header',
    data(){
        return{
            loggedIn: false
        }
    }
}
</script>
