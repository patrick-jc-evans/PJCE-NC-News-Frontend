function NextPageButton({ page, setPage }) {
    if (page > 1)
        return (
            <section className="page-buttons-section">
                <button
                    type="button"
                    onClick={() => {
                        setPage(page - 1)
                    }}
                >
                    Previous Page
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setPage(page + 1)
                    }}
                >
                    Next Page
                </button>
            </section>
        )
    else
        return (
            <section className="page-buttons-section">
                {" "}
                <button
                    type="button"
                    onClick={() => {
                        setPage(page + 1)
                    }}
                >
                    Next Page
                </button>
            </section>
        )
}

export default NextPageButton
