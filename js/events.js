export const events = [
  {
    title: 'AC End-Sem',
    date: '2024-12-02',
    description: 'Advanced calculus End Sem Exam',
    location: 'Room LS301 to LS 304',
    time: '02:00 PM - 5:00 PM',
   instructor: 'RK',
  },
  {
    title: 'Physics End-Sem',
    date: '2024-12-04',
    description: 'ENgineering Physics End-Sem Exam',
    location: 'Room LS301 to LS 304',
    time: '2:00 PM - 5:00 PM',
    instructor: 'JS',
  },
  {
    title: 'English-1 End-sem',
    date: '2024-12-06',
    description: 'English - 1 End-sem Examination',
    location: 'Room LS301 to LS 304',
    time: '2:00 PM - 5:00 PM',
    instructor: 'DL',
  },
  {
    title: 'Physics Lab - Exam',
    date: '2024-12-09',
    description: 'Physics Lab - Exam and Viva',
    location: 'PHY LAB Ls109',
    time: '10:00 AM - 1:00 PM',
    instructor: 'JS',
  },
  {
    title: 'CSE 101 CT End-Sem',
    date: '2024-12-10',
    description: 'Computational thinking End-Sem Examination',
    location: 'Room LS301 to LS 304',
    time: '10:00 AM - 1:00 PM',
    instructor: 'BCC',
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
