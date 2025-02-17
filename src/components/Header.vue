<template>
    <v-container>
      <v-row align="center" justify="start">
        <!-- First Column: Positioned to the extreme left -->
        <v-col cols="auto">
          <v-img class="round-image" src="@/assets/Usman.jpg" alt="Icon" height="150" width="150"/>
        </v-col>
  
        <!-- Spacer Column: This takes the remaining space -->
        <v-col class="d-flex justify-center">
          <v-row justify="center">
            <router-link to="/" class="mx-2">
              <v-btn rounded="lg">
                Home
              </v-btn>
            </router-link>
            <router-link to="/demo" class="mx-2">
              <v-btn rounded="lg">
                Project Demo
              </v-btn>
            </router-link>
            <router-link to="/chat" class="mx-2">
              <v-btn rounded="lg">
                Say Hello
              </v-btn>
            </router-link>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>
  
  

<style scoped>
.round-image {
  width: 150px; /* Adjust the width as needed */
  height: 150px; /* Adjust the height as needed */
  object-fit: cover; /* Ensures the image is clipped properly without stretching */
  border-radius: 50%; /* Clips the image to a circle */
}
</style>