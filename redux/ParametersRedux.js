import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import food from "../data/foods.json"
import menuItem from "../data/menu.json"
/* ------------- Types and Action Creators ------------- */
//this is the step 1 (entry point)
//call this entry point from any screen
//then go to step 2 : check the XXX_XXX type to call reducer step 3
//ACTION -> TYPE
const { Types, Creators } = createActions({
  displayFood: ['displayFood'],
  optionalMenu:["optionalMenu"],
  updateChicken:['chicken']
})

export const ParametersRedux = Types
export default Creators

/* ------------- Initial State ------------- */
//Very first step 0, we have to initiate the state
export const INITIAL_STATE = Immutable({
  displayFood:food,
  optionalMenu: menuItem,
  chicken: 0
})

/* ------------- Reducers ------------- */
//this is the step 3 - last step
//the reducer has to modify the overall state

export const updateChicken = (
    state,
    { chicken }
) => {
  return {
    ...state,
    chicken
  }
}

export const displayFood = (
    state,
    { displayFood }
) => {
  return {
    ...state,
    displayFood
  }
}

export const optionalMenu = (
    state,
    { optionalMenu }
) => {
  return {
    ...state,
    optionalMenu
  }
}

/* ------------- Hookup Reducers To Types ------------- */
//this is the step 2
//in order to call a reducer "updateMMR" from XXX_XXX as type
export const reducer = createReducer(INITIAL_STATE, {
  [Types.DISPLAY_FOOD]: displayFood,
  [Types.OPTIONAL_MENU]: optionalMenu,
  [Types.UPDATE_CHICKEN]: updateChicken,
})
