function BasicCard({ main, secondary }) {
    return (
        <section className="basic-card">
            <p className="bc-main-text">{main}</p>
            <p className="bc-secondary-text">{secondary}</p>
        </section>
    )
}

export default BasicCard
