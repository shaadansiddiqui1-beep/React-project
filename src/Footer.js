import React from 'react'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#042743",
        color: "white",
        padding: "20px",
        marginTop: "30px"
      }}
    >
      <div className="container text-center">

        <h4>TextUtils</h4>

        <p>
          Analyze your text quickly and easily.
        </p>

        <div className="my-3">
          <a href="/" className="text-light mx-2">Home</a>

          <a href="/" className="text-light mx-2">About</a>

          <a href="/" className="text-light mx-2">Contact</a>
        </div>

        <hr style={{color:"white"}} />

        <p>© 2026 TextUtils Project</p>

        <p>Made with ❤️ by Shaadan</p>

      </div>
    </footer>
  )
}