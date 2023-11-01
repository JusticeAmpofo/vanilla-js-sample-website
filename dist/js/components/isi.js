const isiComp = {
    isi: document.querySelector('#isi'),
    init: function () {
        this.isi.innerHTML = `
            <h2 class='h1 mb5'>IMPORTANT SAFETY INFORMATION</h2>
            <p class='mb5'>
                When this is visible because we've scrolled down far enough, the
                sticky ISI disappears
            </p>
            <p class='mb5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                suscipit, metus ac hendrerit vestibulum, turpis tortor tempus
                lacus, nec mollis magna lorem ac nisi. Vivamus quis enim lorem.
                Nam finibus eu tellus sed tempor. Pellentesque odio erat,
                condimentum nec sem nec, tempor sollicitudin lectus. In tortor
                elit, lobortis nec lorem vel, ultricies faucibus eros. Aliquam
                quis tellus a orci vestibulum semper. Etiam interdum feugiat
                nisl, et lobortis est porttitor quis. Donec quis lacinia nibh.
                In eget gravida arcu, et iaculis est. Morbi ut lectus at mi
                commodo fermentum eu id ante.
            </p>
            <p class='mb5'>
                Aenean vestibulum dapibus eleifend. In et ipsum elementum,
                viverra massa ac, imperdiet eros. Quisque non cursus nisi.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Duis a sem ex. Etiam nec felis at quam
                commodo consectetur. Nunc nec blandit mi. Mauris nec urna vitae
                ante lacinia laoreet. Ut finibus lectus vitae hendrerit
                facilisis. Praesent scelerisque risus in diam suscipit, vitae
                egestas lorem facilisis. Nam pretium lobortis tempor.
            </p>
            <p class='mb5'>
                Cras bibendum commodo viverra. Integer porttitor magna eu
                laoreet tincidunt. Suspendisse at nisi dictum orci imperdiet
                hendrerit. Integer id nisl auctor, varius diam ut, venenatis
                nibh. Maecenas non sem ornare, interdum massa quis, aliquet
                massa. Curabitur imperdiet quam metus, eu mollis elit tincidunt
                eu. Fusce mi velit, eleifend sit amet imperdiet vel, efficitur
                sit amet ipsum. Etiam quis mi id leo fermentum ultrices.
                Suspendisse condimentum, lacus eu semper blandit, eros tortor
                aliquam sem, quis placerat mi libero eu elit.
            </p>
            <p class='mb5'>
                Sed pharetra ac tellus eget cursus. Mauris lacus justo, vehicula
                nec imperdiet vel, maximus rhoncus metus. Etiam gravida
                tincidunt massa, sed sollicitudin ligula pellentesque eget.
                Aenean odio leo, imperdiet et nisi a, tempus vestibulum erat.
                Praesent auctor in lacus ac porttitor. Maecenas felis ipsum,
                convallis a lectus in, viverra porta arcu. Aliquam erat
                volutpat. Quisque pharetra ut nisi a aliquam.
            </p>
            <p class='mb5'>
                Nam posuere quam a magna vestibulum rhoncus. Pellentesque
                consectetur neque lacus, ac lacinia ex elementum ac. Aliquam
                interdum mattis ex, vitae feugiat ipsum ullamcorper eget. In
                lacus diam, sodales ut libero eget, efficitur mattis enim. Sed
                interdum lacus id velit maximus porttitor. Vivamus id lacinia
                mauris. In hac habitasse platea dictumst. Proin aliquet
                fringilla lacus sed dictum. Nam malesuada et lectus non dapibus.
                Aliquam luctus lorem sed tortor consequat posuere. Suspendisse
                elementum ex at mattis sodales. Aliquam condimentum porttitor
                ex, sed porta ante. Donec faucibus ante eget maximus euismod.
                Phasellus at odio eu mauris ullamcorper consequat. Curabitur
                hendrerit scelerisque odio, finibus viverra lorem iaculis eu.
                Suspendisse congue ultrices dui eu efficitur.
            </p>
        `;
    },
};

window.addEventListener('load', function () {
    isiComp.init();
});
