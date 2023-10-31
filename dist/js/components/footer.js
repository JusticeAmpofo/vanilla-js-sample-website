const footerComp = {
    footer: document.querySelector('.footer'),
    init: function () {
        this.footer.innerHTML = `
            <div class='container'>
                <h2 class='h1'>My Footer</h2>
            </div>
        `;
    },
};

window.addEventListener('load', function () {
    footerComp.init();
});
