import '../../styles/User/Blogs.css';

import TemporarilyUnavailable from '../../layouts/TemporarilyUnavailable';

function Blogs() {
  return (
    <>
    <div className="blog-section">
      <h2>Latest Blogs</h2>
      <p>Discover tips, stories, and insights about piercing, aftercare, and body art culture.</p>

      <div className="blog-list">
        {/* Sample Blog Post */}
        <div className="blog-card">
          <h3 className="blog-title">The Art of Piercing: What You Should Know</h3>
          <p className="blog-excerpt">
            Thinking about getting your first piercing? Here's what to expect before, during, and after the process...
          </p>
          <a href="/blogs/art-of-piercing" className="read-more">Read More</a>
        </div>

        {/* Add more <div className="blog-card"> blocks for more posts */}
      </div>
    </div>

    </>
  );
}
export default Blogs;