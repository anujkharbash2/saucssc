export const events = [
  {
    title: 'Mathematics Workshop',
    date: '2024-11-15',
    description: 'Advanced calculus problem-solving techniques',
    location: 'Room LS311',
    time: '10:00 AM - 12:00 PM',
    instructor: 'Prof. R.K. Sharma ',
  },
  {
    title: 'Physics Seminar',
    date: '2024-11-20',
    description: 'Understanding quantum mechanics',
    location: 'Physics Lab LS 209',
    time: '2:00 PM - 4:00 PM',
    instructor: 'ASST.Prof. Jyotsana Sharma  ',
  },
  {
    title: 'CSE Lab',
    date: '2024-11-25',
    description: 'C Programming',
    location: 'LS303',
    time: '1:00 PM - 3:00 PM',
    instructor: 'Asst. Prof. Bijoy CC',
  },
  {
    title: 'Computer Science Workshop',
    date: '2024-11-28',
    description: 'Introduction to Machine Learning',
    location: 'Computer Lab LS 002',
    time: '3:00 PM - 5:00 PM',
    instructor: 'Asso. Prof. Reshma Rastogi',
  },
  {
    title: 'ITSA Lecture',
    date: '2024-12-01',
    description: 'Climate change',
    location: 'Room LS 311',
    time: '11:00 AM - 1:00 PM',
    instructor: 'Dr. Sanjay Chaturvedi',
  },
];

export function createEventCard(event) {
  return `
      <div class="event-card">
          <div class="event-date">
              <span class="day">${new Date(event.date).getDate()}</span>
              <span class="month">${new Date(event.date).toLocaleString(
                'default',
                { month: 'short' }
              )}</span>
          </div>
          <div class="event-details">
              <h3>${event.title}</h3>
              <p class="event-time"><i class="far fa-clock"></i> ${
                event.time
              }</p>
              <p class="event-location"><i class="fas fa-map-marker-alt"></i> ${
                event.location
              }</p>
              <p class="event-instructor"><i class="fas fa-user"></i> ${
                event.instructor
              }</p>
              <p>${event.description}</p>
          </div>
      </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const eventsContainer = document.getElementById('upcoming-events');
  if (eventsContainer) {
    eventsContainer.innerHTML = events
      .map((event) => createEventCard(event))
      .join('');
  }
});
