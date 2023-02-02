

export default function Layout({children}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Publications</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Posts</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    )
}