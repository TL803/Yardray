    const marksContainer = document.getElementById('marks');
const marks = [
    {
        path: "46d2aa816134ef143792224f31e72c81 1.svg",
        name: "Citroën"
    },
    {
        path: "250x40_baic-avilon_logo-01 1.svg",
        name: "BAIC"
    },
    {
        path: "64058c056ae8be500c3ed669 1.svg",
        name: "Kaiy"
    },
    {
        path: "BBBEB3BE+ROX 1.svg",
        name: "ROX"
    },
    {
        path: "belgee 1.svg",
        name: "Belgee"
    },
    {
        path: "BESTUNE-LOGO-1 1.svg",
        name: "Bestune"
    },
    {
        path: "bNVWHLMvZx0 1.svg",
        name: "Haval"
    },
    {
        path: "bSxKPM2Suu2H04HFOO3y 1.svg",
        name: "Jetta"
    },
    {
        path: "gac 1.svg",
        name: "GAC"
    },
    {
        path: "gen380x2_3a7563dc-8980-4bee-a3be-2099924c56ef 1.svg",
        name: "Changan"
    },
    {
        path: "i 1.svg",
        name: "MG"
    },
    {
        path: "jaecoo 1.svg",
        name: "Jaecoo"
    },
    {
        path: "logo-5 1.svg",
        name: "SWM"
    },
    {
        path: "logo-black-v 1.svg",
        name: "Chery"
    },
    {
        path: "peugeot-sa-eur1-logo 1.svg",
        name: "Peugeot"
    },
    {
        path: "soueast 1.svg",
        name: "Soueast"
    },
    {
        path: "Vector-1.svg",
        name: "Unknown" // не опознано (черная полоса)
    },
    {
        path: "Vector.svg",
        name: "Unknown" // не опознано (черная полоса)
    }
];

    marks.forEach(mark => {
        const markElement = document.createElement('div');
        markElement.className = 'w-[166px] h-[49px] md:w-[211px]  md:h-[119px] bg-white flex items-center justify-center rounded-[24px] cursor-pointer';
        markElement.innerHTML = `
            <img data-open-modal="order-selected-${mark.name}" src="../assets/marks/${mark.path}" alt="Логотип бренда" class="max-h-full max-w-full  object-contain p-2">
        `;

        marksContainer.append(markElement);
    });