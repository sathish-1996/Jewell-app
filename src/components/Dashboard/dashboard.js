import React, { useState } from 'react'
import Header from '../Header/header'
import "./index.css"
import { MdArrowBack } from 'react-icons/md'
import { IoArrowForwardOutline } from 'react-icons/io5'
import Footer from '../Footer/footer'

const Dashboard = () => {
  const [page, setPage] = useState({ currentPage: 1, nextPage: 3 })

  const Images = [
    {
      title: "Earings",
      img: "https://media.istockphoto.com/id/1283895174/photo/beautiful-indian-young-hindu-bride.jpg?s=612x612&w=0&k=20&c=IzzYJcrvQSKudQmAq4u_or7vPURsFr-ij0U4O6-01OQ="
    },
    {
      title: "Bangle",
      img: "https://t3.ftcdn.net/jpg/06/54/85/10/360_F_654851064_pCd3iOjly2CrzgQt5b8VjNi55ttSpwec.jpg"
    },
    {
      title: "Bangle",
      img: "https://t4.ftcdn.net/jpg/06/93/96/67/360_F_693966717_pc0sYCyOqU6XflngohmYYwLDVcvTJkzU.jpg"
    },
    {
      title: "Earings",
      img: "https://media.istockphoto.com/id/1270784851/photo/pretty-indian-young-hindu-bride-in-studio-shot.jpg?s=612x612&w=0&k=20&c=IMyJuNuv2FpeV_9dp7kuwZ1yXJIPAJuflkQ4u0OvzF4="
    },
    {
      title: "Bangle",
      img: "https://t4.ftcdn.net/jpg/06/52/26/07/360_F_652260744_DLE8mFIeG2IOVhxpyO1D31LtCASSLqa6.jpg"
    },
    {
      title: "Bangle",
      img: "https://blog.southindiajewels.com/wp-content/uploads/2019/04/bridal-jewellery-collections-2019-4.jpg"
    }

  ]

  const Tabs = [{ name: "Earings", image: "https://png.pngtree.com/png-clipart/20230317/ourmid/pngtree-gold-earring-jewellery-png-image_6648640.png" }, { name: "Braceletes", image: "https://rb.gy/tqz8aq" }, { name: "Necklace", image: "https://i.pinimg.com/474x/c1/3c/10/c13c10d5d9b0f67dec418d528c205d71.jpg" }, { name: "Chains", image: "https://rb.gy/ucwz8u" }, { name: "Gold Coins", image: "https://3.imimg.com/data3/BQ/CG/MY-6837151/0-250-mg-laxmi-gold-coin-500x500.png" }]

  const indexOfLastTodo = page.currentPage * page.nextPage;
  const indexOfFirstTodo = indexOfLastTodo - page.nextPage;
  let data = Images.map((x) => x)
  const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);

  const pageNumbers = [];
  let val = Images.map((x, i) => x, 'val')
  for (let i = 1; i <= Math.ceil(val.length / page.nextPage); i++) {

    pageNumbers.push(i);
  }
  const Increment = () => {


    if (page.currentPage < 2) {
      setPage({ ...page, currentPage: page.currentPage + 1 });
    }
  }
  const Decrement = () => {

    if (page.currentPage > 1) {
      setPage({ ...page, currentPage: page.currentPage - 1 });
    }
  }

  console.log(page.currentPage, pageNumbers, 'val.length')

  return (
    <div>
      <Header />

      <div className='jewell-app-body-tabs'>
        {Tabs.map((x) => (
          <div className='jewell-app-body-tabs-inner'>
            <div className='jewell-app-body-tabs-img'>
              <img src={x.image} width={"40px"} height={"40px"}/>
            </div>
            <div className='jewell-app-body-tabs-text'>
              {x.name}
            </div>
            

          </div>
        ))}
      </div>
      <div className='jewell-app-body-img'>
        <img src="https://rb.gy/lm1ku2" width={"100%"} height={"550px"} />
      </div>

      <div className='jewell-app-body-text'>
        CELEBRATIONS
      </div>
      <div className='jewell-sub-title'>
        The Indian wedding is an amalgamation of glorious ceremonies. Engagement, sangeeth, muhurtam, or even the reception every moment shimmers timelessly. And for every one of those moments, we've crafted priceless exquisite jewellery sets.
      </div>

      <div className='jewell-app-body-img-slider'>
        <div className='jewell-app-body-img-slider-backward' onClick={Decrement}>
          <MdArrowBack size={30} color='#fff' />
        </div>
        <div className='jewell-app-body-img-slider-bg'>

          <div className='jewell-app-body-img-slider-bg-1' >
            {
              currentTodos.map((x) => (
                <div className='jewell-app-body-img-slider-bg-2' >
                  <img src={x.img} height={"300px"} />

                </div>

              ))
            }
          </div>

        </div>
        <div className='jewell-app-body-img-slider-backward' onClick={Increment}>
          <IoArrowForwardOutline size={30} color='#fff' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard