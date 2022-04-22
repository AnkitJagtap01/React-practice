import React from 'react'

function Contact() {
  return (
    // <div style={{ 
    //   backgroundImage: `url("https://cdn.nba.com/manage/2022/02/3pt022022.jpg")`
    // }}>
    <div>
      <Card
        img="https://assets.fontsinuse.com/static/use-media-items/76/75563/full-1920x1080/5bc2b2b6/social_share_default.png"
        title="NATIONAL BASKETBALL ASSOCIATION"
        description="	
        645 Fifth Avenue
        New York, NY 10022
        U.S.
        Contact: +1 (857) -250-9984
        Website: http://nba.com/"
      />
    </div>
  )
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" alt=""/>
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
    </div>
  );
}

export default Contact
