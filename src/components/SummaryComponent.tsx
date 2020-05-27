import React, { Fragment } from "react";
import NumberFormat from "react-number-format";
import { Summary } from "../models";

type SummaryComponentProps = {
  summary: Summary;
};
const SummaryComponent = ({ summary }: SummaryComponentProps) => {
  return (
    <Fragment>
      <p>
        <var>N:</var>
        {summary.n}
        <var>P:</var>
        {summary.p}
        <var>K:</var>
        {summary.k}
        <var>S:</var>
        {summary.s}
        <var>custo/ha:</var>
        <NumberFormat
          value={summary.pricePerHa}
          displayType="text"
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale={true}
          prefix="$"
        />
      </p>
    </Fragment>
  );
};

export default SummaryComponent;
