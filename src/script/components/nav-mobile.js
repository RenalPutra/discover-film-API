class Navbarmo extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  

                            <nav class="navbar navbar-dark bg-me fixed-top">
                            <div class="container-fluid" id="nav-con">
                            
                            <div class="p-2 col-xs-2">
                            <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            </div>
                            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                <div class="d-flex pt-3 p-3 " id="nav-cone">
                                
                                <button type="button" class=" col x-side btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <h5 class="offcanvas-title text-warning p-3" id="offcanvasDarkNavbarLabel">MENU</h5>
                                <div class="offcanvas-body" id="nav-pad">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                    <a class="nav-link active text-warning" id="bt-pop2" aria-current="page" href="#">POPULAR</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link text-warning" id="bt-com2" href="#">UP COMING</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link text-warning" id="bt-rat2" href="#">TOP RATED</a>
                                    </li>
                                </ul>
                        
                                </div>
                            </div>
                            </div>
                        </nav>
                    
                
                    
                    `;
  }
}

customElements.define("nav-mo", Navbarmo);
