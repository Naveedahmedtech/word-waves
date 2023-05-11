import { Typography, Box, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
const BlogPost = () => {
  return (
    <>
      <main
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "20px 0",
          gap: "100px",
        }}
      >
        <div>
          <Box sx={{ maxWidth: "1500px" }}>
            <Typography variant="h3" sx={{ marginBottom: "10px" }}>
              Title of the Post
            </Typography>
            <Typography component="samll" color="text.secondary">
              Data of published
            </Typography>
            <Typography paragraph sx={{ marginTop: "10px" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              veritatis incidunt sunt fugiat itaque officiis delectus sit.
              Impedit repellat excepturi quis delectus, odio perferendis
              <br />
              <br />
              Ipsum veritatis incidunt sunt fugiat itaque officiis delectus sit.
              Impedit repellat excepturi quis delectus, odio perferendis
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              est at voluptatem quo possimus. Quaerat odit dolore dolorem
              tempora et perspiciatis alias, aut fugiat eos totam inventore
              ratione at adipisci impedit libero nesciunt quam consequuntur
              molestias provident quia expedita maxime ipsum unde. Ea sed, amet
              et tempora earum dicta velit sint quam numquam, esse a aspernatur.
              Quam ducimus, voluptate sequi omnis cumque libero id, modi, quasi
              itaque ea ipsa beatae reprehenderit. Eveniet rerum velit magnam!
              Maxime, id quaerat quo necessitatibus magni iste voluptate
              accusamus numquam temporibus qui aperiam vero?
              <br />
              <br />
              Molestias aspernatur eveniet, ipsa doloribus facere cupiditate
              officiis asperiores eos pariatur eum aliquid animi eaque suscipit,
              aliquam expedita debitis sequi sint delectus odio deleniti quod
              quisquam sed sunt! Voluptatem quod, quibusdam, repellendus aliquid
              corrupti aperiam cum non optio sequi deleniti perspiciatis officia
              odio consequatur quis enim consectetur repellat corporis quaerat
              explicabo doloremque. Dolore nesciunt, tempora, quasi animi
              dignissimos ad est numquam voluptatem optio ut in! Explicabo, odio
              ducimus inventore autem error dolorum eius fuga sit non modi
              adipisci voluptate omnis ipsa perspiciatis magnam a iste placeat
              ipsum obcaecati illo tempore hic sint corporis! Amet tempora aut
              quos fugit commodi nisi, nobis consectetur dolores minima expedita
              mollitia voluptatem rem cumque,
              <br />
              <br />
              quibusdam doloribus debitis voluptatibus dolorem. Beatae quod
              perferendis autem nisi quo voluptatibus officiis laboriosam culpa
              tenetur accusamus neque, sint odio tempore ullam dolorem
              recusandae id ducimus omnis soluta eius voluptates aliquam
              quibusdam. Repellendus, est ex aut temporibus quam aperiam
              commodi. Provident consequatur dolores, odio repellendus,
              voluptates, molestiae autem dolore labore beatae nulla enim.
              Ipsum, officiis provident? Architecto earum praesentium tempore
              perspiciatis possimus repellat recusandae sunt cumque modi debitis
              dolorem quisquam explicabo exercitationem consectetur, impedit
              quis dolores, aperiam hic eaque, nesciunt consequatur quod? Iusto
              odio dolorem quam ipsam velit ducimus ea deleniti aperiam
              voluptas! Facilis a cupiditate placeat quam velit quasi? Nam, ea?
            </Typography>
          </Box>
        </div>
        <div>
          <Box sx={{ backgroundColor: "#ddf", p: 2, width: "100%" }}>
            <Typography variant="h4">About</Typography>
            <Typography paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              veritatis incidunt sunt fugiat itaque officiis delectus sit.
            </Typography>
          </Box>
          <Box sx={{ p: 2, margin: "20px 0" }}>
            <Typography variant="h5" sx={{ marginBottom: "10px" }}>
              Social
            </Typography>
            <div>
              <NavLink to="https://github.com/Naveedahmedtech" target="_blank">
                <Link>Github</Link>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="https://www.linkedin.com/in/naveed-ahmed-665747268/"
                target="_blank"
              >
                <Link>Linkedin</Link>
              </NavLink>
            </div>
            <div>
              <NavLink to="https://twitter.com/Naveedahmedtech" target="_blank">
                <Link>Twitter</Link>
              </NavLink>
            </div>
          </Box>
        </div>
      </main>
    </>
  );
};

export default BlogPost;
