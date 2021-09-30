import Card from "./Card";

const CardList = ({ characters }) => {
    return (
        <div className="tc">
            {characters.map((item, index) => {
                return (< Card
                    key={index}
                    name={characters[index].char_name}
                    email={characters[index].char_email}
                    imagesource={characters[index].char_img_url} />);
            })}
        </div>
    );
}

export default CardList;