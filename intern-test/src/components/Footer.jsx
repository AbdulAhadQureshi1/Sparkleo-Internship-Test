import { EmployeeCard } from "./EmployeeCard";
import PropTypes from "prop-types";

Footer.propTypes = {
  list: PropTypes.array.isRequired,
  removeUser: PropTypes.func.isRequired,
};

export default function Footer(props) {
  const removeUser = (email) => {
    props.removeUser(email);
  };
  return (
    <footer className="footer">
      <div className="wrapper">
        <h2>Current Employees</h2>
        {props.list.length === 0
          ? "No employees"
          : props.list.map((user) => (
              <EmployeeCard
                key={user.email}
                name={user.name}
                email={user.email}
                phone={user.phone}
                onRemove={(email) => removeUser(email)}
              />
            ))}
      </div>
    </footer>
  );
}
