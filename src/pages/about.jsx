function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">Built Using: </p>
      <span className="text-white">
        <ul className="text-lg text-white">
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>GitHub API</li>
        </ul>
      </span>
      <br />
      <p className="mb-4 text-2xl font-light">
        Built with ❤️ by
        <strong>
          <a href="https://github.com/crazysamurai"> crazysamurai</a>
        </strong>
        .
      </p>
    </div>
  );
}

export default About;
