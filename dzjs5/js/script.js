let buttonA = document.querySelector('.button')
let parent = document.querySelector('.toDoList')
let done = document.querySelector('.done')
let newLabel = document.querySelector('.lableElem')

buttonA.addEventListener('click', elem)
function elem(){
    let lable = document.createElement('label')
    let newElem = document.createElement('input');
    newElem.type = 'checkbox'
    newElem.classList.add('task')
    newElem.onclick = compliteTask
    lable.innerHTML = prompt('Какие планы?');
    lable.classList.add('lableElem')
    lable.appendChild(newElem)
    parent.appendChild(lable)
}


function compliteTask(){
    let par = this.parentElement
    let delButton = document.createElement('button')
    let newLabel = document.querySelector('.lableElem')
    delButton.onclick = dilite;
    delButton.innerHTML = 'Delite'
    done.appendChild(par.parentElement.removeChild(par));
    newLabel.appendChild(delButton)
    newLabel.removeChild(document.querySelector('.task'))
    
    
}

function dilite(){
    let del = this.parentElement
    done.removeChild(del)


}





















//<label>
//                <input type="checkbox" name="extraoption" value="delivery">Доставка
//            </label><br>