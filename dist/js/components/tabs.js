const tabsComp = {
    tabBlocks: document.querySelectorAll('.tabs'),
    listeners: function () {
        this.tabBlocks.forEach((tab) => {
            tab.addEventListener('keydown', (event) => {
                const tabs = getTabs(tab);

                // Get the index of the selected tab
                const currentIndex = tabs.indexOf(
                    // Find the selected tab where aria-selected is true
                    tabs.find((searchTab) =>
                        searchTab.matches('[aria-selected="true"]')
                    )
                );

                if (event.code === 'ArrowLeft') {
                    // hit left
                    let newIndex = currentIndex - 1;
                    if (newIndex < 0) newIndex = 0;
                    selectTab(tab, newIndex);
                } else if (event.code === 'ArrowRight') {
                    // hit right
                    let newIndex = currentIndex + 1;
                    if (newIndex >= tabs.length) newIndex = tabs.length - 1;
                    selectTab(tab, newIndex);
                }
            });

            tab.addEventListener('click', (event) => {
                const tabs = getTabs(tab);

                // Find tab that was clicked
                const tabClicked = event.target.closest('[role="tab"]');

                if (!tabClicked?.closest('[role="tablist"]')) {
                    return;
                }

                // Find index of tab that was clicked
                const index = tabs.indexOf(tabClicked);

                selectTab(tab, index);
            });
        });
    },
    init: function () {
        this.listeners();
    },
};

window.addEventListener('load', function () {
    tabsComp.init();
});

function getTabs(element) {
    const tabs = Array.from(
        element.querySelectorAll('[role="tablist"] [role="tab"]')
    );
    return tabs;
}

function getPanels(element) {
    const panels = Array.from(element.querySelectorAll('[role="panel"]'));
    return panels;
}

function selectTab(element, index) {
    const tabs = getTabs(element);
    const panels = getPanels(element);

    for (const tab of tabs) {
        tab.setAttribute('aria-selected', false);
        tab.setAttribute('tabindex', -1);
        tab.classList.remove('tabs__item--active');
    }

    for (const panel of panels) {
        panel.hidden = true;
        panel.setAttribute('aria-selected', false);
        panel.setAttribute('tabindex', -1);
    }

    const selectedTab = tabs[index];
    const selectedPanel = panels[index];

    selectedTab.focus();
    selectedTab.setAttribute('aria-selected', true);
    selectedTab.setAttribute('tabindex', 0);
    selectedTab.classList.add('tabs__item--active');

    selectedPanel.hidden = false;
    selectedPanel.setAttribute('aria-selected', true);
    selectedPanel.setAttribute('tabindex', 0);
}
