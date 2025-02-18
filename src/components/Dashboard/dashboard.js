import React, { useState } from 'react'
import Header from '../Header/header'
import "./index.css"
import Footer from '../Footer/footer'
import Body from '../../pages/Body/body'
import Collections from '../../pages/Collections/collections'
import Cart from '../../pages/Cart/cart'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({ navTab }) => {
  const [getData, setGetData] = useState("")
  const dispatch = useDispatch()
  const items = useSelector(state => state);

  const Tabs = [{ name: "Earings", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBE0l_9ptwosUegqex-PDCokrE-QOBeZVjBw&s" }, { name: "Braceletes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qL4sdolPKlQyn-lWk0oFngD6_Xohejd-jg&s" }, { name: "Necklace", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkqKuHmduNgzxZZswGeL5ZEj-cdUkiazqwFy4N8x5cnCxcS0Jxb9VrQQpC-rrGnPu_Rs&usqp=CAU" }, { name: "Chains", image: "https://clara.in/cdn/shop/products/cswzmp62me51_sch_1024x1024.jpg?v=1625054194" }, { name: "GoldCoins", image: "https://3.imimg.com/data3/BQ/CG/MY-6837151/0-250-mg-laxmi-gold-coin-500x500.png" }]
  const handleChange = (data) => {

    setGetData(data)
    dispatch({ type: "NAVIGATE_PAGE", payload: false })

  }

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className='jewell-app-body-tabs'>
        {Tabs.map((x, i) => (
          <div className='jewell-app-body-tabs-inner' key={i} onClick={() => handleChange(x.name)}>
            <div className='jewell-app-body-tabs-img'>
              <img src={x.image} alt={"cardimg"} width={"45px"} height={"40px"} />
            </div>
            <div className='jewell-app-body-tabs-text'>
              {x.name}
            </div>


          </div>
        ))}

      </div>
      {items.isBoolean === true ? <Cart /> : items.isBoolean === false && getData === "" ? <Body /> : <Collections getData={getData} />}

      <Footer />
    </div>
  )
}

export default Dashboard