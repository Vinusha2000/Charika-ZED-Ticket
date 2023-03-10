import React from 'react'

const Navbar = () => {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#">Ticket Request</a>
        <a class="nav-item nav-link active" href="#">Cancel Ticket</a>
        <a class="nav-item nav-link active" href="#">History</a>
        <a class="nav-item nav-link active" href="#">Others</a>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar