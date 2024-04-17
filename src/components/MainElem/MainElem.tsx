import { useEffect, useRef, useState } from 'react';
import styles from './MainElem.module.scss';
import { ITodo } from '../../types';
import { TodoList } from '../TodoList/TodoList';

const RadioValues: string[] = ['all', 'checked', 'unchecked'];
const RadioLabels: string[] = ['All', 'Active', 'Completed'];
const filterCallbacks: ((elem: ITodo) => boolean)[] = [
  () => true,
  (elem) => !elem.completed,
  (elem) => elem.completed,
];

const Main: React.FC = () => {
  const {
    main,
    'tabs-wrapper': tabsWrapper,
    radio,
    'list-type': listType,
    'todo-input': todoInput,
    'todo-add-btn': todoAddBtn,
    controls,
    'remove-completed-btn': removeCompletedBtn,
  } = styles;

  const [activeList, setActiveList] = useState(RadioValues[0]);
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    updateFilteredList(RadioValues.indexOf(activeList));
  }, [todos]);

  const updateFilteredList = (index: number) => {
    setFilteredTodos(todos.filter(filterCallbacks[index]));
  };

  const changeRadioHandler: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setActiveList(evt.target.value);

    let cbIndex = 0;
    if (inputRef.current && RadioValues.includes(evt.target.value)) {
      cbIndex = RadioValues.indexOf(evt.target.value);
    }
    updateFilteredList(cbIndex);
  };

  const changeInputHandler: React.ChangeEventHandler<HTMLInputElement> = (evt) =>
    setValue(evt.target.value);

  const keyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (evt) => {
    if (evt.key === 'Enter') addToodo();
  };

  const addToodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          completed: false,
        },
      ]);
      setValue('');
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      }),
    );
  };

  const removeCompleted = () => {
    const newTodos = todos.filter(filterCallbacks[1]);
    setTodos([...newTodos]);
  };

  return (
    <main className={main}>
      <div className="container">
        <h2 className="visually-hidden">Mindbox test task</h2>

        <div className={tabsWrapper}>
          {RadioValues.map((item, index) => (
            <div key={item}>
              <input
                className={`visually-hidden ${radio}`}
                type="radio"
                name="list-types"
                id={`id-${item}`}
                value={item}
                checked={activeList === item}
                onChange={changeRadioHandler}
              />
              <label
                className={listType}
                htmlFor={`id-${item}`}
              >
                {RadioLabels[index]}
              </label>
            </div>
          ))}
        </div>

        <div className={todoInput}>
          <input
            type="text"
            ref={inputRef}
            value={value}
            onChange={changeInputHandler}
            onKeyDown={keyDownHandler}
          />
          <button
            className={todoAddBtn}
            type="button"
            onClick={addToodo}
          >
            Add
          </button>
        </div>

        <TodoList
          items={filteredTodos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />

        <div className={controls}>
          <p>{todos.filter(filterCallbacks[1]).length} items left</p>
          <button
            className={`${todoAddBtn} ${removeCompletedBtn}`}
            type="button"
            onClick={removeCompleted}
          >
            Remove completed
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
