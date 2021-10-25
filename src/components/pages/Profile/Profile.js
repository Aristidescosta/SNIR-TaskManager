import React, {useState} from 'react';
import './Profile.css';
import { Button } from '../../Button/Button';
import NavbarProfile from '../../Navbar/NavbarProfile';

function Profile() {
    function back() {
        window.history.back();
    }

    return (
        <div className="container">
            <NavbarProfile />

            <form>
                <div className="profile-text">
                    <span onClick={back} className="border-span"><i class="fal fa-angle-double-left"></i></span>
                    <div>
                        <p>My profile</p>
                        <small>
                            Preview my information
                        </small>
                    </div>
                </div>

                <div className="profile-image">
                    <img src="./img/profile.jpg" alt="imagem do perfil"/>
                    <div className="information">
                        <p>Aristides da Costa</p>
                        <span>My account</span>
                    </div>
                </div>

                <div className="profile-information">
                    <div className="profile-user">
                        <div>
                            <span>Display name</span>
                            <p>Aristides Da Costa</p>
                        </div>

                        <div>
                            <span>Email</span>
                            <p>aristidiscosta200@gmail.com</p>
                        </div>
                    </div>

                    <div className="profile-icon">
                        <span><i class="fal fa-user"></i></span>
                    </div>
                </div>

                <div className="button-center">
                    <Button buttonStyle='btn--outline' buttonSize="btn--large">
                        Sing out
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Profile;