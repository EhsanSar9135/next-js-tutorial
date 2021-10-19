import axios from 'axios';

//  /api/posts/222222

export const getPost = async (postsID) => {
   try {
      const request = await axios.get(
         `https://jsonplaceholder.typicode.com/posts/${postsID}`
      );

      return { post: request.data };
   } catch (error) {
      return { message: 'Sorry, try again' };
   }
};

const handler = async (req, res) => {
   const postsID = req.query.postID;

   if (req.method === 'GET') {
      try {
         const request = await getPost(postsID);
         res.status(200).json(request);
      } catch (error) {
         res.status(401).json(request);
      }
   }
};

export default handler;
