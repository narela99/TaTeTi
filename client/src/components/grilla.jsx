import react, {useState} from 'react'
import {connect} from 'react-redux';
import style from '../styles/grillaStyle.module.css'
import Puntaje from './puntaje';
import { modifiedGrilla, cambiaTurno } from '../redux-thunks/grillaDuck';

function Grilla({grilla, turno, modifiedGrilla, cambiaTurno}){
    // const [num, setNum] = useState()

    function click(num, turnoo){
        modifiedGrilla(num, turnoo)
        cambiaTurno()
        console.log(num, turnoo)
    }
    

    function crucecita(c, index, turno3){
        if(c === 'cruz'){
            return (
                <div className={style.cruz}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="100%"fill="red" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </div>
            )
        }
        else if(c === 'circulo'){
            return (
                <div className={style.cruz}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="rgb(71, 188, 241)" class="bi bi-record-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                    {/* <i class="bi bi-record-circle-fill"  style={{width: '100%', color: 'blue'}}></i> */}
                </div>
            )
        }
        else if(c === false){
            return (<button className={style.cuadrado} onClick={ () =>click(index, turno3)}></button>) 
        } 
    }
    return (
        <div className={style.container}>
            <h1>Turno: {turno}</h1>
            <div className="row row-cols-3" >
                {grilla.map((g, i) =>{
                    return (
                    <div className='col' >
                        {crucecita(g, i, turno)}
                        {/* <button className={style.cuadrado} onClick={ () =>click(i, turno)}></button> */}
                    </div>
                )
                })}

            </div>
            <Puntaje/>
        </div>
    )
}

function mapState(state){
    return {
        grilla: state.grilla.array,
        turno: state.grilla.turno
    }
}

export default connect(mapState, {modifiedGrilla, cambiaTurno})(Grilla)