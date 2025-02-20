import { useState } from "react"
import "../components.css"
import SortButton from "./sortButton"

function SortByDropdown({ sortBy, setSortBy }) {
    const sortingParams = ["author", "title", "votes", "comment_count", "topic"]

    const [dropdownVisible, setDropdownVisible] = useState(false)

    function buttonPress() {
        dropdownVisible ? setDropdownVisible(false) : setDropdownVisible(true)
    }

    if (dropdownVisible)
        return (
            <section>
                <button onClick={buttonPress}>Sort By</button>
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
                <button onClick={buttonPress}>Sort By</button>
            </section>
        )
}

export default SortByDropdown
