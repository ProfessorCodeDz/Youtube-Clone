import React , {useState, useRef } from 'react'
import styled from 'styled-components'


export default function Search({getData}) {
  // search txt state
  const [search,setSearch] = useState('')
  // input element ref
  const inputEl = useRef(null)
  // on form submit 
  const handleSubmit = e => {
    e.preventDefault()
    inputEl.current.value = '';
    getData(search)
  }

  return (
    <SearchStyles>
      <form onSubmit={handleSubmit}>
        &lt;<input onChange={e => setSearch(e.target.value)} value={search} ref={inputEl} placeholder='Search...' type="text" /> /&gt;
      </form>
    </SearchStyles>
  )
}

const SearchStyles = styled.section`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #747d8c;
  form {
    width: 100%;
    display: flex;
    input {
      height: 50px;
      flex: 1;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border: none;
      outline: none;
      padding-left: 20px;
      font-size: 20px;
      background-color: transparent;
      color: white;
    }
  }

`