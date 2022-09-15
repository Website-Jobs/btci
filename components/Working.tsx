import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
interface Props {
  loading: boolean;
}

const Working = ({ loading }: Props) => (
  <PropagateLoader color="#011a41" loading={loading} size={25} />
);

export default Working;