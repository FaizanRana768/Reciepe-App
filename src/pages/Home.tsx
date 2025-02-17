import { useEffect, useState } from "react";
interface Landpad {
  id: string;
  full_name: string;
  status: string;
  location: {
    name: string;
    region: string;
    latitude: number;
    longitude: number;
  };
  landing_type: string;
  attempted_landings: number;
  successful_landings: number;
  wikipedia: string;
  details: string;
}

const Home = () => {
  const [landpads, setLandpads] = useState<Landpad[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse = await fetch("https://api.spacexdata.com/v3/landpads");
        const getData: Landpad[] = await apiResponse.json();
        setLandpads(getData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-red-500 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">SpaceX Landpads</h1>
      <ul className="space-y-4">
        {landpads.length > 0 ? (
          landpads.map((landpad) => (
            <li key={landpad.id} className="p-4 border rounded shadow">
              <h2 className="text-lg font-semibold">{landpad.full_name}</h2>
              <p className="text-sm font-medium text-gray-700">
                Location: {landpad.location.name}, {landpad.location.region}
              </p>
              <p className={`text-sm font-medium ${landpad.status === "active" ? "text-green-600" : "text-red-600"}`}>
                Status: {landpad.status}
              </p>
              <p className="text-sm">Landing Type: {landpad.landing_type}</p>
              <p className="text-sm">Attempted Landings: {landpad.attempted_landings}</p>
              <p className="text-sm">Successful Landings: {landpad.successful_landings}</p>
              <a href={landpad.wikipedia} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm">
                Wikipedia
              </a>
              <p className="text-xs text-gray-600 mt-2">{landpad.details}</p>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
