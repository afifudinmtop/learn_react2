function Footer() {
  return (
    <footer className="bg-secondary text-white px-4 py-2">
      <small>2022 All rights reserved.</small>
    </footer>
  );
}

function Main() {
  return (
    <div className="p-4">
      <h1>Reason I'm Interested to Learn React</h1>
      <ol>
        <li>adnjadnjaw kandkwajnd kajndka</li>
        <li>adnjadnjaw kandkwajnd kajndka</li>
        <li>adnjadnjaw kandkwajnd kajndka</li>
        <li>adnjadnjaw kandkwajnd kajndka</li>
      </ol>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
