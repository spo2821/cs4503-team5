async componentDidMount() {
    // GET request using fetch with async/await
    var lotNumber;
    const response = await fetch('localhost:3000/lot/' + lotNumber);
    const data = await response.json();
   
    
    this.setState({ totalReactPackages: data.total })
}