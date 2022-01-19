import octocat2 from "../components/layout/assets/gangnamtocat.png";
function About() {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1">
      <div>
        <h1 className="text-6xl mb-4">GitHub Finder</h1>
        <p className="mb-4 text-2xl font-light">
          A React app to search GitHub profiles and see profile details.
        </p>
        <p className="text-lg text-gray-400">
          Version <span className="text-cyan-600">1.0.0</span>
        </p>
        <p className="text-lg text-gray-400">Built Using: </p>
        <span className="text-white">
          <ul className="text-lg text-cyan-600">
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
      <div className="flex justify-center">
        <img className="gangmOcto" src={octocat2} alt="octocat" />
      </div>
    </div>
  );
}

export default About;
