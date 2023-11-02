const safetyBarComp = {
    safetyBar: document.querySelector('.safety-bar'),
    safetyBarContent: document.querySelector('.safety-bar__content'),
    variables: function () {
        safetyBarComp.targetId = safetyBarComp.safetyBar.dataset.targetid;
        safetyBarComp.hideOffsetFromElement =
            +safetyBarComp.safetyBar.dataset.hideoffsetfromelement || 0;
    },
    createCloseBtn: function () {
        safetyBarComp.safetyBarBtnIsi = document.createElement('a');
        safetyBarComp.safetyBarBtnIsi.classList.add('btn', 'safety__btn-isi');
        safetyBarComp.safetyBarBtnIsi.href = `#${safetyBarComp.targetId}`;
        safetyBarComp.safetyBarBtnIsi.innerHTML = '+';
        safetyBarComp.safetyBarContent.insertBefore(
            safetyBarComp.safetyBarBtnIsi,
            safetyBarComp.safetyBarContent.firstChild
        );
    },
    listeners: function () {
        const { safetyBarBtnIsi } = safetyBarComp;
        window.addEventListener('scroll', this.scrollHandler.bind(this));

        safetyBarBtnIsi.addEventListener('click', () => {
            safetyBarBtnIsi.dispatchEvent(
                new Event('safety-btn-clicked', {
                    bubbles: true,
                    detail: {},
                })
            );
        });
    },
    scrollHandler: function () {
        const { safetyBar, targetId, hideOffsetFromElement } = safetyBarComp;

        if (!targetId) return;

        const target = document.querySelector(`#${targetId}`);

        const rect = target.getBoundingClientRect();
        const topDistance = rect.top;
        const viewportHeight =
            window.innerHeight || document.documentElement.clientHeight;

        const distanceToBottom = viewportHeight - topDistance;

        if (distanceToBottom < hideOffsetFromElement) {
            safetyBar.classList.remove('safety-bar--hidden');
        } else {
            safetyBar.classList.add('safety-bar--hidden');
        }
    },
    init: function () {
        this.variables();
        this.createCloseBtn();
        this.listeners();
    },
};

window.addEventListener('DOMContentLoaded', () => {
    safetyBarComp.init();
});
