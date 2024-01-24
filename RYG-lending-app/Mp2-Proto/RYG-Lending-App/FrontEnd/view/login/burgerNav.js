document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.style.display = 'none';
    });

    const setActiveSection = (sectionId) => {
      sections.forEach(section => {
        if (section.id === sectionId) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    }

    const navLinks = document.querySelectorAll('.navbar-nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        setActiveSection(sectionId);

        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        navbarToggler.classList.add('collapsed');
        navbarCollapse.classList.remove('show');
      });
    });

    setActiveSection('section1');
  });

//   start difference function // 

const totalCollectionsElement = document.getElementById('totalCollections');
const totalReleaseElement = document.getElementById('totalRelease');

const totalCollections = parseInt(totalCollectionsElement.innerHTML.replace('₱', '').replace(',', ''));
const totalRelease = parseInt(totalReleaseElement.innerHTML.replace('₱', '').replace(',', ''));

const difference = totalCollections - totalRelease;

const differenceElement = document.getElementById('total-difference');
differenceElement.innerHTML = `₱${difference.toLocaleString()} <i class='bx bx-money' style="font-size: 35px;"></i>`;