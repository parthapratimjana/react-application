import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from '../Api'
export default function Table() {
    const [movieList, setMovieList] = useState([])
    const [loader, setLoader] = useState(true)
    const [apierror, setApierror] = useState("")
    const [sortOrder, setSortOrder] = useState(false)
    const fetchMovieList = () => {
        setApierror("")
        axios.get(`${baseUrl}movies`)
            .then((res) => {
                console.log("Result", res)
                setLoader(false)
                setMovieList(res.data)
            })
            .catch((err) => {
                console.log("error", err)
                setLoader(false)
                setApierror(err.message)
            })
    }
    const searchTable = ((e)=>{
        let searchValue = e.currentTarget.value;
        let table = document.getElementById('movieListTable')
        let trs = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
        for(let tr of trs){
            let text;
            let tds = tr.getElementsByClassName('nameCell')
                for(let td of tds){
                    text = td.textContent;
                }
            if(text.toLowerCase().indexOf(searchValue) > -1){
                tr.classList.remove('d-none')
            }
            else{
                tr.classList.add('d-none')
            }

        }
        console.log("Search String", searchValue)
    })
    const Tablerow = (() => {
        return (
            <>
                {
                    !loader && !apierror &&
                    <div>
                        <div className="d-flex justify-content-end align-items-center py-3">
                            {
                                movieList &&
                                <>
                                    <div className="input-group w-50 me-2">
                                        <input onChange={searchTable} type="text" className="form-control" placeholder="Search By Name" />
                                    </div>
                                    <button className="btn btn-info" onClick={sortList}>Filter by name</button></>
                            }
                        </div>
                        <table className="table table-dark" id="movieListTable">
                            <thead>
                                <tr>
                                    <th>srl. No</th>
                                    <th>Name</th>
                                    <th>Rating</th>
                                    <th>Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <Tablerow/> */}
                                {
                                    movieList ?
                                        <>
                                            {
                                                movieList.map((item, index = 1) => {
                                                    index++;
                                                    return (
                                                        <tr key={item.id}>
                                                            <td>{index}</td>
                                                            <td className="nameCell">{item.movie}</td>
                                                            <td>{item.rating}</td>
                                                            <td><a href={item.imdb_url} target="_blank">View official site</a></td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </>
                                        :
                                        <tr>
                                            <td colSpan={4}>No Data Available</td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </>
        )
    })
    const sortList = (() => {
        let changedArray =
            sortOrder ?
                movieList.toSorted((x, y) => y.movie.localeCompare(x.movie))
                :
                movieList.toSorted((x, y) => x.movie.localeCompare(y.movie));

        setMovieList(changedArray)
        setSortOrder(!sortOrder)
    })
    useEffect(() => {
        fetchMovieList()
        console.log("base url", baseUrl)
    }, [])
    return (
        <div className="container-fluid">
            <div className="table-container">
                {
                    loader &&
                    <p className="text-center">Loading...</p>
                }
                <Tablerow />
                {
                    apierror && <p className="text-center text-danger">{apierror}</p>
                }
            </div>
        </div>
    );
}