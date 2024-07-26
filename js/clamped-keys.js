const body = document.querySelector('body');

const clampedKeys = (func, arrayKeys) => {

    let setKeys = new Set();

    document.addEventListener('keydown', (evt) => {
        setKeys.add(evt.code);

        let arrayKey = Array.from(setKeys);

        if (JSON.stringify(arrayKey.sort()) === JSON.stringify(arrayKeys.sort())) {
            setKeys.clear();
            func();
        }
    });
    document.addEventListener('keyup', function(evt) {
        setKeys.delete(evt.code);
    });

};

const bodyGrid = () => {
    body.classList.toggle('grid');
};

clampedKeys(bodyGrid, ['ControlLeft', 'Space']);
