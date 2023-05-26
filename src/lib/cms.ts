const ENDPOINT = "https://graphql.datocms.com";

const fetchCms = async <T>(query: string): Promise<{ data: T }> => {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.CMS_TOKEN}`,
    },
    body: JSON.stringify({
      query,
    }),
  });

  return response.json();
};

export const getPosts = () => {
  return fetchCms<Posts>(`
    query getPosts {
        allPosts {
          id
          title
          date
          image{
            url
          }
          content
        }
      }`);
};

export const getJobs = () => {
  return fetchCms<Jobs>(`
    query getJobs {
        allJobs{
            title
            location
            skills
          }
    }
    `);
};
