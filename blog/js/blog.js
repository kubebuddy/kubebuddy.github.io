let blogPosts = [];

fetch('../blog/blog-data.yaml')
  .then(response => response.text())
  .then(yamlText => {
    const data = jsyaml.load(yamlText);
    blogPosts = data;

    const urlParams = new URLSearchParams(window.location.search);
    const postSlug = urlParams.get('post');

    if (postSlug) {
      const currentPost = blogPosts.find(post => post.slug === postSlug);
      if (currentPost) {
        document.querySelector('h1').innerText = currentPost.title;
        loadBlogContent(currentPost);
        renderPrevNextButtons(currentPost);
      }
    } else {
      renderBlogList(blogPosts);
    }
  })
  .catch(err => console.error('Failed to load blog data:', err));

// Function to render all blog cards
function renderBlogList(posts) {
  const container = document.getElementById('blog-list');
  container.innerHTML = '';

  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'col';

    const imagePath = post.image
      ? post.image
      : 'https://kubebuddy.org/images/logo-vt.png';

    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${imagePath}" class="card-img-top" alt="${post.title}" style="height: 200px; object-fit: cover; width: 100%;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${post.title}</h5>
          <h6 class="card-text small text-muted"> ${new Date(post.date).toLocaleDateString('en-US', {
            day: '2-digit', month: 'short', year: 'numeric'})}</h6>
          <h6 class="card-text small text-muted">By ${post.author}</h6>
    
          <p class="card-text small text-truncate" style="max-height: 4.5em; overflow: hidden;"> ${post.summary}</p>
          <a href="?post=${post.slug}" class="btn btn-primary mt-auto">Read Now</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Function to load selected blog post's markdown
function loadBlogContent(post) {
    const container = document.getElementById('blog-list');
    container.innerHTML = ''; // Clear cards
  
    fetch(`../blog/${post.slug}/${post.file}`)
      .then(res => res.text())
      .then(md => {
        const mdParser = window.markdownit({
          html: true,
          linkify: true,
          typographer: true
        });
  
        const html = mdParser.render(md);
        const blogContent = document.getElementById('blog-content');
        blogContent.innerHTML = html;
      });
  }

// Function to add Previous and Next buttons
function renderPrevNextButtons(currentPost) {
  const index = blogPosts.findIndex(p => p.slug === currentPost.slug);
  const blogContent = document.getElementById('blog-content');

  const navWrapper = document.createElement('div');
  navWrapper.className = 'd-flex justify-content-between mt-5 pt-4 border-top';

  const prev = blogPosts[index - 1];
  const next = blogPosts[index + 1];

  const prevBtn = document.createElement('a');
  const nextBtn = document.createElement('a');

  prevBtn.className = 'btn btn-outline-primary';
  nextBtn.className = 'btn btn-outline-primary';

  if (prev) {
    prevBtn.href = `?post=${prev.slug}`;
    prevBtn.innerText = `← ${prev.title}`;
  } else {
    prevBtn.classList.add('disabled');
    prevBtn.innerText = '← No previous post';
  }

  if (next) {
    nextBtn.href = `?post=${next.slug}`;
    nextBtn.innerText = `${next.title} →`;
  } else {
    nextBtn.classList.add('disabled');
    nextBtn.innerText = 'No next post →';
  }

  navWrapper.appendChild(prevBtn);
  navWrapper.appendChild(nextBtn);
  blogContent.appendChild(navWrapper);
}
