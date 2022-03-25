<template>
  <div>
    <TaskList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TaskList } from "../components/index";

@Component({
  components: {
    TaskList,
  },
})
export default class Home extends Vue {}
</script>
