import React from 'react'
import Button from 'react-bootstrap/Button';
const Index = (props) => {
  return (
    <div>
        <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="https://cdn.pixabay.com/photo/2021/09/13/22/02/add-6622547_1280.png"/>
            </div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://media.wired.com/photos/5f401ecca25385db776c0c46/master/w_1920,c_limit/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg"/>
            </div>
            <div className="text-wrapper item">
                <span>Price:100$</span>
            </div>
            <div className="btn-wrapper item" >
                <Button onClick={()=>props.addToCartHandler({pice:1000,name:'i phone 11'})} variant="outline-secondary">Add To Cart</Button>
            </div>
            
        </div>
    </div>
  )
}

export default Index