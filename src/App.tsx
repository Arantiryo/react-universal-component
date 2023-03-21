import { useRef, useState } from 'react';
import './App.css';
import { config } from './assets/test-config';
import RenderGroup from './components/RenderGroup/RenderGroup';
import { RenderGroupExposedMethods } from './types';
import reactLogo from './assets/react.svg';

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
      <img className="react-logo" src={reactLogo} alt="react logo" />
      <p className="app-name">Sample text</p>
      <form className="form" onSubmit={getRenderGroupRef}>
        <RenderGroup
          config={config}
          setSubmitDisabled={setSubmitDisabled}
          /* @ts-ignore */
          ref={renderGroupRef}
        />
        <button className="submit" disabled={submitDisabled} type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}

export default App;
