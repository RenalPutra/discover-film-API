class Footerbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
   
      <p class="text-center separate">Making With 💝 From Raenald Syaputra</p>
    
                  
                      
                      `;
  }
}

customElements.define("footer-bar", Footerbar);
