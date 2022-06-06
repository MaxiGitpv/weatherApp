import React from 'react'

const Cards = ({funColor}) => {
    console.log(colors)
  return (
    <div>
        <ul>
          <li><b>Nombre: </b></li>
           <li><b>Email: </b>{funColor}</li>
          {/*<li><b>Country: </b>{colors[2]}</li>
          <li><b>Code: </b>{colors[3]}</li> */}
        </ul>
    </div>
  )
}

export default Cards