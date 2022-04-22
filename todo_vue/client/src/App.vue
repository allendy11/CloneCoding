<template>
  <div>
    <h1 class="main-title">To-do App</h1>
    <input
      id="input"
      type="text"
      class="input-todo"
      placeholder="Type todo"
      @keyup.enter="addTodo"
      @input="saveInputText"
      ref="input"
    />
    <button id="button" @click="addTodo">Add</button>
    <hr />
    <TodoView v-for="todo in todoList" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import TodoView from "@/components/TodoView.vue";
export default {
  components: {
    TodoView,
  },
  data() {
    return {
      inputText: "",
      todoList: [
        {
          id: 1,
          title: "study",
          checked: true,
        },
        {
          id: 2,
          title: "coding",
          checked: false,
        },
        {
          id: 3,
          title: "buy a note",
          checked: true,
        },
      ],
    };
  },
  methods: {
    addTodo(e) {
      const idx = this.todoList[this.todoList.length - 1].id;
      let item = {};
      if (e.target.id === "button") {
        item = {
          id: idx + 1,
          title: this.inputText,
          checked: false,
        };
      } else if (e.target.id === "input") {
        item = {
          id: idx + 1,
          title: e.target.value,
          checked: false,
        };
      }
      this.todoList.push(item);
      this.$refs.input.value = "";
    },
    saveInputText(e) {
      this.inputText = e.target.value;
    },
  },
};
</script>

<style></style>
