import React from 'react'
import { Link } from 'react-router-dom'
import './PageProduct.css'

export default function ProductsStore() {

  return (
    <>
      <div className='PageContainer'>
        <h2>Productos</h2>
        <div className='CardContainer'>
            <img className='img' src={'https://i.postimg.cc/132Q6DjZ/buzo1-removebg-preview.png'} alt='Buzos' />
            <div className=''>
              <h3>Buzos</h3>
              <p>Descripcion</p>
              <button className='btn'>
                <Link className='link' to='/hoodie'>Ver más</Link>
              </button>
            </div>
        </div>

        <a href="" className='productoContenedor'>
          <div className='productoTop'>
            <img id='img-prdct' src="https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115021IPPX/0ZXSWM115021IPPX-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80" alt="" />
          </div>
          <div className='productoBot'>
            <h3 className='productoNombre'>X Minions Shark Full Zip Hoodie</h3>
            <p className='productoPrecio'>US$509.00</p>
          </div>
        </a>

        <div className='CardContainer'>
            <img className='img' src={'https://i.postimg.cc/NG319J1x/D-NQ-NP-715257-MLA43248628033-082020-W-removebg-preview.png'} alt='Remeras'/>
            <div>
              <h3>Remeras</h3>
              <p>Descripcion</p>
              <button className='btn'>
                <Link className='link' to='/tshirt'>Ver más</Link>
              </button>
            </div>
        </div>

        <div className='CardContainer'>
            <img className='img' src={'https://i.postimg.cc/0QmyLfb8/Gorra-removebg-preview.png'} alt='Gorras'/>
            <div>
              <h3>Gorras</h3>
              <p>Descripcion</p>
              <button className='btn'>
                <Link className='link' to='/cap'>Ver más</Link>
              </button>
            </div>
        </div>
      </div>
    </>
  )
}
