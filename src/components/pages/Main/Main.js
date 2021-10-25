import './Main.css';
import { Link } from 'react-router-dom';
import { Button } from '../../Button/Button';

function Main() {
    return (
        <div className="row">
            <div className="col-md">
                <div className="text">
                    <p>
                        <span>Creative Digital</span> <span className="span-white">Design Agency <br/>
                        is looking for new talent</span>
                    </p>

                    <p className="small">
                        Creative Digital Design Agency
                        is looking for new talent
                    </p>

                    <Link
                        to='/sign-in'
                    >
                        <Button
                            estiloDoBotao="btn--primary"
                        >
                            Get started
                        </Button>
                    </Link>
                </div>
            </div>
                
            <div className="col-md">
                <img src='./img/background.png' alt='logo' />
            </div>
        </div>
    )
}

export default Main
