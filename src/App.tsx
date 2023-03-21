import { useRef, useState } from 'react';
import './App.css';
import { config } from './assets/test-config';
import RenderGroup from './components/RenderGroup';
import { RenderGroupExposedMethods } from './types';

function App() {
  const renderGroupRef = useRef<RenderGroupExposedMethods>();
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const getRenderGroupRef = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (renderGroupRef && renderGroupRef.current) {
      const fields = renderGroupRef.current.getCurrentValues();
      alert(
        `Form submitted, field values are \n${JSON.stringify(fields, null, 2)}`
      );
    }
  };

  return (
    <main className="app">
      <p className="app__name">Sample text</p>
      <form onSubmit={getRenderGroupRef}>
        <RenderGroup
          config={config}
          setSubmitDisabled={setSubmitDisabled}
          /* @ts-ignore */
          ref={renderGroupRef}
        />
        <button disabled={submitDisabled} type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}

export default App;
