import {combineReducers} from '@reduxjs/toolkit'
import {reducer as countriesReducer} from "../slices/countries"

const rootReducer=combineReducers({
    countries:countriesReducer
})

export default rootReducer