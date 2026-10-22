import { courses } from "./data/courses";

function CourseCard({ course }) {
  return (
    <article className="card">
      <h2>{course.title}</h2>
      <p>{course.lecturer}</p>

      <p>Progress: {course.progress}%</p>
      <progress
        value={course.progress}
        max="100"
        aria-label={`${course.title} progress`}
      />

      <p>
        <strong>{course.completed ? "Completed" : "In progress"}</strong>
      </p>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <h1>My Course Dashboard</h1>

      {courses.length > 0 ? (
        <section className="grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </section>
      ) : (
        <p>No courses yet. Your courses will appear here.</p>
      )}
    </main>
  );
}