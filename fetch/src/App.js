import './App.css';
import Counter2 from './components/Counter2';
import MobxExample from './components/MobxExample';
import TestMocking from './components/TestMocking';
import TodoList from './components/TodoList';
import { observableTodoStore } from './app/ObservableTodoStore';

import Counter from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      {/* <TestMocking />
      <Counter />
      <br />
      <br />
      <br /> */}
      {/* <Counter2 /> */}

      {/* <MobxExample /> */}
      <TodoList store={ observableTodoStore }/>
    </div>
  );
}

export default App;
