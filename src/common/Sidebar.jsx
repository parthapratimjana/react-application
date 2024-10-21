import NavDropdown from 'react-bootstrap/NavDropdown';
import CircumIcon from "@klarr-agency/circum-icons-react"; // React
import {Link, NavLink } from 'react-router-dom'
export default function Sidebar() {
    const menu = [
        {
            "label": "Dashboard",
            "link": "dashboard",
            "submenu": [],
            "icon" : "desktop"
        },
        {
            "label": "Table",
            "link": "table",
            "submenu": [],
            "icon" : "indent"
        },
        {
            "label": "Billing",
            "link": "home",
            "submenu": [],
            "icon" : "calculator_1"
        },
        {
            "label": "Component",
            "link": "home",
            "icon" : "calendar",
            "submenu": [
                {
                    "label": "Accordion",
                    "link": "accordion",
                    "icon" : "line_height"
                },
                {
                    "label": "Alert",
                    "link": "home",
                    "icon" : "warning"
                },
                {
                    "label": "Cards",
                    "link": "home",
                    "icon" : "money_bill"
                },
                {
                    "label": "button",
                    "link": "home",
                    "icon" : "mobile_1"
                }
            ]
        },
        {
            "label": "Mail",
            "link": "home",
            "submenu": [],
            "icon" : "mail"
        },
        {
            "label": "utilities",
            "link": "home",
            "icon" : "bank",
            "submenu": []
        },
        {
            "label": "Dashboard",
            "link": "home",
            "submenu": [],
            "icon" : "desktop"
        },
        {
            "label": "Table",
            "link": "home",
            "submenu": [],
            "icon" : "indent"
        },
        {
            "label": "Billing",
            "link": "home",
            "submenu": [],
            "icon" : "calculator_1"
        },
        {
            "label": "Component",
            "link": "home",
            "icon" : "calendar",
            "submenu": [
                {
                    "label": "Accordion",
                    "link": "home",
                    "icon" : "calendar"
                },
                {
                    "label": "button",
                    "link": "home",
                    "icon" : "calendar"
                }
            ]
        },
        {
            "label": "Mail",
            "link": "home",
            "submenu": [],
            "icon" : "mail"
        },
        {
            "label": "utilities",
            "link": "home",
            "icon" : "bank",
            "submenu": []
        },
    ]
    return (
        <div className="sidebar">
            <ul className='sidebarMenu nav flex-column'>
                {
                    menu.map((mainMenu, index) => {
                        return (
                            mainMenu.submenu.length > 0 ?
                            <li key={index} className='nav-item'>
                                
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
                                <li  key={index} className="nav-item">
                                <NavLink  activeClassName="active" className='nav-link' to={mainMenu.link}>
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