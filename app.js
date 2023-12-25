const api_url = 'https://api.themoviedb.org/3/movie/popular?api_key=99ea76aa55e580907785069f75a69c77';

const image_path = 'https://image.tmdb.org/t/p/original/';

const search_url = 'https://api.themoviedb.org/3/search/day?api_key=99ea76aa55e580907785069f75a69c77';

const div = document.getElementById('film');
const form = document.getElementById('form');
const arama = document.getElementById('arama');

filmleriGetir(api_url);

async function filmleriGetir(url){
    const res = await fetch(url);
    const data = await res.json();

    filmleriGöster(data.results);
}

function filmleriGöster(filmler){
    div.innerHTML = "";
    filmler.forEach((film) => {
        

        const film1 = document.createElement("div");
        film1.className = 'film1';
        film1.classList.add('film1');
        

        const image = document.createElement("img");
        image.src = image_path + film?.poster_path;
        image.alt = film.title;
        

        const title = document.createElement("h3");
        title.textContent = film.title;

        const klas = document.createElement("div");
        klas.className = 'klas';

        const rate = document.createElement("span");
        rate.className = 'rate';
        rate.textContent = film.vote_average.toPrecision(2);

        const icon = document.createElement("a");
        icon.className='buton'
        icon.href='#'
        icon.innerHTML=`<i class="fa-regular fa-circle-play"></i>`

        film1.appendChild(image);
    
        klas.appendChild(icon);
        klas.appendChild(title);
        klas.appendChild(rate);
        
        film1.appendChild(klas);
        
        div.appendChild(film1);  
    })
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const search = arama.value;

    if (search && search !== '') {
        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=99ea76aa55e580907785069f75a69c77&query=${search}`;
        filmleriGetir(searchUrl);
        arama.value = "";
    } else {
        window.location.reload();
    }
});





