<template>
  <ul class="p-1">
    <li 
    v-for="(todo,index) in todos" :key="index"  
    class="p-3 hover:bg-blue-500 cursor-pointer"
    :class="{'opacity-25 line-through': todo.done}"
    @click="endTodo(todo)">
      {{todo.title}}
    </li>
  </ul>
</template>

<script>
export default {
  name:"TodoCollection",
  props: {
    todos: Array
  },
  setup (props, context) {
    function endTodo(todo) {
      context.emit('endTodo', todo)
    }
    return {endTodo}
  }
}
</script>

