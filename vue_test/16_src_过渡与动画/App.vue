<template>
    <div>
        <Test/>
        <hr>
        <Test2/>
        <hr>
        <Test3/>
    </div>
</template>

<script>
    import Test from './componerts/Test.vue';
    import Test2 from './componerts/Test2.vue';
    import Test3 from './componerts/Test3.vue';
    export default {
        name:'App',
        components: {Test,Test2,Test3},

    }
</script>
