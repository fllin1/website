// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  function displayProject(project) {
    const projectContent = document.getElementById('project-content');
    let content = '';

    switch(project) {
      case 'deepThought':
        content = '<h3>Deep Thought</h3><p>This project showcases advanced AI development involving deep learning models used for problem-solving.</p>';
        break;
      case 'academicProjects':
        content = '<h3>Academic Projects</h3><p>These are various academic projects involving data analysis, machine learning models, and exploratory research.</p>';
        break;
      case 'chessBot':
        content = '<h3>Chess Bot</h3><p>This project is about creating a chess-playing bot utilizing artificial intelligence techniques and algorithms.</p>';
        break;
      default:
        content = '<h3>Project Details</h3><p>Welcome to the projects section. Please select a project from the buttons below to view more details.</p>';
    }

    projectContent.innerHTML = content;
  }