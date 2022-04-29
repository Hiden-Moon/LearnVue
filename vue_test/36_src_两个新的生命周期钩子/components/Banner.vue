<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      //后退
      this.$router.back();
    },
    forward() {
      //前进
      this.$router.forward();
    },
    go() {
      //可前进可后退，取决于数字
      this.$router.go(1);
    },
  },
};
</script>