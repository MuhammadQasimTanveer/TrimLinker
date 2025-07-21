import React from 'react'
import "./Card.css"

const Card = (props) => {
  const Icon = props.icon;
  const cardClass = Icon ? 'card1' : 'card2';

  return (
    <div className={cardClass}>
        { Icon ? 
        (
          <Icon color="green" size={33} 
            style={{ padding: '8px', marginBottom: '16px', borderRadius: '50%', 
            backgroundColor: 'rgb(220,230, 242)'
          }}/>
        ) 
        :
        (
        <h1 style={{ width: '35px', height: '35px', lineHeight: '35px', textAlign: 'center', 
            margin: '0 auto 16px auto', display: 'block',  color: 'white',  borderRadius: '50%', 
            backgroundColor: 'rgb(41, 163, 153)', fontSize: '26px'
        }}> {props.id} </h1>
        )
        }
      <h2> {props.title} </h2>
      <p> {props.description} </p>
    </div>
  )
}
export default Card