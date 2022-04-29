<template>
  <div>
      <h2>名字：{{name}}<!--{{MyName}}--></h2>
      <h2>性别：{{sex}}</h2>
      <h2>年龄：{{age}}</h2>
      <h2>{{msg}}</h2>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return {
                msg:'我的女朋友',
                //MyName:this.name
            }
        },

        //props的优先级比data中的属性要高
        //简单声明接收(不可以修改传入的值，但可以在data中声明一个属性接收prop并对声明属性进行修改)
        // props:['name','age','sex']

        //接收的同时对数据的类型限制
        /* props:{
            name:String,
            age:Number,
            sex:String
        } */

        //接收的同时对数据的类型限制+默认值的指定+必要性的限制
        props:{
            name:{
                type:String,//name的类型是字符串
                required:true//name是必要的
            },
            age:{
                type:Number,
                default:99//默认值为99
            },
            sex:{
                type:String,
                required:true
            }
        }
    }
</script>
