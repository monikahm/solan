import React, { useState } from 'react';
import useFetch from "../api";

function BlogPosts() {
    const [posts, setPosts] = useState([])
    useFetch("http://127.0.0.1:8000/api/blogposts/", setPosts)

    return (
        <div>
            {posts.map((s, index) => (
                <div key={index}>
                    {s.title}
                </div>

            ))}
        </div>
    )
}

export default BlogPosts;