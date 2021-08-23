import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'



const Header = ({title,onAdd,showAdd}) => {

    const location = useLocation()

    return (
        <header className = 'headerField'>

            <h1>{title}</h1>
            {location.pathname === '/' &&
            <Button color = {showAdd ? 'steelblue' : 'darkblue'} text = {showAdd ? 'Close' : 'Add'} onClick = {onAdd} />}
           
            
        </header>
    )
}

//Sets default value for header.


Header.defaultProps = {
    title: 'Birthday Date Tracker'
}


Header.propTypes = {
    title : PropTypes.string.isRequired

}

//CSS in JS
/*
const headingStyle = {
    color: 'blue',backgroundColor: 'black'
}
*/






export default Header
