import PodcastCard from "./PodcastCard.jsx";

/**
 * Renders the responsive grid of podcast cards.
 * Shows an empty message if there are no podcasts to display.
 *
 * @param {Object} props
 * @param {Object[]} props.podcasts - The podcasts to render.
 * @param {Object[]} props.genres - The genre list, passed down to each card.
 * @returns {JSX.Element}
 */
export default function PodcastGrid({ podcasts, genres }) {
  if (podcasts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-lg font-semibold text-gray-800">No podcasts found</p>
        <p className="text-sm text-gray-500">Try again later.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
      ))}
    </div>
  );
}
