import React, { useState } from 'react';
const Home = (props) => {
    const [filter, SetFilter] = useState("All");
    function changeFilter(f) {
        SetFilter(f);
    }
    const imageElements = props.data.map((val) =>
        <div className={val.tall ? "col-sm-3" : "col-sm-6"} style={{display:filter==val.format || filter=="All"?"block":"none"}}>
            <img className="displayArt" src={require('../images/art/' + val.file)} alt=""></img>
        </div>
    );
    const filters = ["All", "Digital", "Graphite/Charcoal", "Color Pencil", "Oil Pastel"];
    const filterElements = filters.map((val) =>
        <button className="btn button2" onClick={() => changeFilter(val)} disabled={filter === val ? "True" : ""}>
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