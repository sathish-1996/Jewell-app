import React, { useEffect, useReducer, useState } from 'react'
import "./index.css"
import data from '../../components/JsonData/data'
import { useDispatch, useSelector } from 'react-redux'
// import { addItem, removeItem } from '../../reducer/action';
import { setArray } from "../../reducer/reducer";
// import { reducer, initialState } from "../../reducer/reducer";
const Collections = ({ getData }) => {

    // const dispatch = useDispatch()

    const dispatch = useDispatch();

   
    const [count, setCount] = useState(0)
    let validData = []
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const handleData = (element, getData) => {
            return Object.fromEntries(Object.entries(element).filter(([k]) => getData?.includes(k)));
        }
        const destructureData = handleData(element, getData)
        console.log(element, getData, "data")
        let valuesArray = Object.values(destructureData);

        for (let value of valuesArray) {
            validData.push(value)
        }


    }
    ;
    return (
        <div style={{ padding: "20px" }} className='jewell-app-collections-container'>
            <div style={{ marginLeft: "20px" }} className='jewell-app-collections-nav'>
                <span style={{ color: "#000", fontWeight: "700", cursor: "pointer" }} >Home</span> / Search results for: '$ {getData}'
            </div>
            <hr />
            <div className='jewell-app-collections-text-center'>
                Search results for: '$ {getData}'
            </div>
            <hr />

            
            
            <div className='jewell-app-collections-images'>

                {validData.flat().map((x, i) => (
                    <div className='jewell-app-collection-alignment'>
                        <div className='jewell-app-collection-alignment-image' onClick={() =>
                            dispatch({ type: "ADD_ITEM", payload: x })
                        }>
                            <img src={x.imgURL} alt={"collection"} />

                        </div>

                        <div className='jewell-app-border'>

                        </div>
                        <div className='jewell-app-collection-text-align'>
                            <div className='jewell-app-collection-text'>

                                {x.price}
                            </div>
                            <div className='jewell-app-collection-text-danger'>

                                (20% OFF)
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Collections