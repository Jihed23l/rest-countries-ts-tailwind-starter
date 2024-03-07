import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './Utils/hooks';
import { getAllCountriesByName, getAllCountriesByRegion, getAllCountriesWithParams } from './Data/slices/countries';
import Loader from './Components/Loader';
import Navbar from './Components/Navbar';
import SelectOneInput from './Components/Inputs/Select';
import TeamSection12 from './Components/Cards';
import SearchInput from './Components/Inputs/Search';

function App() {

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

  return (
    <div className="App">
          <Navbar/>
          <main className='m-20'>
            <form className='px-4 flex justify-between'>
                <SearchInput onChange={(e)=>handleChangeSearch(e)}/>
                <SelectOneInput onChange={(e)=>handleChangeRegion(e)}/>
            </form>
            <TeamSection12 content={data}/>
          </main>
         
      </div>
  );
}

export default App;
