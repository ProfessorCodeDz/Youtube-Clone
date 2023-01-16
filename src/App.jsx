import { useState } from 'react'
import axios from "axios";
import './App.css'
import Header from './components/header'
import Search from './components/search'
import Result from './components/result'
import styled from 'styled-components';


function App() {
  // result state
  const [result,setResult] = useState({})
  // fetch data from youtube api
  const getData = (txt) => {
    const options = {
      method: 'GET',
      url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
      params: {q: txt},
      headers: {
        'X-RapidAPI-Key': 'YOUR_RAPID_API_KEY',
        'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setResult(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <div className="App container">
      <Header />
      <Search getData={getData} />
      <Result videos={result.items}/>
      <FooterStyles>Riad .Z-2023</FooterStyles>
    </div>
  )
}

export default App

const FooterStyles = styled.footer`
  width: 100%;
  margin-top: 20px;
  text-align: center;
`
