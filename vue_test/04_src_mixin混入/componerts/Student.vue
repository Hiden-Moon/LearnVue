<template>
  <div>
      <h2 @click="showName">名字：{{name}}</h2>
      <h2>性别：{{sex}}</h2>
  </div>
</template>

<script>
    import {mixin} from '../mixin'
    export default {
        name:'Student',
        data(){
            return {
                name:"许B",
                sex:"女"
            }
        },
        // methods: {
        //     showName(){
        //         alert(this.name)
        //     }
        // },
        mixins:[mixin]
    }
</script>
