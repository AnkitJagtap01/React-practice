import React from 'react'

function About() {
  return (
    // <div style={{ 
    //   backgroundImage: `url("https://cdn.nba.com/manage/2022/02/3pt022022.jpg")`
    // }}>
    <div>
      <Card
        img="https://assets.fontsinuse.com/static/use-media-items/76/75563/full-1920x1080/5bc2b2b6/social_share_default.png"
        title="NATIONAL BASKETBALL ASSOCIATION"
        description="The National Basketball Association (NBA) is a professional basketball league in North America. The league is composed of 30 teams (29 in the United States and 1 in Canada) and is one of the major professional sports leagues in the United States and Canada. It is the premier men's professional basketball league in the world."
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

export default About
