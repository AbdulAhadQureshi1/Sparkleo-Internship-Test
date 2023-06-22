import btn from '../assets/coolicon.png'
import PropTypes from "prop-types";

EmployeeCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

function EmployeeCard(props) {

  return (
    <div className="card">
      <div className="text">
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <p>{props.phone}</p>
      </div>
      <button className="delete-btn" onClick={() => props.onRemove(props.email)}>
        <img src={btn} alt='delete' />
      </button>
    </div>
  );
}

export { EmployeeCard };
