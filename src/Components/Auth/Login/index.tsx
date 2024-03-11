import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../../../Data/slices/auth';
import FormAction from '../../../Pages/Auth/Login/FormAction';
import FormExtra from '../../../Pages/Auth/Login/FormExtra';
import supabase from '../../../Utils/api';
import { loginFields } from '../../../Utils/constants';
import { useAppDispatch } from '../../../Utils/hooks';
import Input from '../../Inputs/Input';

const fields=loginFields;

let fieldsState:any = {};
fields.forEach(field=>fieldsState[field.id]='');
export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        authenticateUser();
    }

    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    //Handle Login API Integration here
    const authenticateUser = async () =>{
       await  dispatch(login(loginState))
       navigate('/countries')
        //     const settedSession = await supabase.auth.setSession({
        //         access_token:data?.session?.access_token,
        //         refresh_token:data?.session?.refresh_token
        //     })

        //     // const forgetPassword = await supabase.auth.resetPasswordForEmail(email, {
        //     //         redirectTo: 'https://localhost:3000/update-password',
        //     // })
    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px">
            {
                fields.map(({id,labelFor,labelText,name,type,isRequired,placeholder})=>
                        <Input
                            key={id}
                            handleChange={handleChange}
                            value={loginState[id]}
                            labelText={labelText}
                            labelFor={labelFor}
                            id={id}
                            name={name}
                            type={type}
                            isRequired={isRequired}
                            placeholder={placeholder}
                    />
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction  text="Login"/>

      </form>
    )
}