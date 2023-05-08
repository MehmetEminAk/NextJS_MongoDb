import React from "react";
import { useEffect,useState  } from "react";


const AllNews = () => {
    const [news,setNews] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("/api/allNews");
          const data = await response.json();
          setNews(data);
        };
    
        fetchData();
    } ,[]);

    const deleteNew = async id => {
        const result = await fetch("api/deleteNew", {
            method : "POST",
            body : JSON.stringify({id}),
            headers: {
                "Content-Type": "application/json",
              },
        });
        console.log(result);
    }

    return (
        <div>
        <h1>All News</h1>
        {news && (
          <ul>
            {news.map((item) => (
              <li key={item._id.toString()}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <small>{item.author}</small>
                <p>{item.category}</p>
                <button onClick={() => { deleteNew(item._id);}}>Bu haberi sil</button>
              </li>
            ))}
          </ul>
        )}
        
      </div>
      
    )
}

export default AllNews;