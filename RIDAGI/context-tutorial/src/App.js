import ColorBox from './components/ColorBox';
import SelectColors from './components/SelectColors';
import { ColorProvider } from './contexts/color';

function App() {
  return (
    <div>
      {/* Provider를 사용할 때는 value를 무조건 사용해야 한다. */}
      <ColorProvider>
        <div>
          <SelectColors />
          <ColorBox />
        </div>
      </ColorProvider>
    </div>
  );
}

export default App;
