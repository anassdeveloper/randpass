const check_list = Array.from(document.querySelectorAll('.check'));

const result = document.querySelector('.result');

const content__form = document.querySelector('.content__form');

const button_but = document.querySelector('.but');

const range_value = document.getElementById('range_value');

const range_result = document.querySelector('.range_result');

const easy_list = [0,1,2,3,4,5,6,7,8,9];

const meduim_list = "qwertzuiopasdfghjklyxcvbnm";
const hard_list = '§$%&/?<>-_+';
const h = hard_list.split('');
const m = meduim_list.split('');

const generate = name => {
    let tool;
    switch(name){
        case 'e':
         tool = easy_list.length;
         ranx(tool, easy_list)
         break;
        case 'm':
         tool = meduim_list.length + easy_list.length;
         ranx(tool, m.concat(easy_list))
          break;
        case 'h':
         tool = meduim_list.length + hard_list.length + easy_list.length;
         ranx(tool, [...h.concat(m), ...easy_list])
         break;
        default:
            tool = 12;
    }
    
    
}

button_but.addEventListener('click', e => {
    const filter_checked = 
    check_list.find(el => el.checked)
    generate(filter_checked.name);
});

content__form.addEventListener('click', e => {
    button_but.style.pointerEvents = 'auto';
    check_list.forEach(el => {
        if(!el.checked){
            el.style.display = 'none';
        }else{
            el.style.display = 'block';
        }
    })
})


function ranx(n, arr){
    result.innerHTML = '';
    const hel = [];
    for(let i = 0; i < n; i++){
        let r = Math.floor(Math.random() * n);
        hel.push(arr[r]);
    }
    const input = document.createElement('input');
    input.type = 'text';
    input.value = hel.slice(0, range_value.value).join('');
    input.setAttribute('class', 'result-input')
    input.focus();
    result.append(input)
}

range_value.addEventListener('change', e => {
    range_result.textContent = e.target.value;

    if(e.target.value > 9 && e.target.value < 18) e.target.style.background = 'orange';

    else if(e.target.value > 18) e.target.style.background = 'green';

    else{
        e.target.style.background = 'rgb(247, 96, 96)';
    }

})