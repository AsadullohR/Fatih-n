class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
        <div class="container container-nav">
            <a href="/" class="navbar-brand">fatih camii</a>
            <button type="button" class="navbar-toggler" data-bs-target="#navbarNav" data-bs-toggle="collapse"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="mx-auto"></div>
                <ul class="navbar-nav nav nav-pills">
                    <li class="nav-item">
                        <a href="/" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="service-nikah.html">Nikah</a></li>
                            <li><a class="dropdown-item" href="contact.html">Azan for kids</a></li>
                            <li><a class="dropdown-item" href="contact.html">Funeral</a></li>
                            <li><a class="dropdown-item" href="contact.html">Others</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="about.html" class="nav-link">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a href="events.html" class="nav-link">Events</a>
                    </li>
                    <li class="nav-item">
                        <a href="contact.html" class="nav-link">Contact</a>
                    </li>
                    <li class="nav-item">
                        <button class="cta">
                            <a href="donate.html" class="nav-link text-white cta-link">Donate</a>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        `
    }

}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
        <div class="container-footer">
            <div class="row">
                <div class="footer-col">
                    <h4>Masjid</h4>
                    <ul>
                        <li><a href="about.html">about us</a></li>
                        <li><a href="services.html">our services</a></li>
                        <li><a href="events.html">events</a></li>
                        <li><a href="donate.html">dontate</a></li>
                        <li><a href="contact.html">contact us</a></li>

                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Our services</h4>
                    <ul>
                    <li><a href="service-nikah.html">Nikah</a></li>
                    <li><a href="contact.html">Azan for kids</a></li>
                    <li><a href="contact.html">Funeral</a></li>
                    <li><a href="contact.html">Others</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>developer</h4>
                    <ul>
                        <li><a class="developer" href="https://www.asadulloh.com/">Asadulloh</a></li>
                    </ul>
                    <div class="social-links">
                        <a href="https://www.asadulloh.com/"><i id="social" class="fas fa-paperclip social"></i></a>
                        <a href="https://t.me/Asadulloh_Rakhimov"><i id="social"
                                class="fas fa-paper-plane social"></i></a>
                        <a href="https://www.instagram.com/asadulloh_rahim/"><i class="fab fa-instagram social"></i></a>
                        <a href="https://www.linkedin.com/in/asadulloh-rakhimov/"><i
                                class="fab fa-linkedin-in social"></i></a>
                    </div>
                </div>


            </div>
        </div>
    </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)

class MyLinks extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="shared/shared.css">
    <link rel="stylesheet" href="shared/index.css">
    <script src="https://kit.fontawesome.com/8f77dbd0aa.js" crossorigin="anonymous"></script>

        `}
}
customElements.define('my-links', MyLinks)

class MyScripts extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"></script>
    <!-- <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
        integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
        crossorigin="anonymous"></script> -->
    <script src="shared/shared.js"></script>
  

        `}
}
customElements.define('my-scipts', MyScripts)

const nav = document.querySelector('nav');
const navbarCollapse = document.querySelector('.navbar-collapse');
const container = document.querySelector('.container');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow');
        navbarCollapse.classList.add('shrink');
        container.classList.add('shrink');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
        container.classList.remove('shrink');
        navbarCollapse.classList.remove('shrink');
    }
})