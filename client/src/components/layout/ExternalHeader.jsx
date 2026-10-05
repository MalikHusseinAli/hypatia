import logo from '../../assets/img/logo.png';
import ExternalHeaderMenu from './ExternalHeaderMenu';

function ExternalHeader() {
  return (
    <section className="hero is-medium is-dark">
      <div className="hero-head">
        <nav className="navbar" role="navigation" aria-label="main navigation" style={{ minHeight: '160px' }}>
          <div className="container py-4">
            <div className="navbar-brand is-flex is-align-items-center">
              <a className="navbar-item py-0 is-flex is-align-items-center" href="/" style={{ height: 'auto' }}>
                <img
                  src={logo}
                  alt="Hypatia Logo"
                  style={{ maxHeight: 'none', height: '150px' }}
                />
                <div className="ml-4">
                  <h1 className="title has-text-white mb-1">
                    Hypatia
                  </h1>
                  <p className="subtitle has-text-light mb-0">
                    A social network for readers
                  </p>
                </div>
              </a>
            </div>
            <div className="navbar-menu is-active bg-transparent shadow-none">
              <ExternalHeaderMenu />
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default ExternalHeader;