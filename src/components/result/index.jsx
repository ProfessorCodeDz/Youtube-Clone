import React,{useState, useRef} from 'react'
import styled from 'styled-components'
import Video from './video'

export default function Result({videos}) {
  // video player url state
  const [playerurl,setPlayerurl] = useState('')
  // video player ref
  const playerRef = useRef()
  // close video player
  const closePLayer = () => {
    playerRef.current.style.height = "0px";
    playerRef.current.style.visibility = "hidden";
  }
  // ope video player
  const openPlayer = (url) => {
    setPlayerurl(url)
    playerRef.current.style.height = "100%";
    playerRef.current.style.visibility = "visible";
  } 

  return (
    <ResultStyles>
      <section ref={playerRef} className="player">
        <iframe  src={`https://www.youtube.com/embed/${playerurl}?&autoplay=1`}></iframe>
        <button onClick={closePLayer} className='close'>ⓧ</button>
      </section>
      {videos && videos.map((video,i) => (
        <Video key={i} video={video} openPlayer={openPlayer}/>
      ))}
    </ResultStyles>
  )
}

const ResultStyles = styled.section`
  width: 100%;
  height: 700px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
  .player {
    visibility: hidden;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    transition: .5s ease-out;
    .close {
      position: absolute;
      right: 10px;
      height: 200px;
      font-size: 40px;
      cursor: pointer;
      background-color: transparent;
      border: none;
      outline: none;
      color: white;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`