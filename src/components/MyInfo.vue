<template>
    <v-container>
      <v-col class="mx-auto text-left" :style=" { color: $vuetify.theme.themes.light.primary, textDecoration: 'none' }">
        <h1>{{ userInfo.fullName }}</h1>
        <p>Master's In Computer Science @ GVSU | SDE @ Applied Computing Institute</p>
        
        <v-row class="mt-5 mx-auto">
          <!-- FontAwesome Icon -->
          <p>{{ userInfo.location }}</p>
        </v-row>
  
        <v-row class="mx-auto" align="center">
            <font-awesome-icon :icon="['fas', 'envelope']" class="pr-2" color="black"/>
          <a :href="`mailto:${userInfo.email}`" :style=" { color: $vuetify.theme.themes.light.primary, textDecoration: 'none' }">{{ userInfo.email }}</a>
        </v-row>
  
        <v-row class="mx-auto" align="center">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="pr-2" color="black"/>
          <a :href="userInfo.linkedInLink" :style=" { color: $vuetify.theme.themes.light.primary, textDecoration: 'none'}">in/usmanq</a>
        </v-row>
  
        <v-row class="mx-auto" align="center">
            <font-awesome-icon :icon="['fab', 'github']" class="pr-2" color="black"/>
          <a :href="userInfo.githubLink" :style=" { color: $vuetify.theme.themes.light.primary, textDecoration: 'none' }">UsmanQT</a>
        </v-row>
      </v-col>
    </v-container>
</template>
  
  <script>
  import { userBasicInfo } from '@/constants';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
  import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


  library.add(faFontAwesome, faGithub, faLinkedin, faEnvelope);
  
  export default {
    components: {
      FontAwesomeIcon // Registering the FontAwesomeIcon component
    },
    data() {
      return {
        userInfo: userBasicInfo
      };
    },
  };
  </script>
  