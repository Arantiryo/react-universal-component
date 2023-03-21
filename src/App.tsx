import { useRef } from 'react';
import './App.css';
import { config } from './assets/test-config';
import RenderGroup from './components/RenderGroup';
import { RenderGroupExposedMethods } from './types';

function App() {
  const renderGroupRef = useRef<RenderGroupExposedMethods>();

  const getRenderGroupRef = () => {
    // TODO
    if (renderGroupRef && renderGroupRef.current) {
      console.log(renderGroupRef.current.getCurrentValues());
    }
  };

  return (
    <main className="app">
      <p className="app__name">Sample text</p>
      {/* @ts-ignore */}
      <RenderGroup config={config} ref={renderGroupRef} />
      <button onClick={getRenderGroupRef}>Click me</button>
    </main>
  );
}

export default App;
