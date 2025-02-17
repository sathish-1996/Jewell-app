import React, { useState } from 'react'
import Header from '../Header/header'
import "./index.css"
import Footer from '../Footer/footer'
import Body from '../../pages/Body/body'
import Collections from '../../pages/Collections/collections'

const Dashboard = () => {
  const [getData, setGetData] = useState("")
  const Tabs = [{ name: "Earings", image: "https://png.pngtree.com/png-clipart/20230317/ourmid/pngtree-gold-earring-jewellery-png-image_6648640.png" }, { name: "Braceletes", image: "https://rb.gy/tqz8aq" }, { name: "Necklace", image: "https://i.pinimg.com/474x/c1/3c/10/c13c10d5d9b0f67dec418d528c205d71.jpg" }, { name: "Chains", image: "https://rb.gy/ucwz8u" }, { name: "Gold Coins", image: "https://3.imimg.com/data3/BQ/CG/MY-6837151/0-250-mg-laxmi-gold-coin-500x500.png" }]
  const handleChange = (data) => {
   
    setGetData(data)
    // navigate("/collections")

  }
  return (
    <div>
      <Header />

      <div className='jewell-app-body-tabs'>
        {Tabs.map((x,i) => (
          <div className='jewell-app-body-tabs-inner' key={i} onClick={() => handleChange(x.name)}>
            <div className='jewell-app-body-tabs-img'>
              <img src={x.image} alt={"cardimg"} width={"40px"} height={"40px"} />
            </div>
            <div className='jewell-app-body-tabs-text'>
              {x.name}
            </div>


          </div>
        ))}

      </div>
      {getData === "" ? <Body /> : <Collections getData={getData}/>}
      <Footer />
    </div>
  )
}

export default Dashboard