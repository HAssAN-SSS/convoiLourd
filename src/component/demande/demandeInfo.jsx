import './demandeInfo.css'
import { store } from '../../store'
import { useEffect, useState } from 'react'
export default function DemandeInfo(props) {
    let [demandeData,setDemandeData] = useState(store.getState())
    
    useEffect(() => {
        setDemandeData(() => store.getState())  
        
    },[props.rende])
    // ?--------------------------------set basic opt ----------------------------------
        let lesBascopt = demandeData.user_operation.basicopt
        let basicOptList =[]
        for(let key in lesBascopt) {
            basicOptList.push(
                <button className={lesBascopt[key]+'btn'}>{lesBascopt[key]}</button>
            )
        }
        
    // ?--------------------------------set basic opt ----------------------------------
    let demandeActuelData = demandeData.dmdActual.demandeInfo
    return(
        <div className="demandeinfo">
            
                <h4>Demande Info</h4><hr />
                <div className='id-date-demande-info'>
                    <div className='id-demande-info'>#{demandeActuelData.id_demande}</div>
                    <div><b>Date Demande:</b><br></br>{demandeActuelData.date_demande} </div>
                    
                </div>
                <hr />
                <div className='client-societe-demande-info'>

                    <div className='client-info-demande-info'>

                                <div className='client-info-demande-info-item'>
                                <b>Client:  </b><span>{demandeActuelData.lname_user} {demandeActuelData.name_user.toUpperCase()}</span>
                                </div>
                                <div className='client-info-demande-info-item'>
                                <b>Tel: </b><span>{demandeActuelData.tel_user}</span>
                                </div>
                                <div className='client-info-demande-info-item'>
                                <b>Email: </b><span>{demandeActuelData.email_user}</span>
                                </div>

                    </div>

                    <div className='societe-cliente-info'>
                        <div className='logo_societe'><img src="/img/tme.png" alt="logo" width={'120vw'}/></div>
                        <div className='cliente-societe-name'> <b>Societe: </b><span>{demandeActuelData.societe_user}</span></div>
                    </div>

                </div>
                <hr />
                
                <div className='operation-demande-info'>
                    <div className='operatio-pointSorte-demande'>
                        <div className='operation-demande-info-case'><b>Operation: </b><span>{demandeActuelData.operation}</span></div>
                        <div><b>Point Sortie: </b><span>{demandeActuelData.point_sortie}</span></div>

                    </div>
                    <div className='operatio-pointSorte-demande'>
                        <div ><b>Date Operation: </b><span className='data-operation'>{demandeActuelData.date_operation}</span></div>
                        <div><b>Fechier: </b><span>{demandeActuelData.fechier}</span></div>

                    </div>
                </div>
                    <hr />
                    {/* ----------opt buttons---------------- */}
                <div className='basicOpt'>
                    {basicOptList}
                </div>
        </div>
    )
}