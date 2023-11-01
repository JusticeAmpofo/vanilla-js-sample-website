console.log('safety bar');
const safetyBarComp = {
    safetyBar: document.querySelector('.safety-bar'),
    safetyBarContent: document.querySelector('.safety-bar__content'),
    variables: function () {
        safetyBarComp.targetId = safetyBarComp.safetyBar.dataset.targetid;
        safetyBarComp.targetSelection =
            +safetyBarComp.safetyBar.dataset.hideoffsetfromelement;
    },
    init: function () {
        // this.construct();
        this.variables();
        // this.listeners();
    },
};

window.addEventListener('DOMContentLoaded', () => {
    safetyBarComp.init();
});
