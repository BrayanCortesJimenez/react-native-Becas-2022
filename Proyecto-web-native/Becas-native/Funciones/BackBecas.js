const APIBECAS_URL = "http://192.168.10.44:80/api/beca/";




export default async function GetAllBecas(){
    try{
        const respuesta = await fetch(`${APIBECAS_URL}`);
        const data = await respuesta.json();
        //console.log(data.becas);
        return data.becas;
    }catch(error){
        window.alert(error);
    }
}

export async function registerBecas(newBeca){
    return await fetch(APIBECAS_URL, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": String(newBeca.nombre),
            "porcentaje":(newBeca.porcentaje),
            "pais": String(newBeca.pais),
            "universidad": String(newBeca.universidad),
            "requerimientos": String(newBeca.requerimientos),
        })
    } );

}

export async function updateBecas(becaId,updatedBeca){
    return await fetch(`${APIBECAS_URL}${becaId}`, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": String(updatedBeca.nombre),
            "porcentaje": parseInt(updatedBeca.porcentaje),
            "pais": String(updatedBeca.pais),
            "universidad": String(updatedBeca.universidad),
            "requerimientos": String(updatedBeca.requerimientos),
        })
    } );

}

export async function DelteBecas(becaId){
    return await fetch(`${APIBECAS_URL}${becaId}`, {
        method: 'DELETE',
    });
}

export async function getBecas(becaId){
    return await fetch(`${APIBECAS_URL}${becaId}`);
}

