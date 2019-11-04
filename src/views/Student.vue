<template>
  <div id="student">
    <center>
      <br>
      <v-card width="90%" elevation="10">
        <v-card color="primary">
          <br>
          <h1>Student Request Form</h1>
          <br>
        </v-card>
        <hr>
        <br>
        <br>
        <div class="pa-5">
          <form>
            <v-row>
              <v-col>
                <v-text-field outlined label="Firstname" v-model="firstname"/>
              </v-col>
              <v-col>
                <v-text-field outlined label="Lastname" v-model="lastname"/>
              </v-col>
            </v-row>
          </form>
        </div>
      </v-card>
    </center>
  </div>
</template>
<script>
export default {
  name: "student"
};
</script>
