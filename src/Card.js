import "./Card.css"
const Card = ({ name, email, imagesource }) => {
    return (
        <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5 box">
            <img alt="character" src={imagesource} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
export default Card;