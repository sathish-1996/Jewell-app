import React from 'react'
import "./index.css"
import data from '../../components/JsonData/data'

const Collections = ({ getData }) => {
    // const [value, setValue] = useState([])
    let validData = []
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const handleData = (element, getData) => {
            return Object.fromEntries(Object.entries(element).filter(([k]) => getData.includes(k)));
        }
        const destructureData = handleData(element, getData)
        let valuesArray = Object.values(destructureData);

        for (let value of valuesArray) {
            validData.push(value)
        }


    }

    console.log(validData.flat(), "data")

    // const map = { "first": "1", "second": "2" };
    //   console.log(getKeyByValue(map,"2"));
    return (
        <div style={{ padding: "20px" }} className='jewell-app-collections-container'>
            <div style={{ marginLeft: "45px" }} className='jewell-app-collections-nav'>
                <span>Home</span> / Search results for: '$ {getData}'
            </div>
            <hr />
            <div className='jewell-app-collections-text-center'>
                Search results for: '$ {getData}'
            </div>
            <hr />
            <div className='jewell-app-collections-images'>

                {validData.flat().map((x) => (
                    <div className='jewell-app-collection-alignment'>
                        <div className='jewell-app-collection-alignment-image'>
                            <img src={x.imgURL} alt={"collection"} />

                        </div>

                        <div className='jewell-app-border'>

                        </div>
                        <div className='jewell-app-collection-text-align'>
                            <div className='jewell-app-collection-text'>

                                $20,000
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