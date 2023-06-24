import React from 'react';

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>

            <form >
                <div>
                    <label >Name</label>
                    <input type="text" required placeholder='ABC' />
                </div>

                <div>
                    <label >Emale</label>
                    <input type="email" required placeholder='abcd12@xyz.com' />
                </div>

                <div>
                    <label>Massage</label>
                    <input type="text" required placeholder='Tell us about your query...' />
                </div>

                <button type="submit">Sand</button>
            </form>
        </main>
    </div>
  )
}

export default Contact;