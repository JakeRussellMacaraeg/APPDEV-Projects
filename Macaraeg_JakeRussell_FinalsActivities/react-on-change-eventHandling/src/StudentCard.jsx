export default function StudentCard({ students }) {
  return (
      <div>
          <h2>Attendance List</h2>
          <ul>
              {students.map((student, index) => (
                  <li key={index}>
                      <p>ID: {student.id}</p>
                      <p>Name: {student.name}</p>
                      <p>Course: {student.course}</p>
                      <p>Age: {student.age}</p>
                      <p>Gender: {student.gender}</p>
                      <p>Date: {student.date}</p>
                  </li>
              ))}
          </ul>
      </div>
  );
}
