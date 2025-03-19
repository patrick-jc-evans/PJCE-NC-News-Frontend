import placeholder from "./underConstruction.svg"

function Users() {
    return (
        <main>
            <h2>Users</h2>
            <div
                style={{
                    width: "80%",
                    margin: "auto",
                    backgroundColor: "white",
                    paddingBottom: "1rem",
                    borderRadius: "20px",
                }}
            >
                <img
                    src={placeholder}
                    style={{ margin: "5%", height: "5rem" }}
                />
                <br />
                <text style={{ margin: "5%" }}>Page Under Construction...</text>
            </div>
        </main>
    )
}

export default Users
