import styles from "./card.module.css";
import cardImg from '../assets/images/card.png';

const RegularCard = () => {
  return (
    <div className={`mt-[90px] ${styles.card_container}`}>
      <img src={cardImg} alt="imag" height="244" width="100%"/>
      <div className="flex justify-between pt-[12px] ">
        <div>
          <h5>Title</h5>
          <span>Span</span>
        </div>

        <div>
          Stars
        </div>
      </div>

      <p>para</p>

      <div className="flex justify-between">
        <span>Price</span>
        <span>Almost Sold Out</span>
      </div>
    </div>
  )
}

export default RegularCard;
