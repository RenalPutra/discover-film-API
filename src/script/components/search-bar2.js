class SearchBar2 extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement2").value;
  }

  render() {
    this.innerHTML = `
      <div class="d-flex search-width pb-3">
          <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="searchElement2"
          />
          <button
              class="btn btn-outline-warning text-light tombol-search fw-bold"
              type="submit"
              id="searchButtonElement2"
          >
              Search
          </button>
        </div>
        `;

    this.querySelector("#searchButtonElement2").addEventListener(
      "click",
      this._clickEvent,
    );
  }
}

customElements.define("search-bar2", SearchBar2);
