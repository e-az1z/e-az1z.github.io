const box = document.querySelectorAll('#g_box'),
    pagination = document.querySelector('.pagination'),
    paginationBtns = pagination.querySelector('.btns');

var limit = 6,
    active_btn = 0,
    active = 0,
    count_p = null,
    errorP = null;

// search

if (search = document.querySelector('input[type=search]')) {
    errorP = document.querySelector('.error');
    box.forEach(item => {
        item.classList.add('hide');
    });

    fil();

    search.addEventListener('input', () => {
        fil();
    })
} else {
    repPagination();
}

function fil() {
    box.forEach(item => {
        item.classList.remove('hide');
    })
    box.forEach((item) => {
        const sch = item.querySelector('.search_title');
        if (sch.textContent.toLowerCase().indexOf(search.value.toLowerCase()) != -1) {
            item.classList.remove('hided');
        } else {
            item.classList.add('hided');
        }
        active = 0;
    })
    try {
        repPagination();
    } catch (e) { }
}

// search end
function repPagination() {
    const filteredBox = [...box].filter(item => [...item.classList].indexOf('hided') === -1);

    if (errorP) {
        if (filteredBox.length === 0) {
            errorP.style.display = 'block';
            pagination.style.display = 'none';
        } else {
            errorP.style.display = 'none';
            pagination.style.display = 'flex';
        }
    }

    count_p = Math.ceil((filteredBox.length / limit));

    function none_boxes() {
        filteredBox.forEach(b => b.classList.add('hide'));
    }

    none_boxes();

    if ((btns = document.querySelectorAll('div[data-index]')).length) {
        btns.forEach(item => item.remove());
    }
    for (let i = 0; i < count_p; i++) {
        const p_btn = document.createElement('div');
        p_btn.textContent = i + 1;
        p_btn.setAttribute('data-index', i);
        paginationBtns.append(p_btn);
    }

    function active_boxes() {
        var to = active + limit > filteredBox.length ? filteredBox.length : active + limit;
        for (let i = active; i < to; i++) {
            filteredBox[i].classList.remove('hide');
        }
    }

    function del_btn() {
        p_btn.forEach(btn => {
            btn.classList.remove('btn_active');
        })
    }

    active_boxes();

    p_btn = paginationBtns.querySelectorAll('div');
    p_btn[0].classList.add('btn_active');

    function btnPV(sh = 0) {
        del_btn();
        active_btn += sh == 0 ? 0 : sh;
        if (active_btn < 0) {
            active_btn = 0;
        } else if (active_btn >= count_p) {
            active_btn = count_p - 1;
        }
        active = active_btn * limit;
        p_btn[active_btn].classList.add('btn_active');
        none_boxes();
        active_boxes();
    }

    p_btn.forEach(btn => {
        btn.classList.add('pharagraph_4');
        btn.addEventListener('click', () => {
            active_btn = parseInt(btn.dataset.index);
            btnPV();
        })
    })
    return {
        btnPV: btnPV,
        filteredBox: filteredBox
    };
}