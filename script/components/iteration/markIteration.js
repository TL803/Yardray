    const marksContainer = document.getElementById('marks');
    const marks = [
        "46d2aa816134ef143792224f31e72c81 1.svg",
        "250x40_baic-avilon_logo-01 1.svg",
        "64058c056ae8be500c3ed669 1.svg",
        "BBBEB3BE+ROX 1.svg",
        "belgee 1.svg",
        "BESTUNE-LOGO-1 1.svg",
        "bNVWHLMvZx0 1.svg",
        "bSxKPM2Suu2H04HFOO3y 1.svg",
        "gac 1.svg",
        "gen380x2_3a7563dc-8980-4bee-a3be-2099924c56ef 1.svg",
        "i 1.svg",
        "jaecoo 1.svg",
        "logo-5 1.svg",
        "logo-black-v 1.svg",
        "peugeot-sa-eur1-logo 1.svg",
        "soueast 1.svg",
        "Vector-1.svg",
        "Vector.svg"
    ];

    marks.forEach(mark => {
        const markElement = document.createElement('div');
        markElement.className = 'w-[166px] h-[49px] md:w-[211px]  md:h-[119px] bg-white flex items-center justify-center rounded-[24px]';
        markElement.innerHTML = `
            <img data-open-modal="order-selected-car" src="../assets/marks/${mark}" alt="Логотип бренда" class="max-h-full max-w-full object-contain p-2">
        `;

        marksContainer.append(markElement);
    });