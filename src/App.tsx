import React, { Fragment, useState } from "react";
import "./App.css";
import "bulma";

import { Strategy, Fertilizer, newStrategy } from "./models";
import StrategyComponent from "./components/StrategyComponent";

const App = () => {
  const [strategies, setStrategies] = useState<Strategy[]>([newStrategy()]);

  const onAddStrategyHandler = () => {
    const strategy = newStrategy();
    setStrategies([...strategies, strategy]);
  };

  const onRemoveStrategyHandler = (remove: Strategy) => {
    const newStrategies = strategies.filter((curr) => {
      return curr.id !== remove.id;
    });
    setStrategies([...newStrategies]);
  };

  const onChangeStrategyHandler = (change: Strategy) => {
    const newStrategies = strategies.map((curr) => {
      return curr.id === change.id ? change : curr;
    });
    setStrategies([...newStrategies]);
  };

  return (
    <Fragment>
      <header>
        <div className="row align-center">
          <h1>Adubolator</h1>
        </div>
      </header>
      <main>
        {strategies.map((strategy) => {
          return (
            <div className="row">
              <StrategyComponent
                key={strategy.id}
                data={strategy}
                onRemoveStrategy={() => onRemoveStrategyHandler(strategy)}
                onChangeStrategy={onChangeStrategyHandler}
              />
            </div>
          );
        })}
        <div className="row">
          <button
            type="button"
            className="button is-primary add-strategy"
            onClick={onAddStrategyHandler}
          >
            Acrescentar Manejo
          </button>
        </div>
      </main>
    </Fragment>
  );
};

export default App;
