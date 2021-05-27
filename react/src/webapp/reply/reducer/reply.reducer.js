import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { useHistory } from 'react-router'
import {ReplyService} from 'webapp/reply/index'

export const getReplyList = createAsyncThunk("replies/list/reviewId",
async(reviewId)=>{
    const response = await ReplyService.list(reviewId)
    return response.data
})

export const getReplyRegister = createAsyncThunk("replies/register",
async(input)=>{
    const response = await ReplyService.register(input)
    return response.data
 })

 export const getReplyRead = createAsyncThunk(`replies/read`,
async(rno)=>{
    const response = await ReplyService.read(rno)
    return response.data
 })

 export const getReplyModify = createAsyncThunk('replies/modify/rno',
    async(reply)=>{

        console.log("===========================")
        console.log(reply)
        const response = await ReplyService.modify(reply)
        return response.data
    }
 )

 export const getReplyDelete = createAsyncThunk('replies/remove/rno',
    async(rno)=>{
        const response = await ReplyService.deletes(rno)
        return response.data
    }
 )

 const isRejectAction=action=>(action.type.endsWith('rejected'))

 const replySlice = createSlice({
     name : 'replies',
     initialState : {
        msg:'',
        replies:[],
        pageResult :{
            dtoList:[],
            page: 1,
            pageList:[],
            start : 1,
            end : 1,
            prev:false,
            next:false
        
        },
        params:{}
     },
     reducers : {},
     extraReducers : (builder)=>{
         builder.addCase(getReplyList.fulfilled,(state, {meta, payload})=>{
          
            state.replies = payload;
         })
         .addCase(getReplyRegister.fulfilled, (state, {payload})=>{
             const msg = '' +payload +"번 등록"
             return {...state, msg }
         })
         .addCase(getReplyRead.fulfilled, (state, {payload})=>{
           state.params = payload
         })
         .addCase(getReplyModify.fulfilled,(state, {payload})=>{
            state.reviewId = payload
         })
         .addCase(getReplyDelete.fulfilled,(state, {payload})=>{
            state.rno = payload
         })

         .addMatcher(isRejectAction,()=>{})
         .addDefaultCase((state, payload)=>{})
     }
 })

const{actions, reducer} =replySlice

  // 현재 review state
export const {}=actions
export default reducer