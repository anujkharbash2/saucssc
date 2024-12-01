export const news = [
  {
    title: 'New Course Materials Added',
    date: '2024-12-10',
    content:
      'We have added new study materials for Mathematics and Physics courses.',
    category: 'Academic',
    author: 'Tech Team',
  },
  {
    title: 'New Certificate Couses Anncounced By SAU',
    date: '2024-12-08',
    content: 'New Courses started in south asian university FEES: ₹5000',
    category: 'Info',
    author: 'Tech Team',
  },
  {
    title: 'Student Achievement',
    date: '2024-12-05',
    content:
      'Congratulations to our students who excelled in recent competitions.',
    category: 'Achievements',
    author: 'Student',
  },
  {
    title: 'Demo 1234',
    date: '2024-12-12',
    content: '',
    category: 'Partnerships',
    author: 'Admin',
  },
  {
    title: 'Winter Internship',
    date: '2024-12-29',
    content: 'Admit card out for your sapce lab GoI Winter Internship Exam',
    category: 'Programs',
    author: 'SAU Student',
  },
];

export function createNewsCard(newsItem) {
  return `
      <div class="news-card">
          <div class="news-meta">
              <span class="news-category">${newsItem.category}</span>
              <span class="news-date">${new Date(
                newsItem.date
              ).toLocaleDateString()}</span>
          </div>
          <h3>${newsItem.title}</h3>
          <p>${newsItem.content}</p>
          <div class="news-footer">
              <span class="news-author">By ${newsItem.author}</span>
              <a href="#" class="read-more">Read More</a>
          </div>
      </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const newsContainer = document.getElementById('news-container');
  if (newsContainer) {
    newsContainer.innerHTML = news
      .map((newsItem) => createNewsCard(newsItem))
      .join('');
  }
});
