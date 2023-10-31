const headerComp = {
    header: document.querySelector('.header'),
    title: 'My Header',
    navTitle: 'Main nav links:',
    navLinks: [
        {
            name: 'google.com',
            href: 'https://www.google.com',
            isInternal: false,
        },
        {
            name: 'klick.com',
            href: 'https://www.klick.com',
            isInternal: false,
        },
        {
            name: 'unity.com',
            href: 'https://unity.com/',
            isInternal: false,
        },
    ],
    init: function () {
        this.header.innerHTML = `
            <div class='container'>
                <div class='headline-block mb8 mb0-sm'>
                    <h1 class='h1'>${this.title}</h1>

                    <button class='hamburger mobile-only-block'>
                        <span class='hamburger__top'></span>
                        <span class='hamburger__middle'></span>
                        <span class='hamburger__bottom'></span>
                    </button>
                </div>

                <div class='navigation-block navigation-block--desktop desktop-only-block'>
                    <p class='mr1'>${this.navTitle}</p>
                    <nav>
                        <ul>
                            ${this.navLinks
                                .map((link) => {
                                    return `
                                    <li class='navigation-block__list mr1'>
                                        <a class='navigation-block__link' href='${
                                            link.href
                                        }' target='${
                                        link.isInternal ? '_self' : '_blank'
                                    }'>${link.name}</a>
                                    </li>
                                `;
                                })
                                .join('')}
                        </ul>
                    </nav>
                </div>

                <div class='mt8 navigation-block navigation-block--mobile'>
                    <p class='mb2'>${this.navTitle}</p>
                    <nav>
                        <ul>
                            ${this.navLinks
                                .map((link) => {
                                    return `
                                    <li class='navigation-block__list-mobile mb3'>
                                        <a class='navigation-block__link navigation-block__link--mobile' href='${
                                            link.href
                                        }' target='${
                                        link.isInternal ? '_self' : '_blank'
                                    }'>${link.name}</a>
                                    </li>
                                `;
                                })
                                .join('')}
                        </ul>
                    </nav>
                </div>
            </div>
        `;
    },
    variables: function () {
        headerComp.hamburger = document.querySelector('.hamburger');
        headerComp.navigationBlockMobile = document.querySelector(
            '.navigation-block--mobile'
        );
    },
    listeners: function () {
        headerComp.hamburger.addEventListener('click', () => {
            headerComp.hamburger.classList.toggle('hamburger--expand');
            headerComp.navigationBlockMobile.classList.toggle(
                'mobile-only-block'
            );
        });
    },
};

window.addEventListener('load', function () {
    headerComp.init();
    headerComp.variables();
    headerComp.listeners();
});
