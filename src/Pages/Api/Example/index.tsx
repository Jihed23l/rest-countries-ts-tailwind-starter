import { useEffect, useState } from "react";
import supabase from "../../../Utils/api";

export default function Example(){
    

    useEffect(()=>{
        async function fetchData(){
            const { data, error } = await supabase
            .from('Countries')
            .select('id,capital')

            console.log('Data',data)
            console.log('error',error)
          }
          fetchData()
     },[])
    return (
        <>
            <button >CREATE NEW COUNTRY</button>
        </>
    )
}