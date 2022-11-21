const Filter = ({ filter, setFilter }) => {

    const filterHandler = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    }

    return (
        <div>
            <p>Find entry:</p>
            <input value={filter} placeholder='type name here...' onChange={filterHandler} />
        </div>
    )
}

export default Filter;