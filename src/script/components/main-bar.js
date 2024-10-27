class Mainbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="writer position-absolute top-50 start-50 translate-middle"
        >
          <h1 class="write text-center">RANDOMLY FILM INFORMATION</h1>
          <p class="text-center space-kun">
            This Website can give you information about movies
          </p>
        </div>
        <div class="carousel-item active" data-bs-interval="2000">
          <img
            src="https://picsum.photos/1000/600"
            class="d-block sld"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="https://picsum.photos/900/500"
            class="d-block sld"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="https://picsum.photos/800/400"
            class="d-block sld"
            alt="..."
          />
        </div>
      </div>
    </div>
    <article id="popular" class="animate__animated animate__fadeIn">
      <div class="h-article">
        <div class="head-a">
          <h2>Popular Movies</h2>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-4 " id="popku"></div>
    </article>
    <article id="coming" class="animate__animated animate__fadeIn" hidden>
      <div class="h-article">
        <div class="head-a">
          <h2>Up Coming Movies</h2>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-4 " id="comku"></div>
    </article>
    <article id="top" class="animate__animated animate__fadeIn" hidden>
      <div class="h-article">
        <div class="head-a">
          <h2>Top Rated Movies</h2>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-4 " id="topku"></div>
    </article>
    <article id="cariM" class="animate__animated animate__fadeIn" hidden>
      <div class="h-article">
        <div class="head-a">
          <h2>Search Results</h2>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-4 " id="cari"></div>
    </article>

    <!-- for pad and mobile -->

    <article id="popular2" class="animate__animated animate__fadeIn" hidden>
      <div class="h-article">
        <div class="head-a">
          <h2>Popular Movies</h2>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 g-4 " id="popku2"></div>
    </article>
    <article id="coming2" class="animate__animated animate__fadeIn" hidden>
      <div class="h-article">
        <div class="head-a">
          <h2>UpComing Movies</h2>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 g-4 " id="comku2"></div>
    </article>
    <article id="top2" class="animate__animated animate__fadeIn" hidden>
      <div class="h-article">
        <div class="head-a">
          <h2>Top Rated Movies</h2>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 g-4 " id="topku2"></div>
    </article>
    <article id="cariM2" class="animate__animated animate__fadeIn" hidden>
      <div class="h-article">
        <div class="head-a">
          <h2>Search Results</h2>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 g-4 " id="cari2"></div>
    </article>
 
                    
                        
                        `;
  }
}

customElements.define("content-list", Mainbar);
