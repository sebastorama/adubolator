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
        <var>N/ha:</var>
        {summary.n}
        <var>P/ha:</var>
        {summary.p}
        <var>K/ha:</var>
        {summary.k}
        <var>S/ha:</var>
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
