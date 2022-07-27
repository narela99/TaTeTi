
import {connect} from 'react-redux';
import style from '../styles/grillaStyle.module.css'

export default function Puntaje({punt1, punt2}){
    return (
        <div className="row">
            <div className="col"  style={{backgroundColor: 'red', height: 70, margin: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
                <h1>{punt1}</h1>
            </div>
            <div className="col" style={{backgroundColor: 'rgb(71, 188, 241)', height: 70, margin: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
                <h1>{punt2}</h1>
            </div>

        </div>
    )
}

function mapState(state){
    return {
        puntaje: state.grilla.puntaje,
        
    }
}

// export default connect(mapState)(Puntaje)