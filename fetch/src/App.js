import './App.css';
import { RecoilRoot } from 'recoil'
import TodoList from './components/RecoilExample/Todo/TodoList';
// import FontButton from './components/RecoilExample/FontButton';
// import Text from './components/RecoilExample/Text';
// import CharacterCounter from './components/RecoilExample/CharacterCounter';
// import Counter2 from './components/Counter2';
// import MobxExample from './components/MobxExample';
// import TestMocking from './components/TestMocking';
// import TodoList from './components/TodoList';
// import { observableTodoStore } from './app/ObservableTodoStore';

// import Counter from './features/counter/Counter';

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
      {/* <TodoList store={ observableTodoStore }/> */}

      <RecoilRoot>
        {/* <FontButton />
        <Text />
        <CharacterCounter /> */}
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
