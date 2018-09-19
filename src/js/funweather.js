window.onload = () => {
    let i = 1;
    const selectorClassWid = document.querySelectorAll(".wid");

    document.getElementById("widgetRight").addEventListener('click', (event) => {
        if(i < selectorClassWid.length){
            if(i != 0) selectorClassWid[i-1].classList.remove('active');
            else selectorClassWid[selectorClassWid.length-1].classList.remove('active');

            selectorClassWid[i].classList.add('active');
            i++;
        }else i = 0;
    });

    document.getElementById("widgetLeft").addEventListener('click', (event) => {
        if(i < selectorClassWid.length && i >= 0){
            if(i != selectorClassWid.length-1) selectorClassWid[i+1].classList.remove('active');
            else selectorClassWid[0].classList.remove('active');

            selectorClassWid[i].classList.add('active');
            i--;
        }else i =  selectorClassWid.length-1;
    });

}
