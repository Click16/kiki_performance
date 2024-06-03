const Modeli = {
    'audi': [
        { name: 'RS3', image: 'slike/audi_rs3.jpeg' },
        { name: 'RS4', image: 'slike/audi_rs4.jpeg' },
        { name: 'RS5', image: 'slike/audi_rs5.jpeg' },
        { name: 'RS6', image: 'slike/audi_rs6.jpeg' },
        { name: 'RS7', image: 'slike/audi_rs7.jpeg' }
    ],
    'bmw': [
        { name: 'M2', image: 'slike/bmw_m2.jpeg' },
        { name: 'M3', image: 'slike/bmw_m3.jpeg' },
        { name: 'M4', image: 'slike/bmw_m4.jpeg' },
        { name: 'M5', image: 'slike/bmw_m5.jpeg' },
        { name: 'M6', image: 'slike/bmw_m6.jpeg' }
    ],
    'mercedes': [
        { name: 'AMG A45', image: 'slike/amg_a45.jpeg' },
        { name: 'AMG CLS63', image: 'slike/amg_cls63.jpeg' },
        { name: 'AMG C63', image: 'slike/amg_c63.jpeg' },
        { name: 'AMG S63', image: 'slike/amg_s63.jpeg' },
        { name: 'AMG GT', image: 'slike/amg_gt.jpeg' }
    ]
};
window.onload = function() {
    const znamke = document.querySelectorAll('.znamka');
    znamke.forEach(znamka => {
        znamka.addEventListener('click', function() {
            showModels(this.id);
        });
    });

    const modal = document.getElementById('imageOkvir');
    const zapriBtn = document.querySelector('.zapri');
    zapriBtn.onclick = function() {
        modal.style.display = 'none';
    };
};

function showModels(znamka) {
    const allContainers = document.querySelectorAll('.modeli-container');
    allContainers.forEach(container => {
        container.style.display = 'none';
        container.innerHTML = '';
    });

    const modeliContainer = document.getElementById(`${znamka}-modeli`);
    const modeli = Modeli[znamka];

    modeli.forEach(model => {
        const modelDiv = document.createElement('div');
        modelDiv.className = 'model';
        const modelName = document.createElement('h3');
        modelName.textContent = model.name;
        const modelImage = document.createElement('img');
        modelImage.src = model.image;
        modelImage.alt = model.name;
        modelImage.className = 'model-image';
        modelImage.onclick = function() {
            showModal(this.src, this.alt);
        };

        modelDiv.appendChild(modelName);
        modelDiv.appendChild(modelImage);
        modeliContainer.appendChild(modelDiv);
    });

    modeliContainer.style.display = 'flex';
}

function showModal(imageSrc, imageAlt) {
    const okvirImg = document.getElementById('okvirImg');
    const captionText = document.getElementById('caption');
    const okvir = document.getElementById('imageOkvir');

    okvir.style.display = 'block';
    okvirImg.src = imageSrc;
    captionText.textContent = imageAlt;
}

