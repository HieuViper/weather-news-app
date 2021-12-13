import React from "react"
import axios from 'axios';
import { useState, useEffect } from 'react';
import NewsItem from "./NewsItem";
import './NewsItem.css'
// News API key : c05a6d6beee44b3c89278b81838fcf09
// GNews API key : beb82cf1492a7a0eaa42f094650eeb56
function News() {
    const [articles, setArticles] = useState([])
    const [topic, setTopic] = useState("")
    // useEffect(() => {
    //     const getArticles = async () => {
    //         const response = await axios.get(`https://newsapi.org/v2/everything?q=football&from=2021-11-12&sortBy=publishedAt&apiKey=c05a6d6beee44b3c89278b81838fcf09`)
    //         setArticles(response.data.articles)
    //         console.log(response)
    //     }
    //     getArticles()
    // }, [])
    const getData = (topic) => {
        axios({
            method: "GET",
            url: `https://gnews.io/api/v4/search?q=${topic}&token=beb82cf1492a7a0eaa42f094650eeb56`,
        })
            .then((response) => {
                console.log(response);
                setArticles(response.data.articles)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <h1>News page</h1>
            <h4>Please enter any topic that you want ...</h4>
            <div className="search">
                <input className="search-news"
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                />

                <button className="btn-search-news"
                    onClick={() => {
                        getData(topic);
                    }}
                >Get News !</button>
            </div>

            {articles.map(article => {
                return (
                    <NewsItem
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        image={article.image}
                    />
                )
            })}
        </>
    )
}

export default News