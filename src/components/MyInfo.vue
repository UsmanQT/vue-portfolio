<template>
    <v-container>
        <v-col class="mx-auto text-center">
            <h1> {{userInfo.fullName}}</h1>
            <p>Master's In Computer Science @ GVSU | SDE @ Applied Computing Institute</p>
            <v-row class="mt-5" justify="center">
                <p>Icon</p>
                <p>{{ userInfo.location }}</p>
            </v-row>
            <v-row justify="center">
                <p>Icon</p>
                <a :href="userInfo.email">{{ userInfo.email }}</a>
            </v-row>
            <v-row justify="center">
                <p>Icon</p>
                <a :href="userInfo.linkedInLink">in/usmanq</a>
            </v-row>
            <v-row justify="center">
                <p>Icon</p>
                <a :href="userInfo.githubLink">UsmanQT</a>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
import { userBasicInfo } from '@/constants';

export default {
  data() {
    return {
      userInfo: userBasicInfo // You can now access the object in your template
    };
  }
};
</script>