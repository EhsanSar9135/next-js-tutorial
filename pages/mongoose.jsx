import { useFormik } from 'formik';
import axios from 'axios';

const Mongoose = () => {
   const formik = useFormik({
      initialValues: {
         title: '',
         body: '',
      },
      onSubmit: async (values) => {
         const response = await axios.post('/api/mongoose_posts', values);
         console.log(response.data);
      },
   });

   const getPosts = async () => {
      const response = await axios.get('/api/mongoose_posts');
      console.log(response.data);
   };

   return (
      <div>
         <button onClick={getPosts}>Load Posts</button>
         <form onSubmit={formik.handleSubmit}>
            <div>
               <label htmlFor="title">Title</label>
               <br />
               <input
                  id="title"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
               />
            </div>

            <div>
               <label htmlFor="title">Body</label>
               <br />
               <input
                  id="body"
                  name="body"
                  onChange={formik.handleChange}
                  value={formik.values.body}
               />
            </div>

            <button type="submit">Submit</button>
         </form>
      </div>
   );
};

export default Mongoose;
