import axios from 'axios';

// Replace with your GitHub username
const GITHUB_USERNAME = 'UsmanQT'; 

const githubService = {
    getRepositories() {
        const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
        return axios.get(url)
          .then(async response => {
            const repositories = response.data;
    
            // Fetch the commits count for each repository
            for (let repo of repositories) {
              const commitsUrl = `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits`;
              const commitsResponse = await axios.get(commitsUrl);
              repo.commitCount = commitsResponse.data.length; // Add the commit count to the repo object
            }
    
            // Sort the repositories by commit count (descending)
            repositories.sort((a, b) => b.commitCount - a.commitCount);
    
            // Return the top 5 repositories
            return repositories.slice(0, 5);
          })
          .catch(error => {
            console.error('Error fetching repositories:', error);
            throw error;
          });
      }
};

export default githubService;
