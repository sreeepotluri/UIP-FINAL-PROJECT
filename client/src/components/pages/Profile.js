import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { fetchData } from "../../main.js";

const Profile = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [post, setPost] = useState({postsubject: '', poststatus: ''
  });

  const { postsubject, poststatus } = post;
    const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value })
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        const userid = location.state.name;
        fetchData("/post/generate",
            {
              postsubject,
              poststatus,
              userid
            },
            "POST")
            .then((data) => {
                if (!data.message) {
                    console.log(data)
                    setPost({
                      postsubject: '',
                      poststatus: ''
                    });
                    fetchData("/post/viewposts",
                        {
                          userid
                        },
                        "POST")
                        .then((res) => {
                            console.log(res);
                            if (!res.message) {
                                navigate("/profile", { state: { name: userid, data: res } });
                            }
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                }
            })
            .catch((error) => {
                console.log(error)
            })

    }

    const delPost = async (e,post) => {
      e.preventDefault();
      const userid = location.state.name;
      fetchData("/post/remove",
          {
              id: post._id
          },
          "DELETE")
          .then((data) => {
              if (!data.message) {
                  console.log(data)
                  fetchData("/post/viewposts",
                      {
                        userid
                      },
                      "POST")
                      .then((res) => {
                          console.log(res);
                          if (!res.message) {
                              navigate("/profile", { state: { name: userid, data: res } });
                          }
                      })
                      .catch((error) => {
                          console.log(error)
                      })
              }
          })
          .catch((error) => {
              console.log(error)
          })
  }

    return (
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-10 cl-sm-12 col-lg-7">
            <div className="card1 card-heder-custom" >    
            <h2> <b className="custom-card-title">Logged in as {location.state.name}</b></h2>
            <h4> <b className="custom-card-title">Post</b></h4>
            <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="Username">Post Subject</label>
              <input
                className="form-control"
                autoFocus
                name='postsubject'
                type="text"
                onChange={onChange}
                value={postsubject}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="Password">Post Status</label>
              <input
                className="form-control"
                type="text"
                name='poststatus'
                onChange={onChange}
                  value={poststatus}
              />
            </div>
            <button type="submit" className="newp">
              Generate Post
            </button>
          </form>
              </div>
            </div>
          </div>
          {location.state.data.map(post => (

          <div className="row justify-content-md-center">
            <div className="col-md-10 cl-sm-12 col-lg-7">
              <div className="card1 card-heder-custom" >
                <h4> <b className="custom-card-title">{post.postsubject}</b></h4>
                <p> {post.poststatus}</p>
                <button onClick={e=> delPost(e,post)}class="newp">Obilerate Post</button>
              </div>
            </div>
          </div>
          ))}
        </div>
      );
    }


  export default Profile;