import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const PLAYLISTS = [
  {
    label: "LeetCode",
    playlistId: import.meta.env.VITE_YOUTUBE_LEETCODE_PLAYLIST_ID,
  },
  {
    label: "Projects",
    playlistId: import.meta.env.VITE_YOUTUBE_PROJECTS_PLAYLIST_ID,
  },
  {
    label: "Communication",
    playlistId: import.meta.env.VITE_YOUTUBE_COMMUNICATION_PLAYLIST_ID,
  },
];

  // ---------------- Skeleton Card Component----------------
  const VideoSkeleton = () => (
    <div className="overflow-hidden rounded-xl bg-gray-800/30 border border-gray-700">
      <div className="w-full aspect-video bg-gray-700 animate-pulse" />
    </div>
  );
  
const ITEMS_PER_PAGE = 6;

const YouTubeSection = () => {
  const [videosByCategory, setVideosByCategory] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // ---------------- FETCH PLAYLISTS ----------------
  useEffect(() => {
    if (!API_KEY) {
      console.warn("YouTube API key missing");
      setIsLoading(false);
      return;
    }

    const fetchPlaylists = async () => {
      setIsLoading(true);
      const result = {};

      await Promise.all(
        PLAYLISTS.map(async ({ label, playlistId }) => {
          if (!playlistId) return;

          try {
            const res = await fetch(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=${playlistId}&key=${API_KEY}`
            );

            const data = await res.json();

            // Filter out private / deleted videos safely
            result[label] =
              data.items?.filter(
                (item) => item?.snippet?.resourceId?.videoId
              ) || [];
          } catch (err) {
            console.error(`Failed to fetch ${label}`, err);
            result[label] = [];
          }
        })
      );

      setVideosByCategory(result);
      setIsLoading(false);
    };

    fetchPlaylists();
  }, []);

  // ---------------- DERIVED DATA ----------------
  const categories = useMemo(
    () => ["All", ...Object.keys(videosByCategory)],
    [videosByCategory]
  );

  const filteredVideos = useMemo(() => {
    if (activeCategory === "All") {
      return Object.values(videosByCategory).flat();
    }
    return videosByCategory[activeCategory] || [];
  }, [activeCategory, videosByCategory]);

  const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);

  const currentVideos = filteredVideos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // ---------------- UI ----------------
  return (
    <section
      id="communication"
      className="min-h-screen py-24 px-4 md:px-8 lg:px-16
                 bg-gradient-to-b from-gray-900 to-black"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h4 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Explanation & Communication
        </h4>
        <p className="max-w-2xl mx-auto text-white">
          LeetCode walkthroughs, project explanations, and communication-focused
          content.
        </p>
      </motion.div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${activeCategory === category
                ? "bg-gradient-to-r from-red-500 to-purple-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="skeletons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
              <VideoSkeleton key={i} />
            ))}
          </motion.div>
        ) : (

          <>
            <motion.div
              key="videos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentVideos.map((video) => (
                <motion.div
                  key={video.snippet.resourceId.videoId}
                  whileHover={{ y: -6 }}
                  className="overflow-hidden rounded-xl bg-gray-800/30 border border-gray-700"
                >
                  <iframe
                    loading="lazy"
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                    title={video.snippet.title}
                    allowFullScreen
                  />
                </motion.div>
              ))}
            </motion.div>

            {filteredVideos.length === 0 && (
              <p className="text-center text-gray-400 mt-12">
                Content coming soon for this category.
              </p>
            )}
          </>
        )}
      </AnimatePresence>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-14 gap-2">
          {/* Prev */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`w-10 h-10 rounded-full flex items-center justify-center
        ${currentPage === 1
                ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-red-500"
              }`}
          >
            ←
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-full text-sm
          ${currentPage === page
                  ? "bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {page}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 rounded-full flex items-center justify-center
        ${currentPage === totalPages
                ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-red-500"
              }`}
          >
            →
          </button>
        </div>
      )}

    </section >
  );
};

export default YouTubeSection;
