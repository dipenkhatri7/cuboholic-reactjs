function Cube(prop) {
    function color(number) {
        switch (number) {
            case 1:
                return "white"
            case 2:
                return "green"
            case 3:
                return "red"
            case 4:
                return "blue"
            case 5:
                return "orange"
            case 6:
                return "yellow"
        }
    }
    return (
        <div>
            {prop.cube.map((rows) => {
                return (
                    <div style={{ display: "flex", flexDirection: "row", backgroundColor: "black"}}>
                        {rows.map((columns) => {
                            return (
                                <div style={{
                                    backgroundColor: color(columns), width: "50px",
                                    height: "50px", margin:'2px',borderRadius:"6px"
                                }}></div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
export default Cube;