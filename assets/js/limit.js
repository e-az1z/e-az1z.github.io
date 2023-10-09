const allText = document.querySelectorAll('#limit_text'),
    boxForLimit = document.querySelectorAll('.boxForLimit');

boxForLimit.forEach((box, i) => {
    let text = allText[i].textContent,
        limitedLength = 230;

    const editLimitBtn = box.querySelector('#editLimit');
    var existsBtn = editLimitBtn ? true : false;

    allText[i].innerHTML = text.slice(0, limitedLength);
    if (text.length > limitedLength) {
        if (existsBtn) editLimitBtn.style.display = 'inline';
        allText[i].textContent += '...';
    }

    let clicked = false;

    if (existsBtn) editLimitBtn.addEventListener('click', () => {
        clicked = !clicked
        if (clicked) {
            editLimitBtn.textContent = "yopish";
            allText[i].textContent = text;
        } else {
            editLimitBtn.textContent = "ko'proq o'qish";
            allText[i].textContent = text.slice(0, limitedLength) + '...';
        }
    })
})