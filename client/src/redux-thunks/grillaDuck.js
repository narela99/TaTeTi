//constanst
let initialData = {
    array : [false, false, false, false, false, false, false, false, false],
    turno: 'cruz'
}

console.log(initialData.turno)
const GET_GRILLA = "GET_GRILLA";
const MODIFIED_GRILLA = "MODIFIED_GRILLA";
const GET_TURNO = "GET_TURNO";

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


