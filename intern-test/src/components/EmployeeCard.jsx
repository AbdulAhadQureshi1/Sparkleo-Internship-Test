import btn from '../assets/coolicon.png'
function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="text">
        <h2>Name</h2>
        <p>Email</p>
        <p>Phone</p>
      </div>
      <button className="delete-btn">
        <img src={btn} alt='delete' />
      </button>
    </div>
  );
}

export { EmployeeCard };
