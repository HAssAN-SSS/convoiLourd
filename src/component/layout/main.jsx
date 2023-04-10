import { Link } from 'react-router-dom';
import { store } from '../../store'
import './main.css'

export default function Main () {
    const data = store.getState();
    // console.log('test demande:',data)
    let listDemade = data.lesDemandes.todo.map(function (dmd) {
        return(
            <Link key={dmd.dmd} to={`/${dmd.dmd}/${'id_user'}/${'demande'}`} > 

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
    return(
        <span className="main">
            {listDemade}
            
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