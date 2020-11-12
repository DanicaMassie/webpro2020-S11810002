import React from 'react'
import images from '../imgs/kim-seo-ho.jpg'

class Inner extends React.Component {
  render(){
    return(
      <div className="inner_container">
        <img src={images}/>
        <p>Chi-chi <span>({this.props.power})</span></p>
      </div>
    )
  }
}

export default Inner
