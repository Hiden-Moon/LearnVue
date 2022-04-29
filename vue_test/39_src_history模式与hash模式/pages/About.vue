<template>
  <h2>我是About的内容</h2>
</template>

<script>
  export default {
    name: 'About',
    //通过路由规则，进入该组件时被调用
    beforeRouteEnter: (to, from, next) => {
      console.log('About————组件内路由，beforeRouteEnter', to, from)
      if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'BNUZ') next()
        else alert('学校不对，无权限查看！')
      } else next()
    },
    //通过路由规则，离开该组件时被调用
    beforeRouteLeave(to, from, next) {
      console.log('About————组件内路由，beforeRouteLeave', to, from)
      next()
    },
  }
</script>
