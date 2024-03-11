import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import supabase from '../../Utils/api';

interface DataState{
  isAuthenticated:boolean,
  error:string | null,
  loading:boolean,
  session:any,
  user:any,
}

const initialState :DataState = {
    isAuthenticated:false,
    loading:false,
    error:null,
    session:{},
    user:{}
}


export const login = createAsyncThunk(
  "auth/login",
  async (queries:{email:string,password:string}, thunkAPI) => {
  let data;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email:queries?.email,
      password:queries?.password,
    })

    if (!error) {
       return data
    }

    throw new Error(error?.message);
  } catch (err:any) {
    toast.error(err?.message)
    return Promise.reject(err.message ? err.message : err);
  }
}
); 

export const logout = createAsyncThunk(
  "auth/logout",
  async (queries, thunkAPI) => {
  try {
    const {  error } = await supabase.auth.signOut()

    if (!error) {
      toast.success('logged out successfully')
      return
    }

    throw new Error(error?.message);
  } catch (err:any) {
    toast.error(err?.message)
    return Promise.reject(err.message ? err.message : err);
  }
}
); 

export const signup = createAsyncThunk(
  "auth/signup",
  async (queries:{email:string,password:string}, thunkAPI) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: queries?.email,
      password: queries?.password,
  })

    if (!error) {
       return data
    }

    throw new Error(error?.message);
  } catch (err:any) {
    toast.error(err?.message)
    return Promise.reject(err.message ? err.message : err);
  }
}
); 

const slice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
    },
    extraReducers: (builder) => {
      builder
      .addCase(login.pending, (state) => {
          state.loading = true;
          state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload.user;
          state.session=action.payload.session
          state.isAuthenticated=true
      })
      .addCase(login.rejected, (state, action) => {
          state.loading = false;
          state.error = (action.error.message as string) || 'Failed to fetch data';
      });
      builder
      .addCase(signup.pending, (state) => {
          state.loading = true;
          state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
          state.loading = false;
          state.error=null
      })
      .addCase(signup.rejected, (state, action) => {
          state.loading = false;
          state.error = (action.error.message as string) || 'Failed to fetch data';
      });
      builder
      .addCase(logout.pending, (state) => {
          state.loading = true;
          state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
          state.loading = false;
          state.error=null
          state.user={}
          state.session={}
          state.isAuthenticated=false
      })
      .addCase(logout.rejected, (state, action) => {
          state.loading = false;
          state.error = (action.error.message as string) || 'Failed to fetch data';
      });
  },
})

export const { }= slice.actions
export const reducer=slice.reducer
export default slice