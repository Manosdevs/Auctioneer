import React from 'react'
import { useState } from 'react'
import styles from './Searchbar.module.css'
import { Search } from 'react-bootstrap-icons'

function Searchbar() {


    const [searchParam, setSearchParams] = useState('')     
    

    const handleChange = (e) => {
        setSearchParams(e.target.value)
    }

  return (
   <>
    <form className={styles.form}>
       
    <input className={styles.searchbar}
    id='searchBar'
					name="searchParam"
					type="text"
					value={searchParam}
					onChange={handleChange}
                    placeholder="Search auctions" 
                   
				></input>


    </form>


   </>


  )
}

export default Searchbar

