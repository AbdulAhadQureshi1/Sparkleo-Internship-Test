import PropTypes from "prop-types";

InputSet.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string || PropTypes.number,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function InputSet(props) {
  return (
    <div className="input-set">
      <label htmlFor={props.label}>{props.label} <span className="req-mark">*</span></label>
      <input
        name={props.label}
        onChange={props.onChange}
        type={props.type}
        value={props.value} 
        placeholder=""
        required
      />
    </div>
  );
}

export { InputSet };
