
const Home = () => {
  const fetchData = async () => {
    const apiResponse = await fetch('https://api.spacexdata.com/v3/landpads');
    const getData = await apiResponse.json();
    return getData;
  }
  fetchData().then(data => console.log(data));
  return (
    <div className="text-[red] flex inset-y-1/4 ">Home</div>
  )
}

export default Home