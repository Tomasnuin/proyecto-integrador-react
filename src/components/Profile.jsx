import "./css/profile.css"

export const Profile = () => {
    return (
        <>
            <header id="profile" className="mobile-view">
                <div id="profile-frame">
                    <img src="https://www.figma.com/file/sq7yMx9FFbCJllD7dwMfbu/image/c20e3c20d2508788bcadf95ea13eb98b96111246"
                        alt="Profile picture" id="profile-picture"/>
                    <div id="profile-info">
                        <div id="profile-job-contact">
                            <div className="frame-name-job">
                                <h1 className="name">Nombre</h1>
                                <p className="job-title">Front-end developer</p>
                            </div>
                            <div className="frame-contact">
                                <p className="email"><i className="fa fa-envelope" aria-hidden="true"></i> ejemplo@mail.com</p>
                                <p className="phone"><i className="fa fa-phone"></i> +54 9 11-1234-5678</p>
                            </div>
                        </div>
                        <p id="introduction">Self-motivated developer, who is willing to learn and create
                            outstanding UI
                            applications.

                            <span id="profile-desktop-text" className="introduction-text-hide">
                                Donec aliquam est dui, vel vestibulum diam sollicitudin id.
                                Quisque feugiat malesuada molestie.
                            </span>
                        </p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Profile;
