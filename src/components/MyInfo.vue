<template>
  <v-container class="mt-10" style="border: 1px solid black; border-radius: 20px">
    <v-row align="center" justify="center">
      <v-col cols="auto mx-auto mr-10">
        <v-img
          class="round-image"
          src="@/assets/Usman.jpg"
          alt="Icon"
          height="150"
          width="150"
        />
      </v-col>
      <v-col
        class="mx-auto text-left"
        :style="{ color: $vuetify.theme.themes.light.primary, textDecoration: 'none' }"
      >
        <h1>{{ userInfo.fullName }}</h1>
        <p class="mt-2">
          Master's In Computer Science @ GVSU | SDE @ Applied Computing Institute
        </p>

        <v-row class="mt-5 mx-auto" align="center">
          <v-row class="mx-auto" align="center">
            <font-awesome-icon :icon="['fa', 'map-pin']" class="pr-2" color="black" />
            <p>{{ userInfo.location }}</p>
          </v-row>
          <v-btn
            style="width: 200px; height: 50px"
            :href="userInfo.resumeLink"
            target="_blank"
            color="primary"
            class="ml-4 mr-10"
            >Download Resume</v-btn
          >
        </v-row>

        <v-row class="mx-auto" align="center">
          <font-awesome-icon :icon="['fas', 'envelope']" class="pr-2" color="black" />
          <a
            :href="`mailto:${userInfo.email}`"
            :style="{
              color: $vuetify.theme.themes.light.primary,
              textDecoration: 'none',
            }"
            >{{ userInfo.email }}</a
          >
        </v-row>

        <v-row class="mx-auto" align="center" justify="space-around">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="pr-2" color="black" />
          <v-row class="mx-auto" align="center">
            <a
              :href="userInfo.linkedInLink"
              :style="{
                color: $vuetify.theme.themes.light.primary,
                textDecoration: 'none',
              }"
              >in/usmanq</a
            >
          </v-row>
          <v-btn
            style="width: 200px; height: 50px"
            :href="userInfo.resumeLink"
            target="_blank"
            color="primary"
            class="ml-4 mr-10"
            >Book a Call</v-btn
          >
        </v-row>

        <v-row class="mx-auto mb-5" align="center">
          <font-awesome-icon :icon="['fab', 'github']" class="pr-2" color="black" />
          <a
            :href="userInfo.githubLink"
            :style="{
              color: $vuetify.theme.themes.light.primary,
              textDecoration: 'none',
            }"
            >UsmanQT</a
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { userBasicInfo } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

library.add(faFontAwesome, faGithub, faLinkedin, faEnvelope, faMapPin);

export default {
  components: {
    FontAwesomeIcon, // Registering the FontAwesomeIcon component
  },
  data() {
    return {
      userInfo: userBasicInfo,
    };
  },
};
</script>

<style scoped>
.round-image {
  width: 150px; /* Adjust the width as needed */
  height: 150px; /* Adjust the height as needed */
  object-fit: cover; /* Ensures the image is clipped properly without stretching */
  border-radius: 50%; /* Clips the image to a circle */
}
</style>
