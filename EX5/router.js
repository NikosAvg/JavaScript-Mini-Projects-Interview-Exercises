function handleRouting() {
  const hash = window.location.hash || '#home'; // default to home
  const target = hash.substring(1); // remove the '#'

  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  // Show target section if exists
  const activeSection = document.getElementById(target);
  if (activeSection) {
    activeSection.classList.add('active');
  } else {
    document.getElementById('notfound').classList.add('active');
  }
}

// Run on hash change
window.addEventListener('hashchange', handleRouting);

// Run on initial load
window.addEventListener('DOMContentLoaded', handleRouting);
