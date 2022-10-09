import { useState } from 'react'
import { FaChevronUp, FaChevronDown  } from 'react-icons/fa'

export default function SingleQuestion({ question, answer }) {

    const [isShowing, setIsShowing] = useState(false)  

    return (
        <>
            <div>
                <article onClick={() => setIsShowing(!isShowing)} className='single-article'>
                    <h2 className={`${isShowing && "clicked"}`}>{question}</h2>
                    {isShowing ? <FaChevronUp className='icon' /> :  <FaChevronDown className='icon' />}
                </article>

                {isShowing && <p>{answer}</p> }
            </div>
        </>
    )
}

