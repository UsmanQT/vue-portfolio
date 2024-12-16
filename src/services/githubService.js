import axios from 'axios';

// Replace with your GitHub username
const GITHUB_USERNAME = 'UsmanQT'; 

const githubService = {
  getRepositories() {
    const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
    return axios.get(url)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching repositories', error);
        throw error;
      });
  }
};

export default githubService;
