//Write the action creator functions here

import * as types from "./actionTypes"
import axios from "axios"

export const getprod =()=>(dispatch)=>{
    dispatch({type:types.GET_PRODUCTS_REQUEST})
    return axios.get("http://localhost:8080/products").then((r)=>{
        dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.GET_PRODUCTS_FAILURE})
    })
}


export const postprod =(payload)=>(dispatch)=>{
   
    dispatch({type:types.ADD_PRODUCT_REQUEST})
    return axios.post("http://localhost:8080/products",payload).then((r)=>{
        dispatch({type:types.ADD_PRODUCT_SUCCESS,payload:r})
    }).catch((e)=>{
        dispatch({type:types.ADD_PRODUCT_FAILURE})
    })
}

export const editprod =(id,payload)=>(dispatch)=>{
   
    
 dispatch({type:types.EDIT_PRODUCT_REQUEST})
 return axios.patch(`http://localhost:8080/products/${id}`, payload).then((r)=>{
    dispatch({type:types.EDIT_PRODUCT_SUCCESS,payload:r.data})
    return types.EDIT_PRODUCT_SUCCESS
 }).catch((e)=>{
    dispatch({type:types.EDIT_PRODUCT_FAILURE})
 })
}


export const deletprod =(id)=>(dispatch)=>{
  dispatch({type:types.DELETE_PRODUCT_REQUEST})

  return axios.delete(`http://localhost:8008/products/${id}`).then((r)=>{
    dispatch({type:types.DELETE_PRODUCT_SUCCESS,payload:r.data})
    return types.DELETE_PRODUCT_SUCCESS
  }).catch((e)=>{
    dispatch({type:types.DELETE_PRODUCT_FAILURE})
  })
}