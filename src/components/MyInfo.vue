<template>
    <v-container>
      <v-col class="mx-auto text-center">
        <h1>{{ userInfo.fullName }}</h1>
        <p>Master's In Computer Science @ GVSU | SDE @ Applied Computing Institute</p>
        
        <v-row class="mt-5" justify="center">
          <!-- FontAwesome Icon -->
          <p>{{ userInfo.location }}</p>
        </v-row>
  
        <v-row justify="center">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          <a :href="`mailto:${userInfo.email}`">{{ userInfo.email }}</a>
        </v-row>
  
        <v-row justify="center">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          <a :href="userInfo.linkedInLink">in/usmanq</a>
        </v-row>
  
        <v-row justify="center">
            <font-awesome-icon :icon="['fab', 'github']" />
          <a :href="userInfo.githubLink">UsmanQT</a>
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
    }
  };
  </script>
  