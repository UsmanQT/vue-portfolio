<template>
    <MyInfo/>
    <v-container>
      <v-row v-if="loading">
        <v-col cols="12" class="text-center">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-col>
      </v-row>
      <v-col v-else>
        <v-row align="center" justify="center">
            <h1>My top 5 GitHub Repositories</h1>
        </v-row>
        <v-row>
            <v-col v-for="repo in repositories" :key="repo.id" cols="12" md="4">
                <v-card>
                    <v-card-title>{{ repo.name }}</v-card-title>
                    <v-card-subtitle>
                    <v-btn :href="repo.html_url" target="_blank" color="primary">
                        View Repository
                    </v-btn>
                    </v-card-subtitle>
                    <v-card-text>
                    <p>Commits: {{ repo.commitCount }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
      </v-col>
    </v-container>
</template>
  
<script>
import githubService from '@/services/githubService';
import MyInfo from '@/components/MyInfo.vue';

export default {
data() {
    return {
    repositories: [], // Holds the fetched repositories
    loading: true, // Show loading state while fetching
    };
},
mounted() {
    githubService.getRepositories()
    .then(repositories => {
        this.repositories = repositories;
        this.loading = false; // Hide loading state once data is fetched
    })
    .catch(error => {
        console.error('Error loading repositories:', error);
        this.loading = false; // Hide loading state on error
    });
}
};
</script>
