export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ReachFlow AI</title>
        <link rel="stylesheet" href="/styles/globals.css" />
      </head>
      <body>
        <div className="container">
          <header className="header">
            <img src="/logo.png" alt="ReachFlow AI Logo" className="logo" />
            <h1>Welcome to ReachFlow AI</h1>
            <p>Smart AI lead generation, automated booking, and outreach made easy.</p>
            <div className="buttons">
              <a href="#" className="btn btn-primary">Start Free Trial</a>
              <a href="#" className="btn btn-secondary">Book a Call</a>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}