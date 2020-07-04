import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChage = (q) => {
        setText(q)
        getQuery(q)
    }
    return (
        <section className='search'>
            <form>
                <input type='text'
                    className='form-control'
                    placeholder='Search Characters'
                    value={text}
                    onChange={(e) => onChage(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search
