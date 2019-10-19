import { ref } from "@vue/composition-api";
import Todo from "@/entity/todo";

export function useTodos() {
  let todos = ref([new Todo("buy Fuji XT3")]);

  function addTodo(todo) {
    console.log(`🐼 add todo ${todo}`);
    todos.value.push(new Todo(todo));
  }

  function toggleTodo(todo) {
    console.log("🚀 toggle todo");
    todos.value = todos.value.map(t => {
      if (t.title === todo.title) t.done = !t.done;
      return t;
    });
  }

  function removeAll() {
    console.log("🔥 remove todos");
    todos.value = [];
  }

  function finishAll() {
    console.log("🔥 finish todos");
    todos.value = todos.value.map(t => {
      t.done = true;
      return t;
    });
  }

  return { todos, addTodo, removeAll, finishAll, toggleTodo };
}
