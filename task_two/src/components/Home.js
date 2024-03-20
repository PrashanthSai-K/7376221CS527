import React, { useState } from 'react';
import Card from './Card';


function Home() {

    const [options, setOptions] = useState({ company: "FLP", category: "Laptop", n: "20", min: "100", max: "100000" });
    // const [data, setData] = useState([]);

    // const fetchApi =async()=>{
    //     try{
    //         console.log(`http://localhost:4000/getProducts/${company}/${category}/${n}/${min}/${max}`)
    //         const result = await axios.get(`http://localhost:4000/getProducts/${company}/${category}/${n}/${min}/${max}`);
    //         if(result.status == 200){
    //            setData(result.data.data);
    //         }else{
    //             console.log("error");
    //         }
    //     }catch(error){
    //         console.log(error);
    //     }
    // }

    const handleInput = (e) => {
        setOptions({ ...options, [e.target.name]: e.target.value })
    }

    const handleRender =()=>{
        setShow((prev)=>!prev);

    }
    const [show , setShow] = useState(false);

    const categories = ["Laptop", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Phone", "PC"]

    console.log(options);
    return (
        <>
            <div className='p-6 flex justify-between gap-3 items-center flex-wrap border m-3 rounded-3xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                <div className='text-3xl font-semibold '> Top <span className=' text-red-600'>"</span >N<span className=' text-red-600'>"</span>Products </div>
                <div> Get top "N" products  of your need</div>
            </div>
            <div className='pl-6 pt-2'>
                <div>Filter options :</div>
                <div className='flex flex-wrap gap-5 pb-5'>
                    <div>
                        <label>Company name :</label>
                        <select className='border border-black rounded-xl p-1 pl-2' onChange={handleInput} name='company'>
                            <option value="FLP">Flipkart</option>
                            <option value="AMZ">Amazon</option>
                            <option value="SNP">Snapdeal</option>
                            <option value="MYN">Myntra</option>
                            <option value="AZO">Ajio</option>
                        </select>
                    </div>
                    <div>
                        <label>Company name :</label>
                        <select className='border border-black rounded-xl p-1 pl-2' onChange={handleInput} name='category'>
                            {categories.map((d) => {
                                return (
                                    <option value={d}>{d}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div>
                        <label>Top N count : </label>
                        <input value={options.n} className='border border-black rounded-xl p-1 pl-2' onChange={handleInput} type='text' name='n' />
                    </div>
                    <div>
                        <label>Minimun Price: </label>
                        <input value={options.min} className='border border-black rounded-xl p-1 pl-2' onChange={handleInput} type='number' name='min' />
                    </div>
                    <div>
                        <label>Maximun Price : </label>
                        <input value={options.max} className='border border-black rounded-xl p-1 pl-2' onChange={handleInput} type='text' name='max' />
                    </div>
                </div>
                <center><button onClick={handleRender} className='  text-center border border-black hover:bg-black hover:text-white p-2 rounded-xl'>Get Products</button></center>
            </div>
            {
                <div className='flex flex-wrap gap-5 items-center justify-center pt-3 pb-3'>
                    <Card show={show} company={options.company} category={options.category} n={options.n} min={options.min} max={options.max} />
                </div>
            }
        </>
    )
}

export default Home