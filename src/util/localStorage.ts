import { Message } from 'iview';

export const getDataFromStore = () => {
  return new Promise((resolve, reject) => {
    try {
      const data = JSON.parse(window.localStorage.getItem('todo-list') || '[]');
      resolve(data);
    } catch (error) {
      // @ts-ignore
      Message.error('获取数据失败！');
      reject(error);
    }
  });
};

export const setDataToStore = (data: any) => {
  return new Promise((resolve, reject) => {
    try {
      window.localStorage.setItem('todo-list', JSON.stringify(data));
      resolve('ok');
    } catch (error) {
      // @ts-ignore
      Message.error('设置数据失败！');
      reject(error);
    }
  });
};
