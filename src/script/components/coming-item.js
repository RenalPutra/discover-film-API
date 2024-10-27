class Comingitem extends HTMLElement {
  set coming(coming) {
    this._coming = coming;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
              <div class="col p-3">
                <div class="card h-100">
                  <img
                    src="https://image.tmdb.org/t/p/w500${this._coming.poster_path}"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body bg-dark">
                    <h5 class="card-title">${this._coming.original_title}</h5>
                    <p class="card-text promosi-movie">
                    ${this._coming.overview}
                    </p>
                  </div>
                  <div class="card-footer bg-dark">
                    <small class="text-warning">Release date ${this._coming.release_date}</small>
                    
                  </div>
                </div>
              </div>
            
                
                `;
  }
}

customElements.define("coming-movies", Comingitem);
