import { courseDetails } from './courseData.js';

function createResourceList(resources, type) {
  if (resources.length === 0) {
    return '<p>No resources uploaded yet.</p>';
  }
  
  return `
    <ul class="resource-list">
      ${resources.map(resource => `
        <li>
          <a href="${resource.url}" target="_blank" rel="noopener noreferrer">
             ${resource.name || resource.split('/').pop()} <!-- Use filename or resource name -->
          </a>
          <span class="upload-date">${resource.uploadDate || ''}</span>
        </li>
      `).join('')}
    </ul>
  `;
}

export function renderCourseDetails(courseId) {
  const course = courseDetails[courseId];
  if (!course) return null;

  return `
    <div class="course-details">
      <div class="course-header">
        <img src="${course.image}" alt="${course.title}" 
             onerror="this.src='../assets/images/banner1.jpg'" 
             class="course-banner">
        <h1>${course.title} - ${course.fullTitle}</h1>
      </div>

      <div class="course-info">
        <div class="info-section">
          <h2>Course Information</h2>
          <p>${course.description}</p>
          <p><strong>Instructor:</strong> ${course.instructor}</p>
          <a href="${course.outline}" class="btn download-btn" download>
            Download Course Outline (PDF)
          </a>
        </div>

        <div class="info-section">
          <h2>Schedule</h2>
          <p><strong>Lectures:</strong> ${course.schedule.lectures}</p>
          <p><strong>Classroom:</strong> ${course.schedule.classroom}</p>
          <p><strong>Lab:</strong> ${course.schedule.lab}</p>
          <p><strong>Lab Room:</strong> ${course.schedule.labRoom}</p>
        </div>

        <div class="resources-section">
          <h2>Course Resources</h2>
          
          <div class="resource-category">
            <h3>Lecture Notes</h3>
            ${createResourceList(course.resources.lectureNotes, 'notes')}
          </div>

          <div class="resource-category">
            <h3>Practice Sheets</h3>
            ${createResourceList(course.resources.practiceSheets, 'practice')}
          </div>

          <div class="resource-category">
            <h3>Exam Papers</h3>
            ${createResourceList(course.resources.examPapers, 'exam')}
          </div>
        </div>
      </div>
    </div>
  `;
}