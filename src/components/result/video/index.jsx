import React from 'react'
import styled from 'styled-components'

export default function Video({video,openPlayer}) {
    //convert numbers to string format (from 100000 to 100k)
    function nFormatter(num) {
        if (num >= 1000000000) {
           return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num >= 1000000) {
           return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
           return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
   }
   // conditional rendering (video or playlist)
    if(video.type == "video"){
        return (
            <VideoStyles onClick={() => openPlayer(video.id)}>
                <img src={video.bestThumbnail.url} alt="thumbnail" />
                <div className="info">
                    <div className="author">
                        <img src={video.author.bestAvatar.url} />
                        <h6>{video.author.name}</h6>
                        <h6 className='uploadedAt'>{video.uploadedAt}</h6>
                        <h6 className='views'>{nFormatter(video.views)} 👁</h6>
                    </div>
                    <h2>{video.title}</h2>
                </div>
            </VideoStyles>
        )
    }
    if(video.type == "playlist"){
        return(
            <VideoStyles onClick={() => openPlayer(video.url)}>
                <img src={video.firstVideo.bestThumbnail.url} alt="thumbnail" />
                <div className="info">
                    <div className="author">
                        <h6>{video.owner.name}</h6>
                    </div>
                    <h2>PLaylist: {video.title}</h2>
                </div>
            </VideoStyles>
        )
    }

}

const VideoStyles = styled.div`
    width: 300px;
    margin: 5px;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 20px;
    img {
        width: 100%; 
    }
    .info {
        display: flex;
        align-items: center;
        margin-top: 5px;
        .author {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 20px;
            text-align: center;
            img {
                width: 30px;
                border-radius: 50%;
                margin-bottom: 5px;
            }
            .views ,.uploadedAt{
                margin-top: 5px;
            }
        }
        h2 {
            color: white;
            font-size: 15px;
        }
    }
`
/*
{
    "type": "video",
    "title": "The Official JavaScript Tier List is Here",
    "id": "vdiYtiKD8eI",
    "url": "https://www.youtube.com/watch?v=vdiYtiKD8eI",
    "bestThumbnail": {
        "url": "https://i.ytimg.com/vi/vdiYtiKD8eI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCXG6D58XIhrD1rMLxdo_2qgkD-3w",
        "width": 720,
        "height": 404
    },
    "thumbnails": [
        {
            "url": "https://i.ytimg.com/vi/vdiYtiKD8eI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCXG6D58XIhrD1rMLxdo_2qgkD-3w",
            "width": 720,
            "height": 404
        },
        {
            "url": "https://i.ytimg.com/vi/vdiYtiKD8eI/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDk1_uNg9yk96kn3Sy4i9mu3YHhNg",
            "width": 360,
            "height": 202
        }
    ],
    "isUpcoming": false,
    "upcoming": null,
    "isLive": false,
    "badges": [
        "New",
        "4K"
    ],
    "author": {
        "name": "Fireship",
        "channelID": "UCsBjURrPoezykLs9EqgamOA",
        "url": "https://www.youtube.com/@Fireship",
        "bestAvatar": {
            "url": "https://yt3.ggpht.com/ytc/AMLnZu80d66aj0mK3KEyMfpdGFyrVWdV5tfezE17IwRkhw=s68-c-k-c0x00ffffff-no-rj",
            "width": 68,
            "height": 68
        },
        "avatars": [
            {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu80d66aj0mK3KEyMfpdGFyrVWdV5tfezE17IwRkhw=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ],
        "ownerBadges": [
            "Verified"
        ],
        "verified": true
    },
    "description": null,
    "views": 203588,
    "duration": "3:23",
    "uploadedAt": "17 hours ago"
}
*/