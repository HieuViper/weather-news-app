import React from "react"
import './NewsItem.css'

function NewsItem({ title, description, url, urlToImage }) {
    return (
        <div className="news-app">
            <div className='news-item'>
                <img className='news-img' src={urlToImage} alt={urlToImage} />
                <h3><a href={url}>{title}</a></h3>
                <p>{description}</p>
                <form action={url}>
                    <input className="read-more-btn" type="submit" value="Read more" />
                </form>
            </div>
        </div>
    )
}

export default NewsItem