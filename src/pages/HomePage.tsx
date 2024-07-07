const HomePage = () => {
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
    </div>
  );
};

export default HomePage;
