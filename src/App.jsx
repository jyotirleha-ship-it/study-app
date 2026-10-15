import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") {
      setError("Name is required");
      return;
    }
    setStudents([...students, name.trim()]);
    setName("");
    setError("");
  }
  return (
    <div>
      <h1>Student Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
      <p>{error}</p>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
