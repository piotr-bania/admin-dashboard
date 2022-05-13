import './sidebar.scss'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className="top">
                <span className='logo'>PBAdmin</span>
            </div>
            <div className="center">
                <ul>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                colour options
            </div>
        </div>
    )
}

export default Sidebar