import './Header.css'

function Header(){

    return(
            <header>
                <img src="src\assets\logo.jpg" alt="logo" />
                <nav>
                    <ul>
                        <li className="nav-links">Home</li>
                        <li className="nav-links">Services</li>
                        <li className="nav-links">For Patients</li>
                        <li className="nav-links">For Physicians</li>
                        <li className="nav-links">Contact</li>
                        <li className="nav-links">About us</li>
                    </ul>
                    </nav>
                <button className="bookbtn">Book Appointment</button>
                
            </header>
    );
}

export default Header  