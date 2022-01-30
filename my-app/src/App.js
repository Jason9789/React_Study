import './App.css';
import Composition from './components/2-4.Props/Composition';
import Extraction from './components/2-4.Props/Extraction/Extraction';
import ClassComponent from './components/2-5.State/ClassComponent';
import FunctionalComponent from './components/2-5.State/FunctionalComponent';
import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent2';

function App() {
  return (
    <div className="App">

  {/* <FunctionalComponent />
      <ClassComponent /> */}
      <ClassComponent2 />

      {/* <Extraction />
      <Composition /> */}
      
    </div>
  );
}

export default App;
