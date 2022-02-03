import { deleteDoc, doc } from "firebase/firestore";
import { useHistory, useParams } from "react-router-dom";
import useDoc from "../hooks/useDoc.js";
import db from "../lib/Firebase.js";

const BlogDetails = () => {
    const { id } = useParams();
    const { data, isPending } = useDoc('blogs', id);
    const colRef = doc(db, 'blogs', id);
    const history = useHistory();

    const handleClick = () => {
        deleteDoc(colRef)
            .then(() => {
                console.log('blog deleted')
                history.push('/');
            });
    }


    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {/* { error && <div>{ error }</div> } */}
            <article key={data.id}>
                <h2>{data.title}</h2>
                <p>Written by {data.author}</p>
                <div>{data.body}</div>
                <button onClick={handleClick}>delete</button>
            </article>
        </div>
    );
}

export default BlogDetails;