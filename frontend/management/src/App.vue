<template>
  <div id="app">
    <AddStudent /> <!-- Nag-insert sa AddStudent component -->
  </div>
</template>

<script>
import AddStudent from './components/AddStudent.vue'; // Nag-import sa AddStudent component

export default {
  components: {
    AddStudent, // Gihimo nga available ang AddStudent component sa app
  },
};
</script>

<style>
/* Global styles if needed */ /* Dinhi nimo idugang ang global styles kung kinahanglan */
</style>
