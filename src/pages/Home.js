import React, { useState } from 'react';
const Home = (props) => {
    const [filter, SetFilter] = useState("All");
    function changeFilter(f) {
        SetFilter(f);
    }
    // Make art image elements. Includes width screen adjustments.
    const imageElements = props.data.map((val, i) =>
        <div className={val.tall ? "col-sm-3" : "col-sm-6"} style={{ display: filter === val.format || filter === "All" ? "block" : "none" }} key={"art" + i}>
            <img className="displayArt" src={require('../images/art/' + val.file)} alt=""></img>
        </div>
    );
    // Make filter buttons.
    const filters = ["All", "Digital", "Graphite/Charcoal", "Color Pencil", "Oil Pastel"];
    const filterElements = filters.map((val, i) =>
        <button className="btn button2" onClick={() => changeFilter(val)} disabled={filter === val ? "True" : ""} key={"filter" + i}>
            {val}
        </button>
    );
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 offset-sm-3">
                    <div className="headerSection text-center">
                        <h1>Art Gallery</h1>
                    </div>
                    <hr />
                    <h5 style={{ display: "inline-block" }}>Filters: </h5>
                    {filterElements}
                    <hr />
                    <div className="row">
                        {imageElements}
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
};
export default Home;