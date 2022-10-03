import React from "react";
import { Button } from "reactstrap";

const OptionButton = (props) => {
  return (
    <div>
      <Button color="primary" onClick={props.fn}>
        {props.name}
      </Button>
    </div>
  );
};

export default OptionButton;
