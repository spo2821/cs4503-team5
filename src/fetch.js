async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch('https://api.npms.io/v2/search?q=react');
    const data = await response.json();
    this.setState({ totalReactPackages: data.total })
}