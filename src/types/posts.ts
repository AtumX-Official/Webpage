interface Posts {
  allPosts: Post[];
}
interface Post {
  id: string;
  title: string;
  date: string;
  image: {
    url: string;
  };
  content: string;
}
