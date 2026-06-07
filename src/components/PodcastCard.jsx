import { formatDate } from "../utils/formatDate.js";

/**
 * A single podcast preview card.
 *
 * @param {Object} props
 * @param {Object} props.podcast - The podcast to display (id, title, image, seasons, genres, updated).
 * @param {Object[]} props.genres - The full genre list, used to map the podcast's genre ids to titles.
 * @returns {JSX.Element}
 */
export default function PodcastCard({ podcast, genres }) {
  // map this podcast's genre ids to readable names
  const genreTags = podcast.genres.map((id) => {
    const match = genres.find((genre) => genre.id === id);
    return (
      <span
        key={id}
        className="bg-[#f1f3f5] text-gray-700 text-[0.78rem] px-2.5 py-0.5 rounded-md"
      >
        {match ? match.title : `Unknown (${id})`}
      </span>
    );
  });

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition hover:shadow-lg hover:-translate-y-1">
      {/* cover (inset, with grey fallback) */}
      <div className="p-4 pb-0">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#9aa1ac] flex items-center justify-center text-gray-50 font-medium">
          <span>Podcast Cover</span>
          {podcast.image && (
            <img
              src={podcast.image}
              alt={podcast.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          )}
        </div>
      </div>

      {/* body */}
      <div className="p-4 pt-3">
        <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2">{podcast.title}</h3>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {podcast.seasons} season{podcast.seasons === 1 ? "" : "s"}
        </div>

        <div className="flex flex-wrap gap-2 mb-3.5">{genreTags}</div>

        <p className="text-sm text-gray-400">Updated {formatDate(podcast.updated)}</p>
      </div>
    </article>
  );
}
