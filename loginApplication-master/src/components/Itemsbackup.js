import React, {useEffect} from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';

let initialValues={
    title:'',
    description:'',
    price:'',
    categories:[]
}

const Items = (props) => { 
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    } =props;

       
    
    const setValues = (values)=>{
        props.setValues(values);
    }

    const searchItems = (target) =>{
        if(target.value.trim().length===0){
            props.fetchItems();
        }else{
            props.searchItems(target.value);
        }
    }

    return (
    <div className="col-sm-12">
        <div className="row">
            <div className="col-sm-4" style={{marginTop:'20px'}}>
                <form onSubmit={handleSubmit}>               
                <div className="form-group">
                    <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.title} name="title" placeholder="Title" className="form-control"></input>
                    {errors.title && touched.title && <div id="feedback">{errors.title}</div>}
                </div>
                <div className="form-group">
                    <textarea onChange={handleChange} onBlur={handleBlur} value={values.description} name="description" placeholder="Description" className="form-control" rows="10"></textarea>
                    {errors.description && touched.description && <div id="feedback">{errors.description}</div>}
                </div>
                <div className="form-group">
                    <input type="number" onChange={handleChange} onBlur={handleBlur} value={values.price} name="price" placeholder="Price in NRs" className="form-control"></input>
                    {errors.price && touched.price && <div id="feedback">{errors.price}</div>}
                </div>
                <div className="form-group">
                    <select className="form-control" multiple onChange={handleChange} onBlur={handleBlur} value={values.categories} name="categories">
                        <option value=""></option>
                        <option value="id-23432">Categories 1 </option>
                    </select>
                    {errors.categories && touched.categories && <div id="feedback">{errors.categories}</div>}
                </div>
                <div className="form-group">
                    {values._id? <button type="submit" className="btn btn-danger" style={{marginRight:'5px'}}>Edit the Item</button> :null}
                    <button type ="submit" disabled={isSubmitting}  style={{marginRight:'5px'}} className="btn btn-primary">Add New Item</button>

                </div>
                </form>
                

            </div>
            <div className="col-sm-8" style={{height:'85vh', overflowY:'scroll',  }}>
                <div className="col-sm-12 p-0" style={{marginTop:'20px'}}>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={ (event) => searchItems(event.target) } placeholder="Search" />
                    </div>
                </div>
                {props.items.items?props.items.items.map((item)=>{
                        return (<div className="card" style={{marginTop:'20px'}}  key={item.id} >
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-8" onClick={()=>setValues(item)} >
                                        <h5 className="card-title">{item.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{'NRs ' + item.price}</h6>
                                    </div>
                                    <div className="col-sm-4 d-flex justify-content-end">
                                           <a onClick={ () => props.deleteItems(item._id)} style={{cursor:'pointer'}}><i class="material-icons" style={{color:'grey'}}>delete</i></a>                                                             
                                    </div>
                                </div>
                            </div>
                        </div>)
                }):null}
            </div>
        </div>  
    </div>)

}


const validationSchema=yup.object().shape({
    title:yup.string().required("Field is required"),
    description:yup.string().max(100,"Not more than 100"),
    price:yup.number().max(50,"Price should be limited")
});



const items=withFormik({
    mapPropsToValues:() => { return initialValues },
    validationSchema:validationSchema,
    enableReinitialize:true,
    handleSubmit:(values,{props,resetForm,setSubmitting})=>{
        if(values._id){
            props.editItems(values);
        } else{
            props.addItems(values);
        }
        resetForm(initialValues);      
    }


})(Items)

export default items;