import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div>

            <h4>Version 1.0.0</h4>

            <p className = 'about-paragraph'>My name is Jeyason Jeyaparan! Welcome to my Birthday Date Tracker Website! Here I store the birthday dates of all my family members so that I could keep track of them!</p>
            <Link to = '/'>Go Back</Link>          
        </div>
    )
}

export default About
