class Discoveritem extends HTMLElement {
  set discover(discover) {
    this._discover = discover;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="col p-3">
              <div class="card h-100 ">
                <img
                  src="https://image.tmdb.org/t/p/w500${this._discover.poster_path}"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body bg-dark ">
                  <h5 class="card-title">${this._discover.original_title}</h5>
                  <p class="card-text promosi-movie">
                  ${this._discover.overview}
                  </p>
                </div>
                <div class="card-footer bg-dark ">
                  <small class="text-warning">Release date ${this._discover.release_date}</small>
                  
                </div>
              </div>
            </div>
          
              
              `;
  }
}

customElements.define("discover-movies", Discoveritem);

// render() {
//   fetch(
//     "https://api.themoviedb.org/3/discover/movie?api_key=9fa77e745db8ea3baef75ce5c9cfc0ae"
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((responseJSON) => {
//       responseJSON.results.forEach((value) => {
//         this.innerHTML = `
//         <div class="row row-cols-1 row-cols-md-3 g-4 p-4">
//             <div class="col">
//             <div class="card h-100">
//               <img
//                 src="https://image.tmdb.org/t/p/w500${value.poster_path}"
//                 class="card-img-top"
//                 alt="..."
//               />
//               <div class="card-body bg-dark">
//                 <h5 class="card-title">${value.original_title}</h5>
//                 <p class="card-text">
//                 ${value.overview}
//                 </p>
//               </div>
//               <div class="card-footer bg-dark">
//                 <small class="text-warning">Release date ${value.release_date}</small>
//               </div>
//             </div>
//           </div>
//         </div>

//             `;
//       });
//     });
// }
