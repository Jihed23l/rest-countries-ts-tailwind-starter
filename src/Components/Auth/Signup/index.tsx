import React, { useState } from 'react';
import { signup } from '../../../Data/slices/auth';
import FormAction from '../../../Pages/Auth/Login/FormAction';
import supabase from '../../../Utils/api';
import { signupFields } from '../../../Utils/constants';
import { useAppDispatch } from '../../../Utils/hooks';
import Input from '../../Inputs/Input';

const fields=signupFields;
let fieldsState:any={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);
  const dispatch=useAppDispatch()
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit= async (e:React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    dispatch(signup({email:signupState?.email,password:signupState?.password}))
  }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                )
            }
          <FormAction text="Signup" />
        </div>
      </form>
    )
}