class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `
    <div class="d-flex search-width pb-3 mt-3">
        <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="searchElement"
        />
        <button
            class="btn btn-outline-warning text-light tombol-search fw-bold"
            type="submit"
            id="searchButtonElement"
        >
            Search
        </button>
      </div>
      `;

    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent,
    );
  }
}

customElements.define("search-bar", SearchBar);
