import React, { Fragment, useState } from "react";
import "./App.css";
import "bulma";

import { Strategy, Fertilizer, newStrategy, calculateSummary } from "./models";
import StrategyComponent from "./components/StrategyComponent";
import SummaryComponent from "./components/SummaryComponent";

function App() {
  const [strategies, setStrategies] = useState<Strategy[]>([newStrategy()]);

  function onAddStrategyHandler() {
    const strategy = newStrategy();
    setStrategies([...strategies, strategy]);
  }

  function onRemoveStrategyHandler(remove: Strategy) {
    const newStrategies = strategies.filter((curr) => {
      return curr.id !== remove.id;
    });
    setStrategies([...newStrategies]);
  }

  function onChangeStrategyHandler(change: Strategy) {
    const newStrategies = strategies.map((curr) => {
      return curr.id === change.id ? change : curr;
    });
    setStrategies([...newStrategies]);
  }

  return (
    <Fragment>
      <header>
        <h1>Adubolator</h1>
      </header>
      <main>
        {strategies.map((strategy) => {
          return (
            <Fragment>
              <StrategyComponent
                key={strategy.id}
                data={strategy}
                onRemoveStrategy={() => onRemoveStrategyHandler(strategy)}
                onChangeStrategy={onChangeStrategyHandler}
              />
              <SummaryComponent summary={calculateSummary(strategy)} />
            </Fragment>
          );
        })}

        <button
          type="button"
          className="button is-primary"
          onClick={onAddStrategyHandler}
        >
          Acrescentar Manejo
        </button>

        <p>{JSON.stringify(strategies)}</p>
      </main>
      <footer>Adubolator {new Date().getFullYear} - No Rights Reserved</footer>
    </Fragment>
  );
}

export default App;
