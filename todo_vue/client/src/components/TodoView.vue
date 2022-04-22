<template>
  <div class="todo-box">
    <input type="checkbox" />
    <span class="todo">{{ todo.title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
