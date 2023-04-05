import Hero from "./Hero";
import data from "../datas/data";
import Countdown from "react-countdown";

export default function Main() {
  const categoriesItems = data().categories.map((item) => {
    return (
      <div key={item.id}>
        <div className="circle">
          <img src={item.icon} alt={item.title} />
        </div>
        <p>{item.title}</p>
      </div>
    );
  });

  const trendingProducts = data().trending.map((item) => {
    return (
      <div className="card" key={item.id} onClick={handleClick}>
        <button className="heart" onClick={handleClick}>
          <i class="fa-regular fa-heart"></i>
        </button>
        <img src={item.img} alt={item.title} />
        <p>{item.type}</p>
        <h2>{item.title}</h2>
        <div>
          <h2>${item.price}</h2>
          <span>
            {item.amount} <img src="./icons/cart.png" alt="" />
          </span>
        </div>
      </div>
    );
  });

  const Completionist = () => <span>You are missed best deal!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="countdownContainer">
          <div className="countdown">{hours}</div>:
          <div className="countdown">{minutes}</div>:
          <div className="countdown">{seconds}</div>
        </span>
      );
    }
  };

  function handleClick() {
    return console.log("Clicked");
  }

  const bestDealProducts = data().bestdeal.map((item) => {
    return (
      <div className="card" key={item.id} onClick={handleClick}>
        <p className="discount">-{item.discount * 100}%</p>
        <button className="heart" onClick={handleClick}>
          <i class="fa-regular fa-heart"></i>
        </button>
        <img src={item.img} alt={item.title} />
        <p>{item.type}</p>
        <h2>{item.title}</h2>
        <div>
          <h2>${item.cost * (1 - item.discount)}</h2>
          <span>
            {item.amount} <img src="./icons/cart.png" alt="" />
          </span>
        </div>
        <p className="lineThrough">${item.cost}</p>
      </div>
    );
  });

  const discoverCards = data().discover.map((item) => {
    return (
      <div className="card" key={item.id}>
        <img src={item.img} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.date}</p>
      </div>
    );
  });

  return (
    <main>
      <Hero />
      <section className="categories">
        <h1 className="title">Categories</h1>
        <div className="categoriesList">{categoriesItems}</div>
      </section>
      <section className="trending">
        <div>
          <h1 className="title">Trending Products</h1>
          <a href="#">
            See all <img src="./icons/r-arrow.png" alt="" />
          </a>
        </div>
        <div className="list">{trendingProducts}</div>
      </section>
      <section className="shopByRoom">
        <h1 className="title">Shop By Room</h1>
        <div className="roomContainer">
          <div className="div1">
            <p className="direct">
              Living Room <i class="fa-solid fa-arrow-right"></i>
            </p>
            <img src="./images/showByRoom/living-room.png" alt="" />
          </div>
          <div className="div2">
            <p className="direct">
              Bed Room <i class="fa-solid fa-arrow-right"></i>
            </p>
            <img src="./images/showByRoom/bed-room.png" alt="" />
          </div>
          <div className="div3">
            <p className="direct">
              Others <i class="fa-solid fa-arrow-right"></i>
            </p>
            <img src="./images/showByRoom/others.png" alt="" />
          </div>
          <div className="div4">
            <p className="direct">
              Kitchen <i class="fa-solid fa-arrow-right"></i>
            </p>
            <img src="./images/showByRoom/kitchen.png" alt="" />
          </div>
          <div className="div5">
            <p className="direct">
              Home Office <i class="fa-solid fa-arrow-right"></i>
            </p>
            <img src="./images/showByRoom/home-office.png" alt="" />
          </div>
        </div>
      </section>
      <section className="bestDeal">
        <div>
          <div>
            <h1 className="title">Best Deal</h1>
            <Countdown date={Date.now() + 1500000} renderer={renderer} />
          </div>
          <a href="#">
            See all <img src="./icons/r-arrow.png" alt="" />
          </a>
        </div>
        <div className="list">{bestDealProducts}</div>
      </section>
      <section className="discover">
        <div>
          <h1 className="title">Discover handy tips and styling inspiration</h1>
          <a href="#">
            See all <img src="./icons/r-arrow.png" alt="" />
          </a>
        </div>
        <div className="list">{discoverCards}</div>
      </section>
      <section className="shareHome">
        <h1 className="subTitle">
          Share your dream home with <span className="title">#Pinewood.</span>
        </h1>
        <div>
          <img src="./images/shareHome/workingTable.png" alt="" />
          <div>
            <img src="./images/shareHome/plant.png" alt="" />
            <img src="./images/shareHome/coffeeTable.png" alt="" />
          </div>
          <img src="./images/shareHome/roomTable.png" alt="" />
          <div>
            <img src="./images/shareHome/wall.png" alt="" />
            <img src="./images/shareHome/bedroomTable.png" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
