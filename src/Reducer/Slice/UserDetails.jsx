import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


// create user

export const createUser=createAsyncThunk("createUser", async (data,{rejectWithValue})=>
{
  let url="https://6432540d3e05ff8b37244d66.mockapi.io/crud";

  try{
     let respone=await fetch (url,{
        method:"POST",
        headers:{
            "Content-type":"application/json",
        },
         body:JSON.stringify(data)
     });

     let result=await respone.json();
     return result;
  }
  catch(error)
  {
    return rejectWithValue(error);
  }
});

// read user operation/ show user

export const showUser=createAsyncThunk("showUser", async (args,{rejectWithValue})=>{

    
    try {
        let url="https://6432540d3e05ff8b37244d66.mockapi.io/crud";
        let respone=await fetch (url);
         let result=await respone.json();
         
         return result;
        
    } catch (error) {
        
        return rejectWithValue(error);
    }
});

export const deleteUser=createAsyncThunk("deleteUser", async(id,{rejectWithValue})=>{

     try {
        let url=`https://6432540d3e05ff8b37244d66.mockapi.io/crud/${id}`;

          let responce=await fetch(url,
            {
                method:"DELETE"
            }
            );

            let result=await responce.json();
    

            return result;

         } 
    catch (error) {
        return rejectWithValue(error);
        
        }
})

// update action

export const userUpdate=createAsyncThunk('userUpdate' , async (data,{rejectWithValue})=>{

         let {id}=data;
    try {
        let url=`https://6432540d3e05ff8b37244d66.mockapi.io/crud/${id}`

         let respone=await fetch (url,{
            method:"PUT",
            headers:{
                "Content-type":"application/json",
            },
             body:JSON.stringify(data)
         });
         let result =await respone.json();
         console.log("updated result ",result)
        
       } 
    catch (error) {
        
        return rejectWithValue(error);

    }
})

export const UserDetails=createSlice({
    name:"UserDetails",

    initialState:{
        users:[],
        loading:false,
        error:null,
    },
    extraReducers:{
        [createUser.pending]:(state)=>
        {
            state.loading=true;
        },

        [createUser.fulfilled]:(state,action)=>{

            state.loading=false;
           state.users.push(action.payload);
        
        },
        [createUser.rejected]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },

        [showUser.pending]:(state)=>{
            state.loading=true;
        },

        [showUser.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },

        [showUser.rejected]:(state,action)=>{
          state.loading=false;
          state.users=action.payload;
        },

        [deleteUser.pending]:(state)=>{
            state.loading=true;
        },

        [deleteUser.fulfilled]:(state,action)=>{
            state.loading=false;
            
            const {id}=action.payload;

            if(id)
            {
                state.users=state.users.filter((user)=> user.id !== id)
            }
        },

        [deleteUser.rejected]:(state,action)=>{
          state.loading=false;
          state.users=action.payload;
        },


    }  ,
             
})

export default UserDetails.reducer;