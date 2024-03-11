import { useEffect, useState } from "react"
import TeamSection12 from "../../../Components/Cards"
import SearchInput from "../../../Components/Inputs/Search"
import SelectOneInput from "../../../Components/Inputs/Select"
import { getAllCountriesByName, getAllCountriesByRegion, getAllCountriesWithParams } from "../../../Data/slices/countries"
import supabase from "../../../Utils/api"
import { useAppDispatch, useAppSelector, useAuthGuard } from "../../../Utils/hooks"

export default function Countries(){
    // useAuthGuard()

    //Here we are selecting values from store 📕
  const {loading,data}=useAppSelector(state=>state.countries)
  
  //Here we are dispatching actions 🕹️
  const dispatch=useAppDispatch()
  
  useEffect(()=>{
    dispatch(getAllCountriesWithParams({fields:'name,capital,flags,population,region'}))
  },[dispatch])

  const [searchValue,setSearchValue]=useState<string | null>(null)
  const [regionValue,setRegionValue]=useState<string | null>(null)

  const handleChangeSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTimeout(()=>{
      setSearchValue(e.target.value)
    },1000)
  }

  const handleChangeRegion=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    setTimeout(()=>{
      setRegionValue(e.target.value)
    },1000)
  }
  
  useEffect(()=>{
      if(searchValue){
          dispatch(getAllCountriesByName({name:searchValue}))
      }
  },[searchValue])

  useEffect(()=>{
    if(regionValue){
        dispatch(getAllCountriesByRegion({region:regionValue}))
    }
  },[regionValue])
  
  useEffect(()=>{
    // async function getCurrentUser(){
    //   const currentUser = await supabase.auth.getUser()
    //   console.log(currentUser)
    // }
    // getCurrentUser()


  })

return (
    <>
     <main className='m-20'>
            <form className='px-4 flex justify-between'>
                <SearchInput onChange={(e)=>handleChangeSearch(e)}/>
                <SelectOneInput onChange={(e)=>handleChangeRegion(e)}/>
            </form>
            <TeamSection12 content={data}/>
          </main>
    </>
)
}