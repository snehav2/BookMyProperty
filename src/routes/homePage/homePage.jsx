

import SearchBar from '../../components/searchBar/SearchBar.jsx'
import './homePage.scss'

function HomePage(){
  return (
    <div className='homePage'>
        <div className='textContainer'>
            <div className='wrapper'>
            <h1>
                Your Next Home, Just a Click Away
            </h1>
            <p>
            Discover the future of real estate with BookMyProperty, your ultimate property booking appConnect instantly with sellers, agents, or potential buyers through our integrated chat system, enabling real-time communication and swift negotiations. 
            </p>
          <SearchBar/>
            <div className='boxes'>
                <div className='box'>
                    <h1>16+</h1>
                    <h2>Year of Experience</h2>
                </div>
                <div className='box'>
                    <h1>200</h1>
                    <h2>Agents Joined</h2>
                </div>
                <div className='box'>
                    <h1>2000+</h1>
                    <h2>Property Ready</h2>
                </div>

            </div>
            </div>
            
        </div>
        <div className='imgContainer'>
            <img src='/bg.png' alt=''/>
        </div>

    </div>
  )
}

export default HomePage