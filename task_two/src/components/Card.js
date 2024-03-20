import React, { useEffect, useState } from 'react';
import axios from'axios';
import { RouterProvider } from 'react-router-dom';

function Card({company, category, n, min, max, show }) {
    const [data, setData] = useState([]);

    const fetchApi =async()=>{
        console.log("Am called");
        try{
            const result = await axios.get(`http://localhost:4000/getProducts/${company}/${category}/${n}/${min}/${max}`);
            if(result.status == 200){
               setData(result.data.data);
            }else{
                console.log("error");
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchApi();
    },[show])
    

  return (
    <>
        {data.length > 0 && data.map((d)=>{
            return (
                <div className=' h-72 w-56 bg-white border rounded-2xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
                    <img className=' w-full h-2/4 rounded-2xl p-1' src='./abc.jpg' />
                    <div className=' m-1 p-1 border rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                        <div className=' text-start text-lg font-semibold'> {d.productName}</div>
                        <div> Price : {d.price}</div>
                        <div>Rating : {d.rating}</div>
                        <div>Discount : {d.discount}</div>
                        <div>Stock : {d.availability}</div>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default Card