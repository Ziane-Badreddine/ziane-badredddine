import useSWR from "swr";

interface Repo {
  stargazers_count: number;
}

async function fetchAllReposStars(username: string): Promise<number> {
  let page = 1;
  let starsCount = 0;
  let repos: Repo[] = [];
  const perPage = 100;


  while (true) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }
    repos = await response.json();

    starsCount += repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

    if (repos.length < perPage) {

      break;
    }
    page++;
  }

  return starsCount;
}

export function useGithubProfileStars(username: string) {
  const { data, error, isLoading } = useSWR(
    username ? ["github-stars", username] : null,
    () => fetchAllReposStars(username),
    {
      revalidateOnFocus: false,
      dedupingInterval: 60 * 60 * 1000, 
    }
  );

  return {
    totalStars: data ?? 0,
    isLoading,
    error: error as Error | null,
  };
}
