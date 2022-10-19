import Error404 from 'pages/exception/error404';
import Home from 'pages/home';
import './App.css';

function App() {
  const { pathname } = window.location;
  let view = <Home/>;
  if(pathname !== "/") {
    view = <Error404/>
  }
  return (
    <div className="App">
      {view}
    </div>
  );
}

export default App;
