<template>
  <div class="home">
    <!-- 标题 -->
    <h1 class="title">
      Todo List
    </h1>
    <!-- 添加任务按钮 -->
    <div class="add">
      <Button type="primary" size="large" @click="openAdd">添加Todo</Button>
    </div>
    <!-- 空列表 -->
    <div class="empty-list" v-if="todoList.length <= 0">
      <Card style="width: 600px; text-align: center; margin: 20px auto 0; min-height: 200px;" dis-hover>
        <Icon type="ios-archive-outline" size="120" />
        <p>现在暂无任务</p>
      </Card>
    </div>
    <!-- Todo列表 -->
    <ul class="check-list" v-else>
      <todo-item v-for="(item, index) in todoList" :key="item.id" :todoItem="item" :todoIndex="index" @on-click-edit="openEdit"/>
    </ul>
    <!-- 列表相关数据及操作 -->
    <Row type="flex" justify="center" align="middle" style="width: 600px; margin: 20px auto;">
      <Col span="6">
        任务总数：
        <Badge :count="todoList.length" show-zero></Badge>
      </Col>
      <Col span="6">
        已完成数量：
        <Badge :count="doneTodo" show-zero class-name="done-badge"></Badge>
      </Col>
      <Col span="6">
        <Button type="primary" size="small" @click="completeAll" v-show="todoList.length > 0">完成全部</Button>
      </Col>
      <Col span="6">
        <Button type="primary" size="small" @click="deleteDone" v-show="todoList.length > 0">删除已完成任务</Button>
      </Col>
    </Row>
    <!-- 新建对话框 -->
    <Modal v-model="showAdd" title="添加新的任务" :closable="false" @on-visible-change="addModalStatusChange" @on-ok="addTodo">
      <Input v-model="addText" placeholder="请输入任务内容"></Input>
    </Modal>
    <!-- 编辑对话框 -->
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
import { Component, Vue, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import TodoItem from '@/components/todoItem.vue';

@Component({
  components: {
    TodoItem,
  },
})
export default class Home extends Vue {
  // vuex store
  @State private todoList!: any[];
  @Action private 'ADD_TODO': (data: string) => void;
  @Action private 'EDIT_TODO': (data: { text: string, index: number }) => void;
  @Action private 'DELETE_TODO': (data: number) => void;
  @Action private 'COMPLETE_ALL_TODO': () => void;
  @Action private 'DELETE_DONE_TODO': () => void;

  // data
  private showAdd: boolean = false;
  private addText: string = '';
  private showEdit: boolean = false;
  private editIndex: number = 0;
  private editText: string = '';

  get doneTodo(): number {
    return this.todoList.filter((item: any) => item.isDone).length;
  }

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
    const key = 'ADD_TODO';
    this[key](this.addText || '新的任务');
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
    const key = 'EDIT_TODO';
    this[key]({ text: this.editText || '新的任务', index: this.editIndex });
  }

  // 删除单个Todo
  private deleteTodo(): void {
    const key = 'DELETE_TODO';
    this[key](this.editIndex);
    this.showEdit = false;
  }

  // 完成全部任务
  private completeAll(): void {
    const key = 'COMPLETE_ALL_TODO';
    this[key]();
  }

  // 删除已完成任务
  private deleteDone(): void {
    const key = 'DELETE_DONE_TODO';
    this[key]();
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

  .done-badge {
    background: #5cb85c !important;
  }
</style>

