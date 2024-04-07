async function getGithubData() {
  const res = await fetch('https://api.github.com/repos/albumentations-team/albumentations', { next: { revalidate: 600 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getGithubData();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center">Albumentations Repository Stats</h1>
      {/* Adjusted to stack items vertically */}
      <div className="mt-8 flex flex-col justify-center items-center space-y-4">
        <p className="text-lg">⭐ Stars: <span className="font-bold">{data.stargazers_count}</span></p>
        <p className="text-lg">🍴 Forks: <span className="font-bold">{data.forks_count}</span></p>
      </div>
    </div>
  );
};

