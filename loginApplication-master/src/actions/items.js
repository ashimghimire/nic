import axios from 'axios';

export const FETCH_ITEMS_SUCCESS = "FETCH_ITEM_SUCCESS";
export const ADD_ITEMS_SUCCESS="ADD_ITEMS_SUCCESS";
export const EDIT_ITEMS_SUCCESS="EDIT_ITEMS_SUCCESS";
export const DELETE_ITEMS_SUCCESS="DELETE_ITEMS_SUCCESS";
export const SEARCH_ITEMS_SUCCESS="SEARCH_ITEMS_SUCCESS";

export const fetchItems = () => {
    return function(dispatch){
       return axios.get("http://localhost:8081/items").then((response)=>{
            if(response.status===200){
                console.log(response);
                dispatch(fetchItemsSuccess(response.data));
            }           
        })
        
    }
}

export const deleteItems = (id) => {
    return function(dispatch){
       return axios.delete("http://localhost:8081/items", {data:{id}}).then((response)=>{
            if(response.status===200) {
                dispatch(deleteItemsSuccess(response.data));
                dispatch(fetchItems());
            }           
        })
        
    }
}

export const searchItems = (term) => {
    
    return function(dispatch){
       return axios.post("http://localhost:8081/items/search", {term}).then((response)=>{
            if(response.status===200) {
                dispatch(searchItemsSuccess(response.data));
            }           
        })
        
    }
}

export const addItems = (values) => {
    return function(dispatch){
       return axios.post("http://localhost:8081/items", values).then((response)=>{
            if(response.status===200){
                console.log(response);
                debugger;
                dispatch(fetchItems());
                dispatch(addItemsSuccess(response.data,values));
                //fetchItems();
            }           
        })
        
    }
}

export const editItems = (values) => {
    return function(dispatch){
       return axios.put("http://localhost:8081/items", values).then((response)=>{
            if(response.status===200){
                dispatch(fetchItems());
                dispatch(editItemsSuccess(response.data,values));
                //fetchItems();
            }           
        })
        
    }
}

export const addItemsSuccess = (response) => {
    return {
        type:ADD_ITEMS_SUCCESS,
        payload:response.data,
    }
}   

export const fetchItemsSuccess = (response) => {
 
    return {
        type:FETCH_ITEMS_SUCCESS,
        payload:response        
    }

}

export const editItemsSuccess=(response)=>{
   
    return {
        type:EDIT_ITEMS_SUCCESS,
        payload:response
    }

}

export const deleteItemsSuccess = (response) => {
   
    return {
        type:DELETE_ITEMS_SUCCESS,
        payload:response
    }

}


export const searchItemsSuccess = (response) => {
   
    return {
        type:SEARCH_ITEMS_SUCCESS,
        payload:response
    }

}