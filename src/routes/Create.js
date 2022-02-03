import { addDoc } from 'firebase/firestore';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { colRef } from '../lib/Firebase.js';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const date = new Date();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author, date };

        addDoc(colRef, {
            title: blog.title,
            author: blog.author,
            body: blog.body,
            date: blog.date
        })
            .then(() => {
                console.log('new blog created');
                setIsPending(false);
                history.push('/')
            });
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
    );
}

export default Create;