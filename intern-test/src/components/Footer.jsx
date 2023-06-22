import { EmployeeCard } from "./EmployeeCard";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <h2>Current Employees</h2>
        <EmployeeCard />
      </div>
    </footer>
  );
}
