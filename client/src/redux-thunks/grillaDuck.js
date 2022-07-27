//constanst
let initialData = {
    array : [false, false, false, false, false, false, false, false, false],
    turno: 'cruz',
    puntaje: [1, 0],
    tateti: {
        cruz: [],
        circulo: []
    },
    formas: [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    ganaCruz: false,
    ganaCirculo: false
}

console.log(initialData.puntaje)
const GET_GRILLA = "GET_GRILLA";
const MODIFIED_GRILLA = "MODIFIED_GRILLA";
const GET_TURNO = "GET_TURNO";
const TATETI = 'TATETI';
const GANADOR = 'GANADOR';
const GANA_CRUZ = 'GANACRUZ'
const GANA_CIRCULO = 'GANACIRCULO'


//reducer
export default function reducer(state = initialData, action){
    switch(action.type){
        case GET_GRILLA:{
            return {...state, array: action.payload}
        }
        case MODIFIED_GRILLA:{
            return {...state, array: action.payload}
        }
        case GET_TURNO: {
            return {...state, turno: action.payload}
        }
        case TATETI: {
            return {...state, tateti: action.payload}
        }
        case GANADOR: {
            return {...state, puntaje: action.payload}
        }
        case GANA_CRUZ:{
            return {...state, ganaCruz: action.payload}
        }
        
        
        default: 
            return state
    }
}


//actions

export let getGrillaAction = () => (dispatch, getState) => {
    dispatch({
        type: GET_GRILLA,
        payload: initialData.array
    })
}

export  let modifiedGrilla = (num) => (dispatch, getState) => {

    let {array, turno} = getState().grilla;
    
    function modificar(){
        if(turno === 'cruz'){
            array[num] = 'cruz'
            
        }
        else if (turno === 'circulo'){
            array[num] = 'circulo'
            
        }
        return array
    }

    dispatch({
        type: MODIFIED_GRILLA,
        payload: modificar()
    })
} 

export let cambiaTurno = () => (dispatch, getState) => {

    let {turno} = getState().grilla;

    function turno2(){
        if(turno === 'cruz'){
            turno = 'circulo'
        }
        else if(turno === 'circulo'){
            turno = 'cruz'
        }
        return turno
    }

    dispatch({
        type: GET_TURNO,
        payload: turno2()
    })
}

export let tatetiAction= (num) => (dispatch, getState) =>{

    let {turno, tateti} = getState().grilla;
    console.log(tateti)

    function agregar(){
        if(turno === 'circulo'){
            tateti.cruz.push(num)
            tateti.cruz.sort(function(a, b){return a - b})
        }
        else if(turno === 'cruz'){
            tateti.circulo.push(num)
            tateti.circulo.sort(function(a, b){return a - b})
        }
        return tateti
    }

    dispatch({
        type: TATETI,
        payload: agregar()
    })
    


}

function filtrarCruz (array){
    var newArray = initialData.tateti.cruz.filter (e => 
        e === array[0] || e === array[1] || e === array[2])
        console.log('cruz', newArray)
        return newArray
}
function filtrarCirculo (array){
    var newArray = initialData.tateti.circulo.filter (e => 
        e === array[0] || e === array[1] || e === array[2])
        console.log('criculo', newArray)
        return newArray
}



export let ganadorAction= () => (dispatch, getState) =>{
    let {formas, puntaje, tateti, array, ganaCruz} = getState().grilla;
    console.log(puntaje)

    function gana(){
        for(let i=0; i < formas.length; i ++){
            if(filtrarCruz(formas[i]).length === 3){
                puntaje[0] = puntaje[0] + 1;
                ganaCruz = true;
                console.log(ganaCruz)
                setTimeout(() =>{
                    ganaCruz = false
                    console.log(ganaCruz)
                }, 3000)
                tateti.cruz = []
                tateti.circulo =[]
                console.log('Un punto para cruz')
                return puntaje
            }
            else if(filtrarCirculo(formas[i]).length === 3){
                puntaje[1] = puntaje[1] + 1;      
                tateti.cruz = []
                tateti.circulo =[]  
                
                console.log('Un punto para Circulo')
                return puntaje
            }
        }
        return puntaje

    }
    

    dispatch({
        type: GANADOR,
        payload: gana() 
    })


}

export let ganaRojo = () => (dispatch, getState) =>{

    let {ganaCruz} = getState().grilla;
    console.log(ganaCruz)

    function siGana(){
        setTimeout(() =>{
            console.log(ganaCruz)
            ganaCruz = false
        }, 2000)
        return ganaCruz
    }
    

    dispatch({
        type: GANA_CRUZ,
        payload: siGana()
    })

}