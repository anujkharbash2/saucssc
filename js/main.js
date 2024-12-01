import { courses, createCourseCard } from './courses.js';
import { events, createEventCard } from './events.js';
import { news, createNewsCard } from './news.js';

function displayFeaturedContent() {
  // Featured Courses
  const featuredCourses = document.getElementById('featured-courses');
  if (featuredCourses) {
    featuredCourses.innerHTML = courses
      .slice(0, 3)
      .map((course) => createCourseCard(course))
      .join('');
  }

  // Upcoming Events
  const upcomingEvents = document.getElementById('upcoming-events');
  if (upcomingEvents) {
    upcomingEvents.innerHTML = events
      .slice(0, 2)
      .map((event) => createEventCard(event))
      .join('');
  }

  // Recent News
  const recentNews = document.getElementById('recent-news');
  if (recentNews) {
    recentNews.innerHTML = news
      .slice(0, 2)
      .map((item) => createNewsCard(item))
      .join('');
  }
}

document.addEventListener('DOMContentLoaded', displayFeaturedContent);
