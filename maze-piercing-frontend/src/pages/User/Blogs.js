import '../../styles/User/Blogs.css';

const blogPosts = [
  {
    title: 'The Art of Piercing: What You Should Know',
    excerpt: "Thinking about getting your first piercing? Here's what to expect before, during, and after the process...",
    link: '#',
    author: 'Admin',
    date: 'July 12, 2025'
  },
  {
    title: 'Jewelry Matters: Choosing the Right Metal for Your Skin',
    excerpt: "Not all metals are created equal. Here's how to choose safe, stylish jewelry for your unique body and skin...",
    link: '#',
    author: 'Admin',
    date: 'July 10, 2025'
  },
  {
    title: 'Healing Piercings: Myths vs. Facts',
    excerpt: "There’s a lot of misinformation out there. Let’s break down some common myths about healing piercings.",
    link: '#',
    author: 'Lawrence',
    date: 'July 5, 2025'
  }
];

const Blogs = () => {
  return (
    <section className="blogs-section">
      <h2 className="blogs-title">Latest Blogs</h2>
      <p className="blogs-subtitle">
        Discover tips, stories, and insights about piercing, aftercare, and body art culture.
      </p>

      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h3 className="blog-heading">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="blog-meta">
              <span>{post.author}</span> • <span>{post.date}</span>
            </div>
            <a href={post.link} className="read-more">Read More</a>
          </div>
        ))}
      </div>

      <div className="view-all-container">
        <a href="#" className="view-all-btn">View All Blogs</a>
      </div>
    </section>
  );
};

export default Blogs;