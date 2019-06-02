<template>
  <li>
    <Row type="flex" align="middle" class="todo-item">
      <Col span="2">
        <Checkbox size="large" :value="todoItem.isDown"></Checkbox>
      </Col>
      <Col span="18">
        <div class="todo-text" v-bind:class="{done: checkStatus}">
          {{ todoItem.data }}
        </div>
      </Col>
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