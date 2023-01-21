const Home = (props) => {
    const imageElements = props.data.map((val) => 
        <div className={val.tall?"col-sm-3":"col-sm-6"}>
            <img className="displayArt" src={require('../images/art/'+val.file)}></img>
        </div>
        
        );
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 offset-sm-3">
                    <div className="headerSection text-center" id="artSection">
                        <h1>Art Gallery</h1>
                    </div>
                    <hr />
                    <h5 style={{display: "inline-block"}}>Filters:</h5>

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