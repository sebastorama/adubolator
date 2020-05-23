import React, { Fragment, useState, useEffect } from "react";

import { Fertilizer, Strategy } from "../models";

type FertilizerFieldComponentProps = {
  fieldName: string;
  data: number;
  onDataChange(data: number): void;
};
function FertilizerFieldComponent({
  fieldName,
  data,
  onDataChange,
}: FertilizerFieldComponentProps) {
  const [insideData, setInsideData] = useState(data);

  useEffect(() => {
    onDataChange(insideData);
  }, [insideData]);
  return (
    <div className="field fertilizer">
      <label htmlFor={fieldName} className="label is-small">
        {fieldName.toUpperCase()}:
      </label>
      <div className="control">
        <input
          type="text"
          className="input is-small"
          name={fieldName}
          value={insideData}
          onChange={(e) => {
            setInsideData(parseInt(e.target.value, 10));
          }}
        />
      </div>
    </div>
  );
}

type FertilizerComponentProps = {
  data: Fertilizer;
  onChangeFertilizer(fertilizer: Fertilizer): void;
  onRemoveFertilizer(id: number): void;
};
function FertilizerComponent({
  data,
  onChangeFertilizer,
  onRemoveFertilizer,
}: FertilizerComponentProps) {
  const [fertilizer, setFertilizer] = useState<Fertilizer>(data);

  useEffect(() => {
    onChangeFertilizer(fertilizer);
  }, [fertilizer]);

  return (
    <Fragment>
      <form className="fertilizerForm">
        <FertilizerFieldComponent
          fieldName="n"
          data={fertilizer.n}
          onDataChange={(value) => setFertilizer({ ...fertilizer, n: value })}
        />
        <FertilizerFieldComponent
          fieldName="p"
          data={fertilizer.p}
          onDataChange={(value) => setFertilizer({ ...fertilizer, p: value })}
        />
        <FertilizerFieldComponent
          fieldName="k"
          data={fertilizer.k}
          onDataChange={(value) => setFertilizer({ ...fertilizer, k: value })}
        />
        <FertilizerFieldComponent
          fieldName="s"
          data={fertilizer.s}
          onDataChange={(value) => setFertilizer({ ...fertilizer, s: value })}
        />
      </form>
      <button
        className="delete"
        onClick={() => onRemoveFertilizer(fertilizer.id)}
      >
        Remover Fertilizante
      </button>
    </Fragment>
  );
}

export default FertilizerComponent;
