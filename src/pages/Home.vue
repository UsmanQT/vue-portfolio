<template>
    <v-container>
        <v-col class="mx-auto my-15 text-center">
            <p >Software Developer & Consultant</p>
            <p class="my-5">I am a software Developer</p>
        </v-col>
    </v-container>
    <v-container>
      <v-row>
        <v-col v-for="repo in repositories" :key="repo.id" cols="12" md="4">
          <v-card>
            <v-card-title>{{ repo.name }}</v-card-title>
            <v-card-subtitle>
              <v-btn :href="repo.html_url" target="_blank" color="primary">
                View Repository
              </v-btn>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
  
  <script>
  import githubService from '@/services/githubService';
  
  export default {
    data() {
      return {
        repositories: [], // Holds the fetched repositories
      };
    },
    mounted() {
      // Fetch repositories when the component is mounted
      githubService.getRepositories()
        .then(repositories => {
          this.repositories = repositories; // Store repositories in the data
        })
        .catch(error => {
          console.error('Error loading repositories:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles for the repositories here */
  </style>
  