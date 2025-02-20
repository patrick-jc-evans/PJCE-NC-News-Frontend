// Start from here. Need buttons for each topic, that change a state in articles.jsx -> articleStack.jsx

function SortButton({ label, sortBy, setSortBy }) {
    let stylingAddon = ""
    if (label === sortBy) stylingAddon = "-clicked"

    function handleClick() {
        console.log(label)
        setSortBy(label)
    }

    const displayLabel = label.replace("_", " ")

    return (
        <button
            onClick={handleClick}
            className={"sortby-button" + stylingAddon}
        >
            {displayLabel}
        </button>
    )
}

export default SortButton
