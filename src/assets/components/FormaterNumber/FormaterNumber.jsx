import Numeral from "numeral";

const FormaterNumber = ({ number }) => {
  const formated = Numeral(number).format("$0,0.00");
  return <div>{formated}</div>;
};
export default FormaterNumber;
