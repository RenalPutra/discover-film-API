class Searchlist extends HTMLElement {
  set searchList(search) {
    this._search = search;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
              <div class="col p-3">
                <div class="card h-100 ">
                  <img
                    src="https://image.tmdb.org/t/p/w500${this._search.poster_path}"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body bg-dark ">
                    <h5 class="card-title">${this._search.original_title}</h5>
                    <p class="card-text promosi-movie">
                    ${this._search.overview}
                    </p>
                  </div>
                  <div class="card-footer bg-dark ">
                    <small class="text-warning">Release date ${this._search.release_date}</small>
                    
                  </div>
                </div>
              </div>
            
                
                `;
  }
}

customElements.define("search-list", Searchlist);
