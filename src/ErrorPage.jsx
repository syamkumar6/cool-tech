function ErrorPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>Oops! Something went wrong.</h1>
      <p>We couldn`&apos;`t process your request. Please try again later.</p>
      <a href="/" style={{ textDecoration: "none", color: "#314475" }}>
        Go back to Home
      </a>
    </div>
  );
}

export default ErrorPage;

