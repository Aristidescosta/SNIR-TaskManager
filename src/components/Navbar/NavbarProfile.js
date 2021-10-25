import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./NavbarProfile.css";

function NavbarProfile() {
    const [click, setClick] = useState(false);
	
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

    return (
        <>
            <div className="profileTask">   
                <div className="addTask">
                    <div className='menu' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

                        <div className="verify">
                            <Link to="/add-task" className="task-add">
                                <i class="fal fa-layer-plus"></i>
                                <span>Add Task</span>
                            </Link>
                        </div>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links active' onClick={closeMobileMenu}>
                                About us
                            </Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link
                                to='/'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Cases
                            </Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link
                                to='/'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Resources
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="profile">
                    <img src="./img/profile.jpg" alt="imagem do perfil"/>
                    <div className="information">
                        <p>Aristides da Costa</p>
                        <div className="account">
                            <Link to="/profile">
                                <span>My account</span>
                                <span><i class="fal fa-angle-double-right"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarProfile