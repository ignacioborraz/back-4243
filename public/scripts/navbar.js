let options = [
    { title:"New Movie",to:"/new.html",id:'new_movie' },
    { title:"Movies",to:"/movies.html",id:'movies' },
    { title:"Register",to:"/register.html",id:'register' },
    { title:"Log In",to:"/login.html",id:'login' },
    { title:"Sign Out",to:"#",id:'signout' }
]
let option_template = ({ title,to,id })=> `
    <li class="nav-item" id=${id}>
        <a class="nav-link text-light" href=${to}>${title}</a>
    </li>
                    
`
document.getElementById('options').innerHTML = options.map(each=>option_template(each)).join('')

document.getElementById('signout').addEventListener('click',(event)=>{
    fetch(`/api/auth/signout`, {
        method: 'POST',
    })
    .then(res=>res.json())
    .then(res=> {
        //console.log(res)
        if (res.success) {
            alert(res.message)
            window.location.replace('/')
        } else {
            alert(res.message)
        }
    })
})