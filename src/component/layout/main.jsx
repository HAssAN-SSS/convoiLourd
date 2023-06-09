import { Link } from 'react-router-dom';
import { store } from '../../store'
import { useParams } from 'react-router-dom';
import './main.css'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoFetch } from '../../store';
import { refusedFetch } from '../../store';
export default function Main (props) {
    let Dispatch = useDispatch()
    let params = useParams()
    let [data,setdata] = useState(store.getState())
    let datosDemandas
    
    // !-----------------------------------------
    // console.log('test from main:',data.lesDemandes[data.sideOptActuel])
    let [letGo,setLetGo] = useState(true)
    // let [listDemade,setListDemadeo] = useState([])
    
    useEffect(() => {
        setdata( store.getState())
    },[props.boolSide])
        
        //         fetch('http://localhost:3001/'+data.sideOptActuel,
        //         {
            //             method:'POST',
            
            //             body:JSON.stringify(
                //                        {
                    //                            id_user:params.id,
                    //                            role:params.role
                    //                        }
//                    )
//               }
//               )
//               .then(response => response.json()
//               )
//               .then(data => {
    //                                 setdata(() => data)
    //                                console.log('sideData fetch',data)
    //                                // Dispatch(todoFetch(data))
    //                                props.redender((prv) => prv === 0 ? 1 : 0)
    
    //                                })
    //     .catch(error => {
        //       console.log('fetchError a hassan')
        //    //    Dispatch(fetchError())
        //     });
        
        //        //    },[letGo,Dispatch])
        //        if(data !== []) {
            //            if(data.sideOptActuel === 'To_Do') {
                //                Dispatch(todoFetch(data))
                
                //            } else if(data.sideOptActuel === 'Refused') {
                    //                Dispatch(refusedFetch(data))
                    
                    //            }
                    
                    //        }
                    datosDemandas = data.lesDemandes  
                    if(datosDemandas){
                        // setLetGo(() => true)
                        console.log('main render')
                        let cc = 0
                        var listDemade = store.getState().lesDemandes.map(function (dmd) {
                            return(
            <Link key={data.sideOptActuel + Math.floor(Math.random() * (100 - 0 + 1))} to={`/${params.role}/${params.id_user}/${params.version}/${dmd.id_demande}/${'demande'}`} > 

                <div>
                    {data.sideOptActuel}
                </div>
            <div  className='demande'>
                <div className='id-demande'>
                    <h5>#</h5>
                    {dmd.id_demande}
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
                    {dmd.societe_user}
                </div>
            </div>
            </Link>
        )
    })
    // setListDemadeo(listDemade)
}

return(
    <span className="main">
            {letGo ? listDemade : 'error main'}
            <div>{props.boolSide}</div>
            
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