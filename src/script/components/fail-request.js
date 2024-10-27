class Failrequest extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            
        <h2  class="fail-req"> NOT FOUND</h2>
            
                
                `;
  }
}

customElements.define("fail-request", Failrequest);
