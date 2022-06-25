
const API_URL = "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=7Bagi7YsATsTYeBTjCYGtR25GQB8flIu";


async function GetAllNEWS(){
    try{
        const respuesta = await fetch(`${API_URL}`);
        const data = await respuesta.json();
        //console.log(data.results);
        return data.results;
        
    }catch(error){
        window.alert(error);
    }
}

export default GetAllNEWS;
