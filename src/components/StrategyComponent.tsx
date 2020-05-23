import React, { Fragment, useState, useEffect } from "react";

import FertilizerComponent from "./FertilizerComponent";
import { Strategy, Fertilizer, newFertilizer } from "../models";

type StrategyComponentProps = {
  data: Strategy;
  onRemoveStrategy(): void;
  onChangeStrategy(strategy: Strategy): void;
};

function StrategyComponent({
  data,
  onRemoveStrategy,
  onChangeStrategy,
}: StrategyComponentProps) {
  const [strategy, setStrategy] = useState<Strategy>(data);

  useEffect(() => {
    onChangeStrategy(strategy);
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
    <Fragment>
      {strategy.fertilizers.map((fertilizer: Fertilizer) => {
        return (
          <Fragment key={fertilizer.id}>
            <FertilizerComponent
              data={fertilizer}
              onChangeFertilizer={onChangeFertilizerHandler}
              onRemoveFertilizer={() => onRemoveFertilizerHandler(fertilizer)}
            />
            <br />
          </Fragment>
        );
      })}
      <button type="button" className="button" onClick={onAddFertilizerHandler}>
        Adicionar Fertilizante
      </button>
      <button
        type="button"
        className="button is-danger"
        onClick={onRemoveStrategy}
      >
        Remover Manejo
      </button>
      <br />
    </Fragment>
  );
}

export default StrategyComponent;