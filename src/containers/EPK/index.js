function EPKPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <object
        data="https://nick-dorian-main.s3.us-west-1.amazonaws.com/NickDorian-EPKv2.pdf"
        type="application/pdf"
        style={{ width: "100vw", height: "100vh" }}
      >
        <p>
          Is this page broken?{" "}
          <a href="https://nick-dorian-main.s3.us-west-1.amazonaws.com/NickDorian-EPKv2.pdf">
            View the PDF here.
          </a>
        </p>
      </object>
    </div>
  );
}

export default EPKPage;
