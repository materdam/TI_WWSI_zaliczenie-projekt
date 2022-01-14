import React from 'react';

const ComicItem = (item) => {
    return (
        <div className="comic_item">
            <div className="comic_header">
                <h2>{item.name}</h2>
            </div>
            <div className="comic_items">
                <div className="comic_author">{item.author}</div>
               
                <div className="comic_bubble">
                    <strong>Miasto: </strong> {item.city}
                </div>

                <div className="comic_bubble">
                    <strong>Kontak: </strong>  {item.contact}
                </div>

                <div className="comic_bubble rating">
                    <strong>Nick: </strong>  {item.nick}
                </div>

            </div>
        </div>
    );
};

export default ComicItem;