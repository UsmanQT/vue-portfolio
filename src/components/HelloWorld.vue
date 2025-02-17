<template>
  <div class="skills-scroller-container">
    <div class="skills-scroller">
      <div v-for="(column, index) in columns" :key="index" class="skills-column">
        <div v-for="(skill, index) in column" :key="index" class="skill-item">
          <img :src="skill.icon" alt="Skill Icon" class="skill-icon" />
          <span class="skill-name">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: 'JavaScript', icon: 'path_to_icon/javascript.svg' },
        { name: 'Vue.js', icon: 'path_to_icon/vuejs.svg' },
        { name: 'React', icon: 'path_to_icon/react.svg' },
        { name: 'Node.js', icon: 'path_to_icon/nodejs.svg' },
        { name: 'Python', icon: 'path_to_icon/python.svg' },
        { name: 'Java', icon: 'path_to_icon/java.svg' },
        { name: 'C++', icon: 'path_to_icon/cplusplus.svg' },
        { name: 'HTML5', icon: 'path_to_icon/html5.svg' },
        { name: 'CSS3', icon: 'path_to_icon/css3.svg' },
        { name: 'SQL', icon: 'path_to_icon/sql.svg' },
        { name: 'Git', icon: 'path_to_icon/git.svg' },
        { name: 'Docker', icon: 'path_to_icon/docker.svg' },
        { name: 'Kubernetes', icon: 'path_to_icon/kubernetes.svg' },
        { name: 'AWS', icon: 'path_to_icon/aws.svg' },
        { name: 'Azure', icon: 'path_to_icon/azure.svg' },
        { name: 'GCP', icon: 'path_to_icon/gcp.svg' },
        { name: 'MongoDB', icon: 'path_to_icon/mongodb.svg' },
        { name: 'PostgreSQL', icon: 'path_to_icon/postgresql.svg' },
        { name: 'MySQL', icon: 'path_to_icon/mysql.svg' },
        { name: 'Swift', icon: 'path_to_icon/swift.svg' },
        { name: 'Kotlin', icon: 'path_to_icon/kotlin.svg' },
        { name: 'C#', icon: 'path_to_icon/csharp.svg' },
        { name: 'PHP', icon: 'path_to_icon/php.svg' },
        { name: 'Ruby', icon: 'path_to_icon/ruby.svg' },
        { name: 'Go', icon: 'path_to_icon/go.svg' },
        { name: 'TypeScript', icon: 'path_to_icon/typescript.svg' },
        { name: 'HTML5', icon: 'path_to_icon/html5.svg' },
        { name: 'CSS3', icon: 'path_to_icon/css3.svg' },
        { name: 'Sass', icon: 'path_to_icon/sass.svg' },
        { name: 'GraphQL', icon: 'path_to_icon/graphql.svg' },
        { name: 'REST API', icon: 'path_to_icon/restapi.svg' },
        { name: 'WebSockets', icon: 'path_to_icon/websockets.svg' },
        { name: 'Linux', icon: 'path_to_icon/linux.svg' },
        { name: 'Bash', icon: 'path_to_icon/bash.svg' },
        { name: 'CI/CD', icon: 'path_to_icon/cicd.svg' },
        { name: 'Jenkins', icon: 'path_to_icon/jenkins.svg' },
        { name: 'Firebase', icon: 'path_to_icon/firebase.svg' },
        { name: 'GraphQL', icon: 'path_to_icon/graphql.svg' },
        { name: 'Redis', icon: 'path_to_icon/redis.svg' },
        { name: 'Elasticsearch', icon: 'path_to_icon/elasticsearch.svg' },
        { name: 'Nginx', icon: 'path_to_icon/nginx.svg' },
        { name: 'Apache', icon: 'path_to_icon/apache.svg' },
        { name: 'Vim', icon: 'path_to_icon/vim.svg' },
        { name: 'IntelliJ', icon: 'path_to_icon/intellij.svg' },
        { name: 'Visual Studio Code', icon: 'path_to_icon/vscode.svg' },
        { name: 'Postman', icon: 'path_to_icon/postman.svg' },
        { name: 'Jira', icon: 'path_to_icon/jira.svg' },
        { name: 'Slack', icon: 'path_to_icon/slack.svg' },
        { name: 'Trello', icon: 'path_to_icon/trello.svg' },
        { name: 'Asana', icon: 'path_to_icon/asana.svg' },
        { name: 'Kanban', icon: 'path_to_icon/kanban.svg' },
        { name: 'Agile', icon: 'path_to_icon/agile.svg' },
        { name: 'Scrum', icon: 'path_to_icon/scrum.svg' },
      ]
    };
  },
  computed: {
    columns() {
      // Split the skills into 5 columns with 10 skills each
      const columnCount = 5;
      const columnSize = Math.ceil(this.skills.length / columnCount);
      return Array.from({ length: columnCount }, (_, index) => {
        return this.skills.slice(index * columnSize, (index + 1) * columnSize);
      });
    }
  }
};
</script>

<style scoped>
.skills-scroller-container {
  width: 100%;
  height: 300px; /* Adjust the height as per your needs */
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
}

.skills-scroller {
  display: flex;
  animation: scrollSkills 20s linear infinite;
  flex-shrink: 0;
}

.skills-column {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}

.skill-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.skill-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.skill-name {
  font-size: 16px;
  color: #333;
}

@keyframes scrollSkills {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
