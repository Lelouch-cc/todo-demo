import { shallowMount } from '@vue/test-utils';
import TodoItem from '@/components/todoItem.vue';

describe('todoItem.vue', () => {
  it ('unfinished item', () => {
    const todoItem = {
      id: 1,
      data: 'test for unfinished',
      isDone: false,
    };
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        todoItem,
        todoIndex: 0,
      },
      stubs: [ 'Divider', 'Checkbox', 'Row' ],
    });
    expect(wrapper.find('.todo-text').text()).toMatch(todoItem.data);
  });
  it('finished item', () => {
    const todoItem = {
      id: 2,
      data: 'test for finished',
      isDone: true,
    };
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        todoItem,
        todoIndex: 0,
      },
      stubs: [ 'Divider', 'Checkbox', 'Row' ],
    });
    expect(wrapper.find('.todo-text').text()).toMatch(todoItem.data);
    expect(wrapper.find('.todo-text').element.classList).toContain('done');
  });
});
