import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const billStore=createSlice({
  name:'bill',
  initialState:{
    billList:[]
  },
  reducers:{
    setBillList(state,action){
      state.billList=action.payload
    },
    addBill(state,action){
      state.billList.push(action.payload)
    }
  }
})
const {setBillList}=billStore.actions

const getBillList=()=>{
  return async(dispath)=>{
    const res=await axios.get('http://localhost:8888/ka')
    dispath(setBillList(res.data))
  }
}
const addBillList=(data)=>{
  return async(dispath)=>{
    const res=await axios.post('http://localhost:8888/ka',data)
    dispath(getBillList(res.data))
  }
}

export {getBillList,addBillList}
const reducer=billStore.reducer
export default reducer