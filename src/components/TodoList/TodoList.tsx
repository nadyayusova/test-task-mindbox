import { ITodo } from '../../types';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, removeTodo, toggleTodo } = props;

  const { 'todo-list': todoList } = styles;

  return (
    <ul className={todoList}>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};

export { TodoList };
