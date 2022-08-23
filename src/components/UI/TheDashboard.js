import { useEffect, useState } from 'react'
const TheDashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums").then((result) => {
            result.json().then((resp) => {
                setData(resp)
            })
        })
    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">UserProfile</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">UserName</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Emailid</a>
                            </li>
                        </ul>
                        <a style={{ textDecoration: 'none' }} href="/">
                            Logout
                        </a>
                    </div>
                </div>
            </nav>
            <table className="table m-auto">
                <thead>
                    <tr class="table-warning">
                        <th scope="col">Id</th>
                        <th scope="col">UserId</th>
                        <th scope="col">Title</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) =>
                            <tr class="table-info">
                                <th scope="col">{item.id}</th>
                                <th scope="col">{item.userId}</th>
                                <th scope="col">{item.title}</th>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
export default TheDashboard;