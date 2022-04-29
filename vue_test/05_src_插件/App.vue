<template>
  <div>
      <School/>
      <hr>
      <Student/>
  </div>
</template>

<script>
    import School from './componerts/School.vue'
    import Student from './componerts/Student.vue'
    export default {
        name:'App',
        components: {Student,School},
    }
</script>