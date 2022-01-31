import './App.css';
import Composition from './components/2-4.Props/Composition';
import Extraction from './components/2-4.Props/Extraction/Extraction';
import ClassComponent from './components/2-5.State/ClassComponent';
import FunctionalComponent from './components/2-5.State/FunctionalComponent';
import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent2';
import Event from './components/2-7.Event/Event'
import Condition from './components/2-8.ConditionalRendering/Condition';

function App() {
  return (
    <div className="App">

    <Condition />
    {/* <Event /> */}
    
    {/* <FunctionalComponent />
      <ClassComponent />
      <ClassComponent2 />
      <Extraction />
      <Composition /> */}

      
    </div>
  );
}

export default App;