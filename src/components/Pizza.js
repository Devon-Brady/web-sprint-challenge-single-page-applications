import React from 'react';
import Home from './Home';
import {useState} from 'react';
import schema from '../validation/Schema';
import * as yup from 'yup';
import axios from 'axios';


export default function Pizza(){

    const initialValues = {
        name:'',
        size:'',
        veggies:false,
        cheese:false,
        pepperoni:false,
        sausage:false,
        instructions:''
      }
      const initialFormErrors = {
        name:'',
        size:'',
        veggies:false,
        cheese:false,
        pepperoni:false,
        sausage:false,
        instructions:'',
      }


      const [ values , setValues] = useState(initialValues);
        const[errors, setErrors] = useState(initialFormErrors);
        // console.log(values)

    function changeValues(e){
        e.persist();
        const correctValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        
            function validate (){
                yup
                .reach(schema,e.target.name)
                .validate(correctValue)
                .then((res) => {
                    console.log(res);
                    setErrors({...errors,[e.target.name]:''})
                })
                .catch((err) =>{
                    setErrors({...errors,[e.target.name]:err.message})
                })
        
            }
            validate();
            
            setValues({...values,[e.target.name]:correctValue})
        }

        function SubmitData (e){
            e.preventDefault();
            axios
            .post(`https://reqres.in/api/orders`,values)
            .then((res)=>{
                prop.orderFunc(res.data);
                console.log(res);
                setValues(initialValues);
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    return (
        
        <div>
            <Home/>
       <form>
           <label>Name
               <input 
               type="text" 
               name='name' 
               value={values.name}
               onChange={changeValues}
               />
           </label>
           {errors.name ? <div>{errors.name}</div> : ""}
           <label>
           Size
          <select  name="size" value={values.size} onChange={changeValues}>
            <option value="">- Select an option -</option>
            <option value="small">Small 10"</option>
            <option value="medium">Medium 14"</option>
            <option value="large">Large 16"</option>
            <option value="deepDish">DeepDish 14"</option>
          </select>
           </label>
            <label>
                Veggies
                <input
                type='checkbox'
                name='veggies'
                checked={values.veggies}
                onChange={changeValues}
                />
            </label>

            <label>
                Cheese
            <input
                type="checkbox"
                name="cheese"
                checked={values.cheese}
                onChange={changeValues}
            />
            </label>

            <label>
            Pepperoni
            <input
                type="checkbox"
                name="pepperoni"
                checked={values.pepperoni}
                onChange={changeValues}
            />
            </label>

            <label>
            Sausage
            <input
                type="checkbox"
                name="sausage"
                checked={values.sausage}
                onChange={changeValues}
            />
            </label>
            
            <label>
                Special Instructions
                <input
                type="text"
                name='instructions'
                value={values.instructions}
                onChange={changeValues}
                />
            </label>
            <button>Order!</button>
       </form>
       </div>
    )
}



    
       
    
