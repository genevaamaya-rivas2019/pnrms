<template>
  <v-app>
    <Header/>
    <div v-if="isLogout">
      <br>
      <br>
      <br>
      <Login v-on:login="login"/>
    </div>
    <div v-else-if="student">
      <v-content>
        <router-view/>
      </v-content>
    </div>
    <div v-else>
      <v-row>
        <v-col>
          <br>
          <br>
          <br>
          <Sidebar/>
        </v-col>
        <v-col cols="9">
          <v-content>
            <router-view/>
          </v-content>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./views/Login";

export default {
  name: "App",

  components: {
    Header,
    Sidebar,
    Login
  },

  data() {
    return {
      isLogout: true,
      student: false
    };
  },
  beforeUpdate() {
    this.routeWatcher = this.$watch(
      function() {
        return this.$route;
      },
      function(route) {
        if (route.name === "login") {
          this.isLogout = true;
        }
      }
    );
  },
  methods: {
    login(username) {
      this.isLogout = false;
      if (username == "student") {
        this.student = true;
        this.$router.push({ name: "student" });
      } else {
        this.$router.push({ path: "/educator/dashboard" });
      }
    },
    logout() {
      this.isLogout = true;
      this.$router.push({ path: "/" });
    }
  }
};
</script>
