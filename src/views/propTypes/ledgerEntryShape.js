import PropTypes from "prop-types";

const { number, shape, string } = PropTypes;

export default shape({
  id: string.isRequired,
  date: string.isRequired,
  description: string.isRequired,
  account: string.isRequired,
  subledgerAccount: string,
  amount: number.isRequired,
});
