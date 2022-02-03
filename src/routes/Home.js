import useCollection from "../hooks/useCollection.js";
import BlogList from "./BlogList.js";

const Home = () => {
    const { data, isPending } = useCollection('blogs');

    return (
        <div className="home">
            {/* {error && <div>{error}</div>} */}
            {data && <BlogList blogs={data} title="All Blogs!" />}
            {isPending && <div>Loading...</div>}

        </div>
    );
}
export default Home;