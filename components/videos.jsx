import Link from "next/link";

const Videos = () => {
  return (
    <section className="section">
      <p className="is-size-3 has-text-black has-font-weight-bold">Videos</p>
      <p className="mb-4 is-size-5">
        Play any video to preview click the tweet button to share on Twitter.
      </p>
      <div className="columns">
        <div className="column is-4">
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/U51MSK6nSQE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="is-size-5">
          Are you ready for AHAIC 2021 Virtual Conference? Here is a snippet from the 2019 conference. https://youtu.be/byj1zViyaj0
          </p>
        <Link href="https://twitter.com/intent/tweet?text=Hello%20world"><a className="twitter-share-button"></a></Link>
        </div>
        <div className="column is-4">
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/U51MSK6nSQE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="is-size-5">Are you ready for AHAIC 2021 Virtual Conference? Here is a snippet from the 2019 conference. https://youtu.be/byj1zViyaj0</p>
        </div>
        <div className="column is-4">
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/U51MSK6nSQE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
            <p className="is-size-5">Are you ready for AHAIC 2021 Virtual Conference? Here is a snippet from the 2019 conference. https://youtu.be/byj1zViyaj0</p> 
        </div>
      </div>
    </section>
  );
};

export default Videos;
