const table = document.querySelector('table')
const name = document.querySelector('#name')
const salary = document.querySelector('#salary')
const btnsort = document.querySelector('#hello')
const sumbit = document.querySelector('button')
const double = document.querySelector('#double')
const body = document.querySelector('body')
const filterd = document.querySelector('#filterd')
const calculate = document.querySelector('#calculate')
let allpersons = [];

const addUser= ()=>{ // bo zead krdny user
    if(name.value && salary.value){
        table.innerHTML = '<th>Name</th> <th>Salary</th>'
        
        const person = {
            name: name.value,
            salary: salary.value
        }
        
        allpersons.push(person)
        console.log(allpersons)
    }

    allpersons.forEach((p)=>{
        const newelement = document.createElement('tr')
        newelement.innerHTML = `<td>${p.name}</td><td>IQD ${p.salary}</td>`
        table.append(newelement)
    })
    name.value = ''
    salary.value = ''
}
const doublemoney = ()=>{ // bo jaran dw krdny salaryakan
    allpersons = allpersons.map((p)=>{
        return {...p, salary: p.salary *2}

    })
    updateTable();
}
const updateTable = ()=>{ // bo upate krdny table ka katek gorankary basar arrayka da dey
    table.innerHTML = '<th>Name</th> <th>Salary</th>'
    allpersons.forEach((p)=>{
        const newelement = document.createElement('tr')
        newelement.innerHTML = `<td>${p.name}</td><td>IQD    ${p.salary}</td>`
        table.append(newelement)

    })
}

const sortted = ()=>{ // bo rezkrdn ba pey zorten salary
    // allpersons.sort((a,b)=> b.salary - a.salary) // atwany ba sheway returnesh bekay
    allpersons.sort((a,b)=>{
        return b.salary - a.salary
    })
    updateTable()
}
const filterBy100 = ()=>{ // filterkrdny bas zhmara sarw 100kan pshan bda
   allpersons= allpersons.filter((p)=> p.salary > 100)
    updateTable();
}

const calculated = ()=>{ // amash bo koy gshti bakar detn
    let sum = 0;
    allpersons.forEach((p)=>{
        sum += +p.salary
    })
    const newsum = document.createElement('h3')
    newsum.textContent = `Total Salary:IQD${sum}`
    newsum.style.color ="white"
    newsum.style.border = 'dotted 2px white'
    newsum.style.boxShadow = '0px 0px 10px white '
    newsum.style.padding = '5px'
    newsum.style.width = 'fit-content'
    newsum.style.textShadow = '0px 0px 10px white'
    newsum.style.fontFamily = "sans-serif"
    body.append(newsum)
    setTimeout(() => {
        body.removeChild(newsum)
    }, 7000);
}


sumbit.addEventListener('click',addUser)
double.addEventListener('click',doublemoney)
btnsort.addEventListener('click', sortted)
filterd.addEventListener('click', filterBy100)
calculate.addEventListener('click', calculated)