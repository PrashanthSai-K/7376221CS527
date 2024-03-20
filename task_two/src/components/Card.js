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
                <div className=' h-72 w-56 bg-white border rounded-2xl'>
                    <img className=' w-full h-2/4 rounded-2xl p-1' src='./abc.jpg' />
                    <div className=' p-1'>
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