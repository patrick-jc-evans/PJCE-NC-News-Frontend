import { useState } from "react"
import "../components.css"
import SortButton from "./sortButton"

function SortByDropdown({ sortBy, setSortBy, order, setOrder }) {
    const sortingParams = ["author", "title", "votes", "comment_count", "topic"]

    const [dropdownVisible, setDropdownVisible] = useState(false)

    function orderPress() {
        console.log(order)
        if (order === "asc") setOrder("desc")
        else if (order === "desc") setOrder("asc")
    }

    let orderDisplay = " ↓ order "

    if (order === "asc") {
        orderDisplay = " ↑ order "
    }

    function sortByPress() {
        dropdownVisible ? setDropdownVisible(false) : setDropdownVisible(true)
    }

    if (dropdownVisible)
        return (
            <section>
                <button onClick={sortByPress}>Sort By</button>
                <button onClick={orderPress}>{orderDisplay}</button>
                <br />
                {sortingParams.map((param, index) => (
                    <SortButton
                        key={index}
                        label={param}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />
                ))}
            </section>
        )
    else
        return (
            <section>
                <button onClick={sortByPress}>Sort By</button>
            </section>
        )
}

export default SortByDropdown
