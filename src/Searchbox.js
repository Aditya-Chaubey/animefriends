const Searchbox = ({ searchchange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba bg-lightest-blue"
                type="search"
                placeholder="search name or email"
                onChange={searchchange}
            ></input>
        </div>
    );
}

export default Searchbox;