import { Link } from 'react-router-dom';
import { store } from '../../store'
import { useParams } from 'react-router-dom';
import './main.css'
import { useEffect, useState } from 'react';

export default function Main (props) {
    let params = useParams()
    let [data,setdata] = useState(store.getState())
    
    // let [datosDemandas,setDatosDemandas] = useState(data.lesDemandes.todo)
    let datosDemandas = data.lesDemandes.todo
    // console.log('test demande:',data)
    useEffect(() => {
        setdata(() => store.getState())
        console.log('state getting')
    },[props])
    if(data !== null){
        console.log('main render')
        switch(data.sideOptActuel){
            case 'Done' : datosDemandas =  data.lesDemandes.done 
                break
            case 'Refused' : datosDemandas =  data.lesDemandes.done 
                break
            default : datosDemandas =  data.lesDemandes.todo 
        }
        
        // console.log(props)
        
        var listDemade =datosDemandas.map(function (dmd) {
        return(
            <Link key={dmd.dmd} to={`/${params.role}/${params.id_user}/${params.version}/${dmd.dmd}/${'demande'}`} > 

            <div  className='demande'>
                <div className='id-demande'>
                    <h5>ID Demande</h5>
                    {dmd.dmd}
                </div>
                <div className='date-demande'>
                    <h5>Date Demande</h5>
                    {dmd.date_demande}
                </div>
                <div className='date-operation'>
                    <h5>Date Operation</h5>
                    {dmd.date_operation}
                </div>
                <div className='operationDb'>
                    <h5>Operation</h5>
                    {dmd.operation}
                </div>
                <div className='societe_client'>
                    <h5>Societe_client</h5>
                    {dmd.societe_client}
                </div>
            </div>
            </Link>
        )
    })
}
    return(
        <span className="main">
            {data ? listDemade : 'error main'}
            
        </span>
    )
}
        // {
        //     dmd: 1,
        //     client_name: null,
        //     societe_client: null,
        //     date_demande: 2023-04-09T12:42:12.000Z,
        //     date_operation: null,
        //     operation: 'import',
        //     point_sortie: null
        //   }