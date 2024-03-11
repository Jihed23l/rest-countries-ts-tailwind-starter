import {combineReducers} from '@reduxjs/toolkit'
import {reducer as countriesReducer} from "../slices/countries"
import {reducer as authReducer} from "../slices/auth"


const rootReducer=combineReducers({
    countries:countriesReducer,
    auth:authReducer
})

export default rootReducer