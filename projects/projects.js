
// Set current year in footer
document.addEventListener('DOMContentLoaded', function () {
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById("year").textContent = year;

    // Dark/Light mode toggle setup
    const icon = document.getElementById('icon');
    const body = document.body;
    if (localStorage.getItem('theme') === 'light') {
        body.classList.remove('dark-theme');
        icon.src = '../images/2408610.png';
        icon.title = 'Switch to dark mode';
    } else {
        body.classList.add('dark-theme');
        icon.src = '../images/sun.png';
        icon.title = 'Switch to light mode';
    }
    icon.onclick = function () {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            icon.src = '../images/sun.png';
            icon.title = 'Switch to light mode';
            localStorage.setItem('theme', 'dark');
        } else {
            icon.src = '../images/2408610.png';
            icon.title = 'Switch to dark mode';
            localStorage.setItem('theme', 'light');
        }
    };

    // Nav Toggle (Hamburger) functionality
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
        });
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
        navToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                navToggle.classList.toggle('open');
                navMenu.classList.toggle('open');
            }
        });
    }

    // Project filtering logic
    // Define your project data here (replace with your real data)
    const menu = [
        { title: 'Financial Saudi Market Analysis', category: 'Data Analysis', img: 'statistics_2758772.png', desc: 'This is a financial analysis of performance of most effective sectors in Saudi Arabia 2019-2024', link: 'https://github.com/ProfASEM/financial-saudi-market-analysis' },
        { title: 'MENA Healthcare Efficiency & Outcomes', category: 'Data Analysis', img: 'statistics_2758772.png', desc: 'Consulting-style healthcare efficiency analysis across MENA using Python and Power BI.', link: 'https://github.com/ProfASEM/mena-healthcare-efficiency' },
        { title: 'Urban Living Efficiency', category: 'Data Analysis', img: 'statistics_2758772.png', desc: 'Data-driven analysis of urban living efficiency across MENA cities using Numbeo data (2025).', link: 'https://github.com/ProfASEM/urban-living-efficiency' },
        { title: 'Car Sales Analysis', category: 'Data Analysis', img: 'statistics_2758772.png', desc: 'A full Business Intelligence case study combining Excel preprocessing, data modeling, KPIs, and interactive dashboards.', link: 'https://github.com/ProfASEM/car-sales-analysis' },
        { title: 'World Data Analysis', category: 'Data Analysis', img: 'statistics_2758772.png', desc: 'Explored global datasets covering population, economy, and demographics to uncover cross-country patterns.<br>Used data visualization and analytical techniques to compare regions and highlight key global insights.', link: 'https://github.com/ProfASEM/world-data-analysis' },
        { title: 'E Commerce Analysis', category: 'Data Analysis', img: 'statistics_2758772.png', desc: 'Analyzed e-commerce sales and customer behavior data to evaluate business performance.<br>Applied customer segmentation techniques to identify purchasing patterns and support data-driven decisions.', link: 'https://github.com/ProfASEM/e-commerce-analysis' },
        { title: 'Logistics Performance Analysis', category: 'Data Analysis', img: 'statistics_2758772.png', desc: 'Power BI dashboard analyzing logistics performance, delivery delays, carrier efficiency, and regional risk.', link: 'https://github.com/ProfASEM/logistics-performance-analysis' },
        { title: 'Scroll Page', category: 'Web Development', img: 'www_16328568.png', desc: 'Responsive Scroll Page', link: 'https://github.com/ProfASEM/scrollpage' },
        { title: 'Menu Page', category: 'Web Development', img: 'www_16328568.png', desc: 'Resturaunt menu EN/AR<br> versions responsive page', link: 'https://github.com/ProfASEM/menu' },
        { title: 'Prime Numbers', category: 'Python', img: 'python_5968350.png', desc: 'A project that finds<br> the prime numbers between<br>1 and the number has <br>entered by user ', link: 'https://github.com/ProfASEM/mini_projects/blob/main/primeNumber.py' },
        { title: 'Factoriel', category: 'Python', img: 'python_5968350.png', desc: 'Basic project that<br> calculates the factoriel<br> of a positive integer ', link: 'https://github.com/ProfASEM/mini_projects/blob/main/Factoriyel.py' },
        { title: 'Fibonacci <br> & <br> Lucas numbers', category: 'Python', img: 'python_5968350.png', desc: 'Basic project that <br>evaluates any <br>fibonacci or lucas number ', link: 'https://github.com/ProfASEM/mini_projects/blob/main/Fib%26Luc.py' },
        { title: 'Random Poem Page', category: 'Web Development', img: 'www_16328568.png', desc: 'If you get bored of lorem,<br> this project can generate<br> a random poem depends <br> how paragrafs you set it', link: 'https://github.com/ProfASEM/random-poem-page' },
        { title: 'Home Page<br> Online Shopping', category: 'Web Development', img: 'www_16328568.png', desc: 'A simple home page<br> of online shopping<br> of a product', link: 'https://github.com/ProfASEM/homepage-online-shopping' },
        { title: 'Permutations<br>&<br>Combination', category: 'Python', img: 'python_5968350.png', desc: 'A project that evaluates<br> permutation &<br> combination ', link: 'https://github.com/ProfASEM/mini_projects/blob/main/Perm%26Comb.py' },
        { title: 'Vectors', category: 'Python', img: 'python_5968350.png', desc: 'a project about vectors', link: 'https://github.com/ProfASEM/mini_projects/blob/main/vectors.py' },
        { title: 'General Questions Page', category: 'Web Development', img: 'www_16328568.png', desc: 'A page of general questions<br> with collapse property<br> with dark-light mode', link: 'https://github.com/ProfASEM/general-questions-page'},


        // Add more projects as needed
    ];

    const Menu = document.getElementsByTagName("main")[0];
    const buttons = document.querySelector(".button-container");

    // Display all projects on load
    displayMenuItems(menu);

    // Get unique categories
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);

    // Create filter buttons
    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    }).join("");
    buttons.innerHTML = categoryBtns;

    // Add event listeners to filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                return menuItem.category === category;
            });
            if (category === 'all') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
});

// Display project cards in the main section
function displayMenuItems(menuItems) {
    const Menu = document.getElementsByTagName("main")[0];
    let displayMenu = menuItems.map(function (item) {
        return `<div class="project">
            <div class="project-image">
                <img src="../images/${item.img}" alt="${item.title}">
            </div>
            <div class="project-info">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <a href="${item.link}" class="project-link" target="_blank">View Project</a>
            </div>
        </div>`;
    }).join("");
    Menu.querySelector('.projects-container').innerHTML = displayMenu;
}

// --- End of file ---