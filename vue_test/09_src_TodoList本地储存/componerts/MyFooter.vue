<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:'MyFooter',
        props:['todos','checkAllTodo','clearAllTodo'],
        computed:{
            total(){
                return this.todos.length
            },
            doneTotal(){
                //reduce中的函数调用次数与数组长度相同，每次调用存在一个返回值，返回给下一次的reduce中的函数调用，当道最后一次调用reduce中的函数时，最后的返回值就是reduce函数的最终返回值
                //current传入的是每一个todo项
                return this.todos.reduce((pre,todo) => pre + (todo.done ? 1 : 0),0)
            },
            isAll:{
                get(){
                    return this.doneTotal === this.total && this.total>0
                },
                set(value){
                    this.checkAllTodo(value)
                }
            },
        },
        methods: {
            /* checkAll(e){
                this.checkAllTodo(e.target.checked)
            } */
            clearAll(){
                if(confirm("你确定要清除吗？"))
                    this.clearAllTodo()
            }
        },
    }
</script>

<style scoped>
/*footer*/
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }
</style>