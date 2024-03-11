import { useEffect, useState } from "react";
import supabase from "../../../Utils/api";
import { useAuthGuard } from "../../../Utils/hooks";

export default function Example(){
    useAuthGuard()
    
    const [isInsertedData,setIsInsertedData]=useState(false)

   async function insertData(){
        const { error } = await supabase
        .from('Countries')
        .insert({capital:'London'})
        setIsInsertedData(true)
   }

   async function updateDate(){
        const { error } = await supabase
        .from('Countries')
        .update({ capital: 'Madrid' })
        .eq('id', 10)
        .select()
   }
    return (
        <>
            {/* <button onClick={()=>insertData()} >CREATE NEW COUNTRY</button> */}
            <button onClick={()=>updateDate()} >UPDATE EXISTING COUNTRY</button>
     
        </>
    )
}