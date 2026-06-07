import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import PodcastGrid from "./components/PodcastGrid.jsx";
import { fetchPodcasts } from "./api/fetchPodcasts.js";
import { genres } from "./data.js";

/**
 * App - the root component of the podcast landing page. It handles:
 * - Fetching podcast data from the remote API on load
 * - Managing loading and error state
 * - Rendering the podcast grid once data is fetched
 * - Showing a header and fallback UI while loading or on error
 *
 * @returns {JSX.Element} The rendered application interface.
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch the podcasts once when the page loads
  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-[1400px] mx-auto px-5 sm:px-8 py-7">
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-gray-500">
            <div className="spinner"></div>
            <p>Loading podcasts…</p>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-lg font-semibold text-gray-800">Something went wrong</p>
            <p className="text-sm text-gray-500">
              Error occurred while fetching podcasts: {error}
            </p>
          </div>
        )}

        {!loading && !error && <PodcastGrid podcasts={podcasts} genres={genres} />}
      </main>
    </>
  );
}
