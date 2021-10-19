import { getPost } from './api/posts/[postID]';

const Posts = ({ data }) => {
   console.log(data);
   return (
      <>
         <h1>Post By ID</h1>
      </>
   );
};

export const getStaticProps = async () => {
   const post = await getPost(5);

   return {
      props: {
         data: post,
      },
   };
};

export default Posts;
