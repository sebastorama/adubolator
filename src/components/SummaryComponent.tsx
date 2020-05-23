import React, { Fragment } from "react";
import { Summary } from "../models";

type SummaryComponentProps = {
  summary: Summary;
};
function SummaryComponent({ summary }: SummaryComponentProps) {
  return (
    <Fragment>
      <p>{JSON.stringify(summary)}</p>
    </Fragment>
  );
}

export default SummaryComponent;
