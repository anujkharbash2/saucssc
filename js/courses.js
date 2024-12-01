export const courses = [
  {
    id: 'mathematics',
    title: 'MTH 101',
    description: 'Advanced Calculus covering Real analysis, Calculus, and more',
    image: '../assets/images/maths.jpg',
  },
  {
    id: 'physics',
    title: 'PHY 101',
    description:
      'Enginnering physics course covering Quantum Mechanics, Semiconductor, and more',
    image: '../assets/images/sau.jpg',
  },
  {
    id: 'cse',
    title: 'CSE 101',
    description: 'Learn programming, algorithms, and data structures',
    image: '../assets/images/sau.jpg',
  },
  {
    id: 'english',
    title: 'ENG-01',
    description: 'Helping to improve Communication skills and more',
    image: '../assets/images/sau.jpg',
  },
  {
    id: 'hss',
    title: 'ITSA',
    description: 'Introduction to South Asia',
    image: '../assets/images/sau.jpg',
  },
];

export function createCourseCard(course) {
  return `
      <div class="course-card">
          <img src="${course.image}" alt="${course.title}" onerror="this.src='../assets/images/default-course.jpg'" style="width: 100%; border-radius: 8px;">
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <a href="course-details/${course.id}.html" class="btn">View Course</a>
      </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const coursesContainer = document.getElementById('courses-container');
  if (coursesContainer) {
    coursesContainer.innerHTML = courses
      .map((course) => createCourseCard(course))
      .join('');
  }
});
