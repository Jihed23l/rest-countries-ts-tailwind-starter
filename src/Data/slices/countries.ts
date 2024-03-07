import {createAsyncThunk, createSlice,PayloadAction} from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axiosInstance from '../../Utils/axios';

interface DataState{
  data:[],
  loading:boolean,
  error:string | null
}

const initialState :DataState = {
    data:[],
    loading: false,
    error: null,
}

type getAllCountriesWithParamsQueries={
  fields:string,
}

type getAllCountriesByNameQueries={
  name:string,
}

type getAllCountriesByRegionQueries={
  region:string,
}

export const getAllCountriesWithParams = createAsyncThunk(
    "countries/getAllCountriesWithParams",
    async (queries:getAllCountriesWithParamsQueries, thunkAPI) => {
    let data;
    try {
      const response = await axiosInstance.get(`/all`,{params:{fields:queries?.fields}})
      data = await response.data.slice(0,15);
      if (response.status === 200) {
         return data
      }
      throw new Error(response.statusText);
    } catch (err:any) {
      return Promise.reject(err.message ? err.message : err);
    }
  }
); 

export const getAllCountriesByName = createAsyncThunk(
  "countries/getAllCountriesByName",
  async (queries:getAllCountriesByNameQueries, thunkAPI) => {
  let data;
  try {
    const response = await axiosInstance.get(`/name/${queries?.name}`,)
    data = await response.data.slice(0,15);
    if (response.status === 200) {
       return data
    }
    throw new Error(response.statusText);
  } catch (err:any) {
    return Promise.reject(err.message ? err.message : err);
  }
}
); 

export const getAllCountriesByRegion = createAsyncThunk(
  "countries/getAllCountriesByRegion",
  async (queries:getAllCountriesByRegionQueries, thunkAPI) => {
  let data;
  try {
    const response = await axiosInstance.get(`/region/${queries?.region}`,)
    data = await response.data.slice(0,15);
    if (response.status === 200) {
       return data
    }
    throw new Error(response.statusText);
  } catch (err:any) {
    return Promise.reject(err.message ? err.message : err);
  }
}
); 

const slice=createSlice({
    name:'countries',
    initialState:initialState,
    reducers:{

    },
    extraReducers: (builder) => {
      builder
          .addCase(getAllCountriesWithParams.pending, (state) => {
              state.loading = true;
              state.error = null;
          })
          .addCase(getAllCountriesWithParams.fulfilled, (state, action) => {
              state.loading = false;
              state.data = action.payload;
          })
          .addCase(getAllCountriesWithParams.rejected, (state, action) => {
              state.loading = false;
              state.error = (action.error.message as string) || 'Failed to fetch data';
          });
      builder
          .addCase(getAllCountriesByName.pending, (state) => {
              state.loading = true;
              state.error = null;
          })
          .addCase(getAllCountriesByName.fulfilled, (state, action) => {
              state.loading = false;
              state.data = action.payload;
          })
          .addCase(getAllCountriesByName.rejected, (state, action) => {
              state.loading = false;
              state.error = (action.error.message as string) || 'Failed to fetch data';
          });
      builder
          .addCase(getAllCountriesByRegion.pending, (state) => {
              state.loading = true;
              state.error = null;
          })
          .addCase(getAllCountriesByRegion.fulfilled, (state, action) => {
              state.loading = false;
              state.data = action.payload;
          })
          .addCase(getAllCountriesByRegion.rejected, (state, action) => {
              state.loading = false;
              state.error = (action.error.message as string) || 'Failed to fetch data';
          });
  },
})

export const { }= slice.actions
export const reducer=slice.reducer
export default slice