import React, { Fragment, useState, useEffect } from "react";

import FertilizerComponent from "./FertilizerComponent";
import SummaryComponent from "./SummaryComponent";
import {
  Strategy,
  Fertilizer,
  newFertilizer,
  calculateSummary,
} from "../models";

type StrategyComponentProps = {
  data: Strategy;
  onRemoveStrategy(): void;
  onChangeStrategy(strategy: Strategy): void;
};

const StrategyComponent = ({
  data,
  onRemoveStrategy,
  onChangeStrategy,
}: StrategyComponentProps) => {
  const [strategy, setStrategy] = useState<Strategy>(data);

  useEffect(() => {
    strategy.fertilizers.length > 0
      ? onChangeStrategy(strategy)
      : onRemoveStrategy();
  }, [strategy]);

  function onAddFertilizerHandler() {
    const newStrategy = { ...strategy };
    newStrategy.fertilizers.push(newFertilizer());
    setStrategy({ ...newStrategy });
  }

  function onChangeFertilizerHandler(updated: Fertilizer) {
    const newStrategy = { ...strategy };
    newStrategy.fertilizers = strategy.fertilizers.map((curr) => {
      return curr.id === updated.id ? updated : curr;
    });
    setStrategy({ ...newStrategy });
  }

  function onRemoveFertilizerHandler(removed: Fertilizer) {
    const newStrategy = { ...strategy };
    newStrategy.fertilizers = strategy.fertilizers.filter((curr) => {
      return curr.id !== removed.id;
    });
    setStrategy({ ...newStrategy });
  }

  return (
    <div className="strategy">
      {strategy.fertilizers.map((fertilizer: Fertilizer) => (
        <Fragment key={fertilizer.id}>
          <FertilizerComponent
            data={fertilizer}
            onChangeFertilizer={onChangeFertilizerHandler}
            onRemoveFertilizer={() => onRemoveFertilizerHandler(fertilizer)}
          />
        </Fragment>
      ))}
      <div className="summary-result">
        <SummaryComponent summary={calculateSummary(strategy)} />
      </div>
      <div className="strategy-actions">
        <div className="buttons">
          <button
            type="button"
            className="button is-small"
            onClick={onAddFertilizerHandler}
          >
            Adicionar Fertilizante
          </button>
          <button
            type="button"
            className="button is-danger is-small"
            onClick={onRemoveStrategy}
          >
            Remover Manejo
          </button>
        </div>
      </div>
    </div>
  );
};

export default StrategyComponent;
