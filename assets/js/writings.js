// Writings page accordion functionality

// Toggle year sections
function toggleYear(yearId) {
  const yearContent = document.getElementById(yearId);
  const yearButton = yearContent.previousElementSibling;
  const toggleIcon = yearButton.querySelector('.toggle-icon');

  if (yearContent.style.display === 'none' || yearContent.style.display === '') {
    yearContent.style.display = 'block';
    toggleIcon.textContent = '▼';
    yearButton.classList.add('expanded');
  } else {
    yearContent.style.display = 'none';
    toggleIcon.textContent = '▶';
    yearButton.classList.remove('expanded');
  }
}

// Toggle month sections
function toggleMonth(monthId) {
  const monthContent = document.getElementById(monthId);
  const monthButton = monthContent.previousElementSibling;
  const toggleIcon = monthButton.querySelector('.toggle-icon');

  if (monthContent.style.display === 'none' || monthContent.style.display === '') {
    monthContent.style.display = 'block';
    toggleIcon.textContent = '▼';
    monthButton.classList.add('expanded');
  } else {
    monthContent.style.display = 'none';
    toggleIcon.textContent = '▶';
    monthButton.classList.remove('expanded');
  }
}

// Initialize accordion state on page load
document.addEventListener('DOMContentLoaded', function() {
  // Start with current year expanded and current month expanded
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  // Expand current year
  const currentYearElement = document.getElementById(`year-${currentYear}`);
  if (currentYearElement) {
    currentYearElement.style.display = 'block';
    const yearButton = currentYearElement.previousElementSibling;
    yearButton.classList.add('expanded');
  }

  // Expand current month
  const currentMonthElement = document.getElementById(`month-${currentYear}-${currentMonth}`);
  if (currentMonthElement) {
    currentMonthElement.style.display = 'block';
    const monthButton = currentMonthElement.previousElementSibling;
    monthButton.classList.add('expanded');
  }

  // Collapse all other years and months initially
  const allYearContents = document.querySelectorAll('.year-content');
  const allMonthContents = document.querySelectorAll('.month-content');

  allYearContents.forEach(yearContent => {
    if (yearContent.id !== `year-${currentYear}`) {
      yearContent.style.display = 'none';
      const toggleIcon = yearContent.previousElementSibling.querySelector('.toggle-icon');
      toggleIcon.textContent = '▶';
    }
  });

  allMonthContents.forEach(monthContent => {
    if (monthContent.id !== `month-${currentYear}-${currentMonth}`) {
      monthContent.style.display = 'none';
      const toggleIcon = monthContent.previousElementSibling.querySelector('.toggle-icon');
      toggleIcon.textContent = '▶';
    }
  });
});