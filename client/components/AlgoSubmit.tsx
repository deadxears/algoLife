import * as React from 'react';
import createAlgo from '../helpers/createAlgo';

export default function AlgoSubmit() {
  const [algoInfo, setAlgoInfo] = React.useState({});

  const handleChange = (e: any) => {
    setAlgoInfo({ ...algoInfo, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const algoObj = createAlgo(algoInfo);
    if (algoObj) {
      console.log(algoObj);
      // send createAlgo(algoInfo) object to DB!!!
    }
  };

  return (
    <div className="addAlgoContainer">
      <div className="addAlgoText">
        <h1 id="addAlgoHeader">Add an algorithm</h1>
        <p className="addAlgoInstructions">
          Complete the form to add an algorithm and test to solve later!
        </p>
      </div>
      <div className="addAlgoForm">
        <form
          className="createAlgoForm"
          style={{ display: 'flex', flexDirection: 'column', width: '400px' }}
          onSubmit={handleSubmit}
        >
          <label className="formLabels" htmlFor="Algo Name">
            Name
          </label>
          <input
            className="formInputs"
            id="name"
            placeholder="Algo Name"
            onChange={handleChange}
          />
          <label className="formLabels" htmlFor="Algo prompt">
            Prompt
          </label>
          <input
            className="formInputs"
            id="prompt"
            placeholder="Algo prompt"
            onChange={handleChange}
          />
          <label className="formLabels" htmlFor="Algo difficulty">
            Difficulty
          </label>
          <input
            className="formInputs"
            id="difficulty"
            placeholder="Algo difficulty"
            onChange={handleChange}
          />
          <label className="formLabels" htmlFor="Algo input">
            Input: (1, 2) | (3, 4) | (5,6)
          </label>
          <input
            className="formInputs"
            id="input"
            placeholder="Algo input"
            onChange={handleChange}
          />
          <label className="formLabels" htmlFor="Algo output">
            Output: 3, 7, 11
          </label>
          <input
            className="formInputs"
            id="output"
            placeholder="Algo output"
            onChange={handleChange}
          />
          {/* <button id="newAlgoSubmitButton">Submit</button> */}
        </form>
        <button id="newAlgoSubmitButton">Submit</button>
      </div>
    </div>
  );
}
