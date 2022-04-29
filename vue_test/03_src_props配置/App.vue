<template>
  <div>
      <Student name="许B" sex="女" :age="23"/>
  </div>
</template>

<script>
    import Student from './componerts/Student.vue'
    export default {
        name:'App',
        components: {Student},
    }
</script>