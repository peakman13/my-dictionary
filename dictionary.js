const url = " https://api.dictionaryapi.dev/api/v2/entries/en/"
const sound = document.getElementById("sound");
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");


btn.addEventListener("click", ()=>{
   let inWord = document.getElementById("in-word").value;
    console.log(inWord);
   fetch(`${url}${inWord}`)
       .then((response)=> response.json())
       .then((data) => { console.log(data);
        result.innerHTML= ` 
        
        <div class="word">
            <h3>${inWord}</h3>
            <button onclick="voice()"><i class="fa-solid fa-volume-high"></i></button>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>/${data[0].phonetic}/</p>
        </div>
        <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
        <p class="word-example">${data[0].meanings[0].synonyms}</p>`;
        
        sound.setAttribute("src", `${data[0].phonetics[0].audio}`);

        
    })
    .catch (()=>{
            result.innerHTML= `<h1>No Result Found</h1>`
    })

});

function voice(){
    sound.play();
    console.log(sound);
}
