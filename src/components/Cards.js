import React from 'react'
export { useDispatchCart, useCart} from './ContextReducer'
export default function
    (props) {




    let options = props.options;
    let priceOptions = Object.keys(options);
    let foodItem = props.foodItems;
    const handleAddTocart = ()=>{

    }
    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">Imp Text</p>
                    <div className='container'>
                        <select className='bg-success m-2 h-100'>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>

                        <select className='bg-success m-2 h-100 '>
                            {priceOptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>
                        <div className='d-inline'>
                            Total price
                        </div>

                    </div>
                    <hr>
                    </hr>
                    <button className={`btn btn-success justify-center ms-2`} onClick={handleAddTocart}>
                        Add to Cart

                    </button>
                </div>
            </div>
        </div>
    )
}