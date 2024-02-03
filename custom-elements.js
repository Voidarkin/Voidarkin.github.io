class PageHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav>
            <div class="header">
                <h1>Joshua Griffis</h1>
            </div>
            <div class="links">
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li>
                        <a href="portfolio.html">Portfolio</a>
                        <ul>
                            <!-- Add new project links here -->

                            <li><a href="portfolio.html#WHWGAH">We Have Watermelon Game At Home</a></li>
							<li><a href="portfolio.html#RelicOdyssey">Relic Odyssey: Ruins of Xantao</a></li>
                            <li><a href="portfolio.html#DyingRealm">Dying Realm</a></li>
                   	        <li><a href="portfolio.html#AxelNOddol">Axel'N'Oddol</a></li>
                   	        <li><a href="portfolio.html#Colors">Colors(Game Jam Submission)</a></li>
                   	        <li><a href="portfolio.html#SummerSideProject">Summer Tech Demo</a></li>
                            <li><a href="portfolio.html#ProjectDreamer">Project Dreamer</a></li>
               	        </ul>
                    </li>
                    <li><a href="resume.html">Resume</a></li>
                    <li><a href="contact.html">Contact Me</a></li>
                </ul>
            </div>
            <div class="smallLinks">
                <button class="toggle-menu">&#9776;</button>
            </div>
            <div class="dropdownLinks">
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="resume.html">Resume</a></li>
                    <li><a href="mailto:Joshua_Griffis@outlook.com" target="_blank" rel="noopener noreferrer">
                            <img src="../Images/email-icon.png" alt="Email icon" class="icon">
                            <span class="label">Mail</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/joshua-griffis-b3a421230/" target="_blank" rel="noopener noreferrer">
                            <img src="../Images/LinkedInLogo.png" alt="LinkedIn icon" class="icon">
                            <span class="label">LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <script>
            const toggleMenuButton = document.querySelector('.smallLinks .toggle-menu');
            const linkList = document.querySelector('.dropdownLinks');
            const nav = document.querySelector('nav');

            toggleMenuButton.addEventListener('mouseenter', () => {
                linkList.classList.add('active');
            });

            linkList.addEventListener('mouseenter', () => {
                linkList.classList.add('active');
            });

            linkList.addEventListener('mouseleave', () => {
                linkList.classList.remove('active');
            });

            nav.addEventListener('mouseleave', () => {
                linkList.classList.remove('active');
            });

        </script>
    `
    }
}
window.customElements.define('page-header', PageHeader)