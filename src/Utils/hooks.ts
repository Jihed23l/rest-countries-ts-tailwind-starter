import { useEffect } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../Data/store'
import {useLocation, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export const useAuthGuard = ()=>{
    const navigate=useNavigate()
    const {pathname}=useLocation()
    const {isAuthenticated}=useAppSelector(state=>state.auth)

    useEffect(()=>{
        console.log('authguard',isAuthenticated)
        if(isAuthenticated && ['/','/signup'].includes(pathname)){
            toast.info('Redirecting to home page')
            navigate('/countries')
            return
        }
        else if (!isAuthenticated){
            toast.error('You must be logged in to proceed')
            navigate('/')
            return 
        }
    },[isAuthenticated])    

    return isAuthenticated;
}