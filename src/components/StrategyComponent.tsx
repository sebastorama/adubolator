import React, { Fragment, useState } from "react";

import FertilizerComponent from "./FertilizerComponent";
import { Strategy, Fertilizer } from "../models";

type StrategyComponentProps = {
  data: Strategy;
  onRemoveStrategy(id: number): void;
  onAddFertilizer(strategyId: number): void;
  onRemoveFertilizer(strategyId: number, fertilizerId: number): void;
  onChangeFertilizer(strategy: Strategy, fertilizer: Fertilizer): void;
};

function StrategyComponent({
  data,
  onRemoveStrategy,
  onAddFertilizer,
  onChangeFertilizer,
  onRemoveFertilizer,
}: StrategyComponentProps) {
  const [strategy, setStrategy] = useState<Strategy>(data);

  return (
    <Fragment>
      {strategy.fertilizers.map((fertilizer: Fertilizer) => {
        return (
          <Fragment key={fertilizer.id}>
            <FertilizerComponent
              data={fertilizer}
              onChangeFertilizer={(f: Fertilizer) =>
                onChangeFertilizer(strategy, f)
              }
              onRemoveFertilizer={(fertilizerId) =>
                onRemoveFertilizer(strategy.id, fertilizerId)
              }
            />
            <br />
          </Fragment>
        );
      })}
      <button
        type="button"
        className="button"
        onClick={() => onAddFertilizer(strategy.id)}
      >
        Adicionar Fertilizante
      </button>
      <button
        type="button"
        className="button is-danger"
        onClick={() => onRemoveStrategy(strategy.id)}
      >
        Remover Manejo
      </button>
      <br />
    </Fragment>
  );
}

export default StrategyComponent;
