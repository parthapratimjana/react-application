import NavDropdown from 'react-bootstrap/NavDropdown';
import CircumIcon from "@klarr-agency/circum-icons-react"; // React
import {NavLink } from 'react-router-dom'
export default function Sidebar() {
    const menu = [
        {
            "label": "Recepies",
            "link": "recepies",
            "submenu": [],
            "icon" : "desktop"
        }
    ]
    return (
        <div className="sidebar">
            <ul className='sidebarMenu nav flex-column'>
                {
                    menu.map((mainMenu, index) => {
                        index++;
                        return (
                            mainMenu.submenu.length > 0 ?
                            <li key={`key${index}`} className='nav-item'>
                                
                                <NavDropdown title={mainMenu.label} id={`dropdown${mainMenu.label}`} autoClose={false}>
                                
                                    {
                                        mainMenu.submenu.map((submenuitem, index) => {
                                            return (
                                                <NavLink className={"dropdown-item"} activeClassName="active" to={submenuitem.link} key={index}>
                                                    <CircumIcon name={submenuitem.icon}/>
                                                    {submenuitem.label}
                                                    </NavLink>
                                            )
                                        })
                                    }
                                </NavDropdown>
                                <CircumIcon name={"square_chev_right"}/>
                                </li>
                                :
                                <li  key={`key${index}`} className="nav-item">
                                <NavLink  activeclassname="active" className='nav-link' to={mainMenu.link}>
                                    <CircumIcon name={mainMenu.icon}/>
                                    {mainMenu.label}
                                    </NavLink >
                                </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}