import { Button } from "../components/ui/button";

const GridPage = () => {
  return (
    <div>
      <div className="container d-xs-block d-sm-none d-md-block d-lg-none d-xl-block bg-info">
        <div className="row">
          <div className="col bg-info">1111</div>
          <div className="col-auto bg-danger">1111</div>
        </div>
      </div>
      <div className="container d-xs-none d-sm-block d-md-none d-lg-block d-xl-none bg-info">
        <div className="row">
          <div className="col bg-info">AAAA</div>
          <div className="col-auto bg-danger">AAAA</div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col bg-primary">COL</div>
          <div className="col-auto bg-secondary d-sm-block d-md-none d-lg-block d-xl-none">
            COL AUTO
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 bg-primary">COL-6</div>
          <div className="col-6 bg-secondary d-sm-block d-md-none d-lg-block d-xl-none">
            COL-6
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-9 col-xl-auto bg-primary">
            Spalte für große Bildschirme
          </div>
          <div className="col-12 col-md-6 col-lg col-xl bg-secondary">
            Eine andere Spalte für große Bildschirme
          </div>
        </div>
      </div>
      <div className="container d-none d-md-block d-lg-none d-xl-block">
        <div className="row">
          <div className="col-6 bg-primary">123</div>
          <div className="col-6 bg-secondary">123</div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 bg-primary">ABC</div>
          <div className="col-6 bg-secondary">ABC</div>
        </div>
      </div>
      <div className="container mt-md-5">
        <div className="row">
          <div className="col-6 bg-primary">123</div>
          <div className="col-6 bg-secondary">123</div>
        </div>
      </div>
      <div className="container mt-5 mt-md-3 mt-lg-1 mt-xl-3">
        <div className="row">
          <div className="col-6 bg-primary">123</div>
          <div className="col-6 bg-secondary">123</div>
        </div>
      </div>
      <div className="container mt-2">
        <div className="row">
          <div className="col-6 bg-primary">123</div>
          <div className="col-6 bg-secondary">123</div>
        </div>
      </div>
      <div className="container my-1">
        <div className="row">
          <div className="col-6 bg-primary">123</div>
          <div className="col-6 bg-secondary">123</div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-6 bg-primary">123</div>
          <div className="col-6 bg-secondary">123</div>
        </div>
      </div>
      <div className="container my-0">
        <div className="row">
          <div className="col-6 bg-primary">123</div>
          <div className="col-6 bg-secondary">123</div>
        </div>
      </div>
      <div className="container my-0">
        <div className="row">
          <div className="col-6 bg-primary">123</div>
          <div className="col-6 bg-secondary">123</div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img className="img-fluid" src="https://via.placeholder.com/150" alt="placeholder" />
          </div>
          <div className="col-6">
            <img className="img-fluid" src="https://via.placeholder.com/150" alt="placeholder" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 offset-md-2 offset-lg-1 offset-xl-5">
            <img className="img-fluid" src="https://via.placeholder.com/150" alt="placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GridPage;
