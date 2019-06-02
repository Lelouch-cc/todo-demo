<template>
  <li>
    <Row type="flex" align="middle" class="todo-item">
      <!-- Todo状态 -->
      <Col span="2">
        <Checkbox size="large" :value="todoItem.isDone" @on-change=changeTodoStatus(todoIndex)></Checkbox>
      </Col>
      <!-- Todo内容 -->
      <Col span="18">
        <div class="todo-text" v-bind:class="{done: todoItem.isDone}">
          {{ todoItem.data }}
        </div>
      </Col>
      <!-- 编辑按钮 -->
      <Col span="4">
        <Button type="default" @click="edit(todoIndex)">···</Button>
      </Col>
    </Row>
    <Divider dashed />
  </li>
</template>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  props: {
    todoItem: Object,
    todoIndex: Number,
  },
})
export default class TodoItem extends Vue {
  private checkStatus: boolean = false;

  private edit(index: number): void {
    this.$emit('on-click-edit', index);
  }

  private changeTodoStatus(index: number): void {
    this.$store.dispatch('CHANGE_TODO_STATUS', index);
  }
}
</script>
  
<style lang="less" scoped>
  li {
    list-style: none;
    width: 600px;
    margin: 0 auto;
  }

  .todo {
    &-text {
      width: 100%;
      font-size: 24px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .done {
    color: #c5c8ce;
    text-decoration: line-through;
  }
</style>