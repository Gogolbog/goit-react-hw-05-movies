import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        <li>
          <Link key={1} to={'/movies/:55555'}>
            movie1
          </Link>
        </li>
        <li>
          <Link key={2} to={'/movies/:66666'}>
            movie2
          </Link>
        </li>
        <li>
          <Link key={3} to={'/movies/:77777'}>
            movie3
          </Link>
        </li>
      </ul>
    </div>
  );
}
