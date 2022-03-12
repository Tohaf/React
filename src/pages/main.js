import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import classes from './main.module.css';

function WelcomePage() {
    const [timec, setTimec] = useState();
    const [changes, setChanges] = useState();



    useEffect(() => {
        let gist = ["You are welcome to our website", "We offer the best service ever", "A trier will confuse you", "Always stay tune for the latest"];
        let counter = 0;

        setInterval(
            function text() {
                
                if (counter >= gist.length) {
                    counter = 0;
    
                }
                
                setChanges(gist[counter]);
                counter ++;
                
            },
            2000);
    }, []);



    setInterval(() => {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        let day = "AM";
        if (hours > 12) {
            hours = hours - 12;
            day = 'PM'
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        setTimec(hours + ":" + minutes + ":" + seconds + ":" + day);

    });


    return (

        <div className={classes.bod}>
            <nav className={classes.top}>
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/register'> Register </Link></li>
                    <li><Link to='/login'> Login </Link></li>
                    <li><Link to='/'> About </Link></li>
                </ul>
            </nav>
            <section className={classes.body}>
                <div className={classes.mage}>
                    {changes && <div><pre>{changes}</pre></div>}
                    <button>Learn more</button>
                </div>
            </section>
            {timec && <div><pre>{timec}</pre></div>}
            <footer className={classes.footer}>
                <div className={classes.footerCon}>
                    <div id="about">
                        <h1>About</h1>
                        <p>SendIt is a superfast delivery company aimed at making life better</p>
                    </div>
                    <div id="contact">
                        <h1>Contact</h1>
                        <p>customer service: 08086107117</p>
                        <p>No.32 laula Street, Lagos State</p>
                    </div>
                    <div id="socials">
                        <h1>Socials</h1>
                        <p>you can get to us via our social media handles:</p>


                    </div>
                </div>

            </footer>
        </div>



    )

}

export default WelcomePage;