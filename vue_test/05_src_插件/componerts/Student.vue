<template>
  <div>
      <h2>名字：{{name}}</h2>
      <h2>性别：{{sex}}</h2>
      <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return {
                name:"许B",
                sex:"女"
            }
        },
    }
</script>
