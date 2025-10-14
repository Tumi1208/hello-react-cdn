const App = () => {
  const [color, setColor] = React.useState('#007acc');

  const changeColor = () => {
    const newColor = color === '#007acc' ? '#ff6f61' : '#007acc';
    setColor(newColor);
  };

  return (
    <div className="container">
      <h1 style={{color}}>Hello World — React (served as static files)</h1>
      <p>This is a styled React app using CDN — simple & beautiful.</p>
      <button onClick={changeColor}>Change Title Color</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
