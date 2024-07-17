import { PropTypes } from "prop-types";

export default function Square({ value }) {
  return (
    <>
      <button className="square">{value}</button>
    </>
  );
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
};
