import React from 'react'
import './Styles.scss'

function Home() {
  return (
    <div>
      <b>THIS IS NBA FANPOINT!</b>
      <Card
        img="https://phantom-marca.unidadeditorial.es/963b5b507cbbd053c14b2da121bcc3e1/resize/1320/f/jpg/assets/multimedia/imagenes/2020/12/09/16075360309119.jpg"
        title="Los Angeles Lakers"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img="https://fadeawayworld.net/.image/t_share/MTg1NDY4NzcyODA1NTE4NjI3/chicago-bulls.jpg"
        title="Chicago Bulls"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img="https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2133,w_3200/https%3A%2F%2Fchowderandchampions.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2016%2F04%2F1039322174.jpeg"
        title="Boston Celtics"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img="https://fadeawayworld.net/.image/t_share/MTg3MDk0ODQwMTc2MDI3MTE5/clippers-point-guards.jpg"
        title="Los Angeles Clippers"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img="https://fadeawayworld.net/.image/t_share/MTgwMTMyOTgzMjcxODU5MzIy/bucks-roster.jpg"
        title="Milwaukee Bucks"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img="https://fadeawayworld.net/.image/t_share/MTgwMTMyNjcwMjc5NDYwMTg0/nba-rumors-10-perfect-targets-for-the-houston-rockets-small-ball-team.jpg"
        title="Houston Rockets"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img="https://i.ytimg.com/vi/z09Ww8T2YtI/maxresdefault.jpg"
        title="Toronto Raptors"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
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
      <button className="card__btn">View Team</button>
    </div>
  );
}

export default Home
