import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Carousels from '../components/Carousels'
import { Card } from 'react-bootstrap'

export default function Home() {

    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();

        setFoodItem(response[0])
        setFoodCat(response[1]);
     
    }

    useEffect(() => {
        loadData()
    })





    return (
        <div>
            <div><Navbar /></div>
            <div><Carousels /></div>
            <div className='container'>
                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (<div className='row mb-3'>
                                <div key={data._id} className='fs-3 m-3'>
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {foodItem !== []
                                    ?
                                    foodItem.filter((item) => item.CategoryName === data.CategoryName)
                                        .map(filterItems => {
                                            return (
                                                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                    <Cards foodItem={filterItems}
                                                      options={filterItems.options[0]}
                                                      
                                                    
                                                    ></Cards>
                                                </div>
                                            )
                                        })

                                    : <div>No such data found</div>}
                            </div>
                            )
                        })
                        : ""
                }
                
            </div>
            <div><Footer /></div>

        </div>
    )
}
