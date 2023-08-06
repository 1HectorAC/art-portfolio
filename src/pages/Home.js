
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectFilter } from '../redux/filterSlice'

const FilterSection = (props) => {
    const filter = useSelector(selectFilter)
    const dispatch = useDispatch()
    return (
        props.filterOptions.map((val, i) =>
            <button className="btn button2" onClick={() => dispatch(changeFilter(val))} disabled={filter === val ? "True" : ""} key={"filter" + i}>
                {val}
            </button>
        )
    )
};

const ImageSection = (props) => {
    const filter = useSelector(selectFilter)
    return (
        props.data.map((val, i) =>
            <div className={val.tall ? "col-sm-3" : "col-sm-6"} style={{ display: filter === val.format || filter === "All" ? "block" : "none" }} key={"art" + i}>
                <img className="displayArt" src={require('../images/art/' + val.file)} alt=""></img>
            </div>
        )
    )
};

const Home = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 offset-sm-3">
                    <div className="headerSection text-center">
                        <h1>Art Gallery</h1>
                    </div>
                    <hr />
                    <h5 style={{ display: "inline-block" }}>Filters: </h5>
                    <FilterSection filterOptions={props.filterOptions} />
                    <hr />
                    <div className="row">
                        <ImageSection data={props.data} />
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
};
export default Home;