import './vehicule.css'
import { useState } from 'react'
import { store } from '../../store'
import { useEffect } from 'react'

export default function Vehicule(props) {
    
    let [vehicule,setVehicul] = useState()
    useEffect(() => {
    setVehicul(() => store.getState().dmdActual.vehicule)  

},[props.rende])
    

if(vehicule){

    return(
        <div className='vehicule'>
            <div className='matricul'>#Matricule: {vehicule.matricule}</div>
            <div className='vehicule-info'>
                <div className='vehicule-info-leftside'>
                    <div className='item-vehicul-info'><span className='vehicule-info-icon'><img src="/img/width.png" alt="" srcset="" width={'15%'} /></span> largeur: <span className='vehicul-data'>{vehicule.largeur ? vehicule.largeur + 'm': 'null' }</span></div>
                    <div className='item-vehicul-info'><span className='vehicule-info-icon'><img src="/img/height.png" alt="" srcset="" width={'15%'} /></span> heuteur: <span className='vehicul-data'>{vehicule.heuteur ? vehicule.heuteur + 'm': 'null' }</span></div>
                    <div className='item-vehicul-info'><span className='vehicule-info-icon'><img src="/img/length.png" alt="" srcset="" width={'15%'} /></span> longueur: <span className='vehicul-data'>{vehicule.longueur ? vehicule.longueur + 'm': 'null' }</span></div>



                </div>
                <div className='vehicule-info-righttside'>
                    <div className='item-vehicul-info'><span className='vehicule-info-icon'><img src="/img/weight.png" alt="" srcset="" width={'15%'} /></span> poide: <span className='vehicul-data'>{vehicule.poid ? vehicule.poid + 'kg': 'null'} </span></div>
                    <div className='item-vehicul-info'><span className='vehicule-info-icon'><img src="/img/essiex.png" alt="" srcset="" width={'15%'} /></span> essieux: <span className='vehicul-data'>{vehicule.essieux ? vehicule.essieux : 'null'}</span></div>
                    <div className='item-vehicul-info'><span className='vehicule-info-icon'><img src="/img/axles.png" alt="" srcset="" width={'15%'} /></span> espacement essieux: <span className='vehicul-data'>{vehicule.espace_essieux ? vehicule.espace_essieux + 'm': 'null'}</span></div>



                </div>
                <div className='img-vehicule'>
                    <img src="/img/truck.png" alt="img" srcset="" width={'100%'} height={'80%'}/>
                </div>
            </div>
        </div>
    )
}else{
    return(
        <h1>loging</h1>
    )
}
}