import React from 'react'

const Home = () => {
    return (
        <>
        <div className="text-center mt-5 pt-5">
        <img src="google_logo.svg" className="mx-auto" alt=""/>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <form className="col-6 text-center m-auto mt-3" role="search">
      <input className="form-control" type="Search Google or type a URL" placeholder="Search Google or type a URL" aria-label="Search"/>
      {/* <div className="m-auto">
      <img src="googlemic_clr_24px.svg" alt=""/>
      </div> */}
     
    </form>
  </div>
</nav>
        </div>
            
        </>
    )
}

export default Home
