import react from "react";
import { characters } from "./anime_details";
import CardList from "./CardList";
import Searchbox from "./Searchbox"
import Scroll from "./Scroll"
import "./App.css";

class App extends react.Component {
    constructor() {
        super();
        this.state = {
            characters: characters,
            searchfield: ''
        }
    }

    OnSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }


    render() {
        const filteredCharacters = this.state.characters.filter(char => {
            return (
                char.char_name.toLowerCase().includes(this.state.searchfield.toLowerCase())
                || char.char_email.toLowerCase().includes(this.state.searchfield.toLowerCase())
            );
        })
        return (
            <div className="tc" >
                <h1 className="f1">ANIMEFRIENDS</h1>
                <Searchbox searchchange={this.OnSearchChange} />
                <Scroll>
                    <CardList characters={filteredCharacters} />
                </Scroll>
            </div>
        );
    }
}

export default App;