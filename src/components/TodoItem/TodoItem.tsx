import { ITodo } from '../../types';
import styles from './TodoItem.module.scss';

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, completed, removeTodo, toggleTodo } = props;

  const { 'todo-item': todoItem, 'remove-btn': removeBtn } = styles;

  return (
    <li className={todoItem}>
      <input
        type="checkbox"
        id={`id-${id}`}
        name={`${id}`}
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <label htmlFor={`id-${id}`}>{title}</label>
      <button
        className={removeBtn}
        type="button"
        onClick={() => removeTodo(id)}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.7441 1.6123C17.0853 1.24365 17.0853 0.645148 16.7441 0.276492C16.2893 -0.092164 15.7207 -0.092164 15.3796 0.276492L8.44314 7.16376L1.6204 0.276492C1.16555 -0.092164 0.59699 -0.092164 0.255853 0.276492C-0.0852843 0.645148 -0.0852843 1.24365 0.255853 1.6123L7.19231 8.49957L0.255853 15.388C-0.0852843 15.7566 -0.0852843 16.354 0.255853 16.7227C0.59699 17.0924 1.16555 17.0924 1.6204 16.7227L8.44314 9.83538L15.3796 16.7227C15.7207 17.0924 16.2893 17.0924 16.7441 16.7227C17.0853 16.354 17.0853 15.7566 16.7441 15.388L9.80769 8.49957L16.7441 1.6123Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </li>
  );
};

export { TodoItem };
