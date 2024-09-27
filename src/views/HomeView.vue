<template>
  <Header />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Header,
  },
});
</script>
