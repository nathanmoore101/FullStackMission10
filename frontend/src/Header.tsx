import logo from './hilton.jpg';

function Header() {
  return (
    <header className="row header navbar navbar-dark bg-dark">
      <div className="col-4">
        <img
          src={logo}
          className="logo"
          alt="logo"
          style={{ maxWidth: '100px', maxHeight: '100px' }}
        />
      </div>
      <div className="col subtitle">
        <h1 className="text-white">Mission 10</h1>
      </div>
    </header>
  );
}

export default Header;
