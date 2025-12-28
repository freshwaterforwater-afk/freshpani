import React from 'react'

const Copyright = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className="copyright">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-12">
        <p>
          Copyrights © {year} -{" "}
          <a href="https://ameentours.in/">Ameen</a>, All Rights
          Reserved.
        </p>
      </div>
      <div className="col-lg-6 text-right col-md-12">
        <div className="social-icons">
          <ul>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-dribbble" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Copyright