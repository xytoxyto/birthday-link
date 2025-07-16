
import Link from "next/link";
import TierBadge from "@/components/TierBadge";
import PropTypes from "prop-types";


function PostCard({ title, date, teaser, link, tier }) {
  return (
    <article className="bg-white/10 backdrop-blur rounded-lg shadow-lg p-4 space-y-3 text-white flex flex-col h-full" aria-labelledby={`post-title-${title.replace(/\s+/g, "-").toLowerCase()}`}> 
      <header>
        <h3 id={`post-title-${title.replace(/\s+/g, "-").toLowerCase()}`} className="text-xl font-bold">{title}</h3>
        <p className="text-white/60 text-sm" aria-label="Post date">{date}</p>
      </header>
      <p className="text-white/80 flex-1">{teaser}</p>
      {tier && typeof TierBadge === "function" ? (
        <TierBadge tier={tier} />
      ) : null}
      <Link
        href={link}
        className="inline-block mt-2 bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
        aria-label={`Read more about ${title}`}
      >
        Read More
      </Link>
    </article>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  teaser: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tier: PropTypes.string,
};


const posts = [
  {
    title: "Introducing Birthday Bless",
    date: "July 2025",
    teaser: "Our new feature lets friends contribute money or buy gifts to make your party unforgettable.",
    link: "/blog/birthday-bless",
  },
  {
    title: "Elite Tier Benefits Explained",
    date: "June 2025",
    teaser: "Learn what makes Elite tier special and why it's our most popular choice.",
    link: "/blog/elite-benefits",
    tier: "Elite",
  },
  {
    title: "Event Planning Tips for Hosts",
    date: "May 2025",
    teaser: "Get the most out of your Birthday Link event with these expert tips.",
    link: "/blog/event-tips",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-blue-900 to-black px-4 py-8 flex flex-col items-center">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-2">
          <span role="img" aria-label="news">📰</span> Announcements & Blog
        </h1>
        <p className="text-white/70 mt-2 text-lg max-w-xl mx-auto">
          Stay up to date with the latest features, tips, and news from Birthday Link!
        </p>
      </header>
      <section className="w-full max-w-3xl">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 mt-6">
          {posts.map((post) => (
            <PostCard key={post.title} {...post} />
          ))}
        </div>
      </section>
    </main>
  );
}
