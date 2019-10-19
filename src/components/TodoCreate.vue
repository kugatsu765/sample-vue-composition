<template>
  <div class="flex flex-row items-center">
    <input 
    type="text" 
    v-model="newTodo"
    class="flex-1 bg-gray-900 rounded p-1 py-2 text-center" 
    placeholder="buy flowers"/>

    <button class="rounded bg-blue-500 px-3 py-1 mx-2" @click="add()">add</button>
  </div>
</template>

<script>
import {ref} from "@vue/composition-api"

export default {
  setup(_, context) {
    let newTodo = ref(null)

    function add(){
      if (!newTodo.value) return
      context.emit('add', newTodo.value)
      newTodo.value = null
    } 

    return { newTodo, add }
  }
}
</script>

