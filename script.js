// Sample course data
const courses = [
  {
    id: 1,
    title: "HTML Basics",
    description: "Learn the building blocks of the web using HTML.",
    lessons: ["Introduction to HTML", "HTML Tags", "Forms & Inputs"],
    completed: false
  },
  {
    id: 2,
    title: "CSS Fundamentals",
    description: "Style your web pages with CSS.",
    lessons: ["Selectors", "Box Model", "Flexbox & Grid"],
    completed: false
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    description: "Make your web pages interactive with JavaScript.",
    lessons: ["Variables & Data Types", "Functions & Loops", "DOM Manipulation"],
    completed: false
  }
];

const coursesContainer = document.getElementById("courses-container");
const courseDetail = document.getElementById("course-detail");
const courseListSection = document.getElementById("course-list");

const backBtn = document.getElementById("back-btn");
const courseTitle = document.getElementById("course-title");
const courseDescription = document.getElementById("course-description");
const lessonsList = document.getElementById("lessons-list");
const completeBtn = document.getElementById("complete-btn");

let currentCourse = null;

// Function to render courses
function renderCourses() {
  coursesContainer.innerHTML = "";
  courses.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <p>Status: ${course.completed ? "✅ Completed" : "❌ Not Completed"}</p>
    `;
    card.addEventListener("click", () => showCourseDetail(course.id));
    coursesContainer.appendChild(card);
  });
}

// Show course detail
function showCourseDetail(id) {
  currentCourse = courses.find(c => c.id === id);
  courseTitle.textContent = currentCourse.title;
  courseDescription.textContent = currentCourse.description;
  lessonsList.innerHTML = "";
  currentCourse.lessons.forEach(lesson => {
    const li = document.createElement("li");
    li.textContent = lesson;
    lessonsList.appendChild(li);
  });

  courseListSection.classList.add("hidden");
  courseDetail.classList.remove("hidden");
}

// Back to course list
backBtn.addEventListener("click", () => {
  courseDetail.classList.add("hidden");
  courseListSection.classList.remove("hidden");
  renderCourses();
});

// Mark course as completed
completeBtn.addEventListener("click", () => {
  if (currentCourse) {
    currentCourse.completed = true;
    alert(`Course "${currentCourse.title}" marked as completed!`);
    renderCourses();
    courseDetail.classList.add("hidden");
    courseListSection.classList.remove("hidden");
  }
});

// Initial render
renderCourses();
