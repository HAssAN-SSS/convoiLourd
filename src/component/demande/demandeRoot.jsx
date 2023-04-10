import React, { useEffect } from "react"
import { useParams } from "react-router" 
import './demandeRoot.css'
import DemandeInfo from "./demandeInfo"
export default function DemandeRoot() {
    let params = useParams()
    useEffect(() => {
        fetch('http://localhost:3001/demande',
            {
            method:'POST',
            body:JSON.stringify(
                {
                    id_demande:params.id_demande
                   }
                   )
        })
        .then((respon)=> respon.json())
        .then((data) => {
            console.log('demande data is her:',data)

        })
        .catch(err => 'demande data error')
    },[])
    return (
        <div className="demande-root">
            id_demande : {params.id_demande}
            <DemandeInfo />
        </div>
    )
}