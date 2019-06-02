<template>
  <div class="home">
    <h1 class="title">
      Todo List
    </h1>
    <div class="add">
      <Button type="primary" size="large" @click="openAdd">添加Todo</Button>
    </div>
    <div class="empty-list" v-if="todoList.length <= 0">
      <Card style="width: 600px; text-align: center; margin: 20px auto 0; min-height: 200px;" dis-hover>
        <Icon type="ios-archive-outline" size="120" />
        <p>现在暂无任务</p>
      </Card>
    </div>
    <ul class="check-list" v-else>
      <todo-item v-for="(item, index) in todoList" :key="item.id" :todoItem="item" :todoIndex="index" @on-click-edit="openEdit"/>
    </ul>
    <Modal v-model="showAdd" title="添加新的任务" :closable="false" @on-visible-change="addModalStatusChange" @on-ok="addTodo">
      <Input v-model="addText" placeholder="请输入任务内容"></Input>
    </Modal>
    <Modal v-model="showEdit" :closable="false" @on-visible-change="editModalStatusChange" @on-ok="editTodo">
      <div slot="header" class="edit-header">
        <h3>编辑任务</h3>
        <Button type="error" size="small" @click="deleteTodo">删除</Button>
      </div>
      <Input v-model="editText" placeholder="请输入修改的内容"></Input>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import TodoItem from '@/components/todoItem.vue';

@Component({
  components: {
    TodoItem,
  },
})
export default class Home extends Vue {
  // vuex store
  @State private todoList!: any[];

  // data
  private showAdd: boolean = false;
  private addText: string = '';
  private showEdit: boolean = false;
  private editIndex: number = 0;
  private editText: string = '';

  // methods
  // 打开新建任务对话框
  private openAdd(): void {
    this.showAdd = true;
  }

  // 新建任务对话框状态改变
  private addModalStatusChange(): void {
    this.addText = '';
  }

  // 确定添加任务
  private addTodo(): void {
    this.$store.dispatch('ADD_TODO', this.addText || '新的任务');
  }

  // 打开编辑对话框
  private openEdit(index: number): void {
    this.editIndex = index;
    this.editText = this.todoList[index].data;
    this.showEdit = true;
  }

  // 编辑任务对话框状态改变
   private editModalStatusChange(status: boolean): void {
     if (!status) {
       this.editText = '';
     }
  }

  // 确定编辑任务
  private editTodo(): void {
    this.$store.dispatch('EDIT_TODO', { text: this.editText || '新的任务', index: this.editIndex });
  }

  // 删除单个Todo
  private deleteTodo(): void {
    this.$store.dispatch('DELETE_TODO', this.editIndex);
    this.showEdit = false;
  }
}
</script>

<style lang="less" scoped>
  .home {
    width: 100%;

    .title {
      text-align: center;
    }

    .add {
      text-align: center;
    }

    .check-list {
      margin-top: 20px;
    }
  }
</style>

<style lang="less">
  .edit-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

