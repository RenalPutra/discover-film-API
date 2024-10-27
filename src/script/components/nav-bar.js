import "./search-bar";

class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                    
                      

                    <nav class="p-4">
                    <div
                        class="nav nav-tabs  d-flex justify-content-end"
                        id="nav-tab"
                        role="tablist"
  
                    >
                        
                        <div class="d-flex col justify-content-start" >
                        <button
                            class="nav-link active text-warning fw-bold nav-f"
                            id="bt-pop"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-home"
                            type="button"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                        >
                            POPULAR
                        </button>
                        <button
                            class="nav-link text-warning fw-bold nav-f"
                            id="bt-com"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile"
                            type="button"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                        >
                            UP COMING
                        </button>
                        <button
                            class="nav-link text-warning fw-bold nav-f"
                            id="bt-rat"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-contact"
                            type="button"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                        >
                            TOP RATED
                        </button>
                        </div>
                    
                        
                    </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                    <div
                        class="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                        tabindex="0"
                    ></div>
                    <div
                        class="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        tabindex="0"
                    ></div>
                    <div
                        class="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                        tabindex="0"
                    ></div>
                    <div
                        class="tab-pane fade"
                        id="nav-disabled"
                        role="tabpanel"
                        aria-labelledby="nav-disabled-tab"
                        tabindex="0"
                    ></div>
                    </div>

                    
                    
                
                    
                    `;
  }
}

customElements.define("nav-bar", Navbar);
