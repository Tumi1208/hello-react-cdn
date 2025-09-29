const App = () => {
  return (
    <div style={{fontFamily:'Arial, sans-serif', textAlign:'center', marginTop:80}}>
      <h1>Hello World — React (served as static files)</h1>
      <p>This is a minimal React app using CDN (no build step).</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
