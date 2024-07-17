
const run = async () => {
    const root = document.querySelector('.counter');
    const numEl = root.querySelector('.num');
    const btnPlus = root.querySelector('.btn_plus');
    const btnMinus = root.querySelector('.btn_minus');

    const out = async () => {
        const { data } = await axios.get('/num');
        numEl.innerHTML = data;
    }
    out();


    btnPlus.addEventListener('click', async () => {
        await axios.get('/inc');
        out();
    });

    btnMinus.addEventListener('click', async () => {
        await axios.get('/dec');
        out();
    });

}


run();