import React, { Fragment, useState } from "react";
import "./App.css";
import "bulma";

import { Strategy, Fertilizer, newFertilizer, newStrategy } from "./models";
import StrategyComponent from "./components/StrategyComponent";

function updateDataArray<T extends Strategy | Fertilizer>(
  data: T[],
  newItem: T
): T[] {
  const newData = data.map((originalItem) => {
    return originalItem.id === newItem.id ? newItem : originalItem;
  });
  return [...newData];
}

function App() {
  const [strategies, setStrategies] = useState<Strategy[]>([newStrategy()]);

  function onAddStrategyHandler() {
    const strategy = newStrategy();
    setStrategies([...strategies, strategy]);
  }

  function onRemoveStrategyHandler(id: number) {
    const newStrategies = [...strategies].filter((strategy: Strategy) => {
      return strategy.id !== id;
    });

    setStrategies(newStrategies);
  }

  function onAddFertilizerHandler(strategyId: number) {
    const modifiedStrategy = strategies.filter(
      (strategy) => strategy.id === strategyId
    )[0];
    modifiedStrategy.fertilizers.push(newFertilizer());

    setStrategies([...updateDataArray(strategies, modifiedStrategy)]);
  }

  function onRemoveFertilizerHandler(strategyId: number, fertilizerId: number) {
    const modifiedStrategy = strategies.filter(
      (strategy) => strategy.id === strategyId
    )[0];

    modifiedStrategy.fertilizers = modifiedStrategy.fertilizers.filter(
      (fertilizer) => fertilizer.id !== fertilizerId
    );

    setStrategies([...updateDataArray(strategies, modifiedStrategy)]);
  }

  function onChangeFertilizerHandler(
    strategy: Strategy,
    fertilizer: Fertilizer
  ) {
    const modifiedStrategy = strategies.filter(
      (item) => item.id === strategy.id
    )[0];

    modifiedStrategy.fertilizers = updateDataArray(
      modifiedStrategy.fertilizers,
      fertilizer
    );

    setStrategies([...updateDataArray(strategies, modifiedStrategy)]);
  }

  return (
    <Fragment>
      <header>
        <h1>Adubolator</h1>
      </header>
      <main>
        {strategies.map((strategy) => {
          return (
            <StrategyComponent
              key={strategy.id}
              data={strategy}
              onRemoveStrategy={onRemoveStrategyHandler}
              onAddFertilizer={onAddFertilizerHandler}
              onChangeFertilizer={onChangeFertilizerHandler}
              onRemoveFertilizer={onRemoveFertilizerHandler}
            />
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
