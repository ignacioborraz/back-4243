let movie_template = ({ title,price,_id })=> `
    <div class="nav-item p-2 m-2" id=${_id}>
        <p class="nav-link text-center m-0">${title}</p>
        <p class="nav-link text-center m-0">U$D${price}</p>
    </div>
                    
`


fetch(`/api/movies`)
    .then(res=>res.json())
    .then(res=> {
        //console.log(res.response)
        if (res.success) {
            const movies = res.response
            document.getElementById('data').innerHTML = movies.map(each=>movie_template(each)).join('')
        } else {
            alert(res.message)
        }
    })