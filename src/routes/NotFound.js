import { useHistory } from "react-router-dom";

const NotFound = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return ( 
        <div className="not-found">
            <h2>404</h2>
            <p>Page not found</p>
            <button onClick={handleClick}>Back to homepage</button>
            
        </div>
     );
}
 
export default NotFound;