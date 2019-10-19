<template>
  <div id="app" class='p-32'>
    <div class="rounded bg-gray-800 p-2">
      <h1 class="mb-2 text-xl font-bold">Todo's</h1>

      <TodoCreate @add="addTodo"/>
      <TodoCollection :todos="todos" @endTodo="toggleTodo"/>
      <TodoCleanAction @clearAll="removeAll" @finishAll="finishAll"/>

    </div>
  </div>
</template>

<script>

import TodoCreate from './components/TodoCreate'
import TodoCollection from './components/TodoCollection'
import TodoCleanAction from './components/TodoCleanAction'
import {useTodos} from './composition/useTodos'

export default {
  name: "App",
  components:{TodoCollection, TodoCleanAction, TodoCreate},
  setup () {
    
    const {todos, addTodo, removeAll, finishAll, toggleTodo} = useTodos()
    return {
      todos, 
      addTodo,
      toggleTodo, removeAll, finishAll
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
