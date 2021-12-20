import { Spinner } from "react-bootstrap";
import { useState } from "react";
function Slider() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
export default Slider;
