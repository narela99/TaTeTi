import {useState} from 'react'
import style from '../styles/grillaStyle.module.css'
import Puntaje from './puntaje';

export default function Grilla2() {
    const[turno, setTurno] = useState('cruz');
    const [grilla, setGrilla ] = useState( [false, false, false, false, false, false, false, false, false])
    const[puntaje, setPuntaje] = useState([1,0]);
    const[ganador, setGanador] = useState(false);
    const [tateti, setTateti] = useState({cruz: [], circulo: []})
    // var tateti = {
    //     cruz: [],
    //     circulo: []
    // };
    var formas = [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ];

    function cambiarTurno(){
        if(turno === 'cruz'){
            setTurno('circulo')
        }
        else if(turno === 'circulo'){
            setTurno('cruz')
        }
    }

    function modifiedGrilla(num){
        
        if(turno === 'cruz'){
            grilla[num] = 'cruz';
            // return grilla
        }
        else if (turno === 'circulo'){
            console.log(num, turno)
            grilla[num] = 'circulo';
        }
        
        
    }

    function click(num){
        cambiarTurno()
        modifiedGrilla(num)
        agregar(num)
        gana()
    }

    function agregar(num){
        if(turno === 'cruz'){
            tateti.cruz.push(num)
            tateti.cruz.sort(function(a, b){return a - b})
        }
        else if(turno === 'circulo'){
            tateti.circulo.push(num)
            tateti.circulo.sort(function(a, b){return a - b})
        }
        console.log(tateti)
        return tateti
    }

    function filtrarCruz (array){
        var newArray = tateti.cruz.filter (e => 
            e === array[0] || e === array[1] || e === array[2])
            console.log('cruz', newArray)
            return newArray
    }
    function filtrarCirculo (array){
        var newArray = tateti.circulo.filter (e => 
            e === array[0] || e === array[1] || e === array[2])
            console.log('criculo', newArray)
            return newArray
    }

    function gana(){
        for(let i=0; i < formas.length; i ++){
            if(filtrarCruz(formas[i]).length === 3){
                puntaje[0] = puntaje[0] + 1;
                setGanador('ganaCruz')
                // console.log(ganaCruz)
                // setTimeout(() =>{
                //     ganaCruz = false
                //     console.log(ganaCruz)
                // }, 3000)
                
                tateti.cruz = []
                tateti.circulo =[]
                console.log('Un punto para cruz')
                return puntaje
            }
            else if(filtrarCirculo(formas[i]).length === 3){
                puntaje[1] = puntaje[1] + 1; 
                setGanador('ganaCirculo')     
                tateti.cruz = []
                tateti.circulo =[]  
                
                console.log('Un punto para Circulo')
                return puntaje
            }
        }
        return puntaje

    }

    function siGana(){
        if(ganador === false){
            return (
                <h1>Turno: {turno}</h1>
            )
        }
        else if(ganador === 'ganaCruz'){
            setTimeout(() =>{
                    setGanador(false)
                    setGrilla( [false, false, false, false, false, false, false, false, false])
                }, 2000)
            return (
                <div class="alert alert-danger" role="alert" >
                   Un punto para cruz
                 </div>
            )
        }
        else if(ganador === 'ganaCirculo'){
            setTimeout(() =>{
                setGanador(false)
                setGrilla( [false, false, false, false, false, false, false, false, false])
            }, 2000)
        return (
            <div class="alert alert-primary" role="alert">
               Un punto para circulo
             </div>
        )
        }
    }

    function crucecita(c, index){
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
            return (<button className={style.cuadrado} onClick={ () =>click(index)}></button>) 
        } 
    }
    

    function grillaa(){
        return(
            <div className="row row-cols-3" >
                {grilla.map((g, i) =>{
                    return (
                    <div className='col'  >
                        {crucecita(g, i)}
                        {/* <button className={style.cuadrado} onClick={ () =>click(i, turno)}></button> */}
                    </div>
                )
                })}

            </div>
        )
    }
    return (
        <div className={style.container}>
            {/* <h1>Turno: {turno}</h1> */}
            {siGana()}
            {/* <div className="row row-cols-3" >
                {grilla.map((g, i) =>{
                    return (
                    <div className='col' >
                        {crucecita(g, i)}
                        
                    </div>
                )
                })}

            </div> */}
            {grillaa()}
            <Puntaje punt1={puntaje[0]} punt2={puntaje[1]}/>
        </div>
    )
}