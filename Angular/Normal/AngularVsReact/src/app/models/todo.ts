export interface TodoItem {
  identifier: string;
  text: string;
  checked: boolean;
}

export interface Todo {
  identifier: string;
  title: string;
  todoItems: TodoItem[];
}
