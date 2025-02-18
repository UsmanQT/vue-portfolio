<template>
  <v-container>
    <v-row align="center" justify="start">
      <v-col class="d-flex justify-center">
        <v-row justify="center">
          <router-link to="/" class="mx-2">
            <v-btn rounded="lg"> Home </v-btn>
          </router-link>
          <router-link to="/demo" class="mx-2">
            <v-btn rounded="lg"> Project Demo </v-btn>
          </router-link>
          <router-link to="/chat" class="mx-2">
            <v-btn rounded="lg"> Say Hello </v-btn>
          </router-link>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
