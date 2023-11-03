
import {Link} from "react-router-dom"

import useFilm from '../../hook/useFilm';
function Albums() {
 const {listFilm}=useFilm();


  return (
    <div>
      <section className="w3l-albums py-5" id="projects">
        <div className="container py-lg-4">
          <div className="row">
            {listFilm.map((album) => (
              <div key={album.id} className="col-lg-4 new-relise-gd mt-lg-0 mt-0">
                <div className="slider-info">
                  <div className="img-circle">
                    <a href="genre.html">
                      <img src={album.imageUrl} className="img-fluid" alt="author image" />
                      <div className="overlay-icon">
                        <span className="fa fa-play video-icon" aria-hidden="true"></span>
                      </div>
                    </a>
                  </div>
                  <div className="message">
                    <p>{album.genre}</p>
                    <Link className="author-book-title" to={`detail/${album.id}`}>
                      {album.title}
                    </Link>
                    <h4>
                      <span className="post">
                        <span className="fa fa-clock-o"> </span> {album.runtime}
                      </span>
                      <span className="post fa fa-heart text-right"></span>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Albums;
