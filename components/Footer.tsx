import Link from 'next/link';

// import NowPlaying from 'components/NowPlaying';

type LinkProps = {
  href: string,
  children: any;
}

const ExternalLink = ({ href, children }: LinkProps) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full mt-20 mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      {/* <NowPlaying /> */}
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            About
          </Link>
          <Link
            href="/newsletter"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Newsletter
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/calebbenjin">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/calebbenjin">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/notes"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            My Notes
          </Link>
          <Link
            href="/projects"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Projects
          </Link>
          <Link
            href="/snippets"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            CodeSnippets
          </Link>
          <Link
            href="/tweets"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Tweets
          </Link>
        </div>
      </div>
    </footer>
  );
}