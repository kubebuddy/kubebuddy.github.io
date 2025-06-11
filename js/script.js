// Documentation JS

document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-link[data-md]');

    // Set marked options
    marked.setOptions({
        breaks: true,
        gfm: true,
        headerIds: true,
        sanitize: false
    });

    // Load markdown file function
    async function loadMarkdown(filename) {
        try {
            const response = await fetch(`./docs-md/${filename}.md`);
            if (!response.ok) {
                throw new Error(`Failed to load ${filename}.md`);
            }
            const markdown = await response.text();
            return markdown;
        } catch (error) {
            console.error(error);
            return `# Error\nFailed to load ${filename}.md. Please check if the file exists.`;
        }
    }

    // Create support links
    function createSupportLinks(currentPage) {
        return `
            <div class="support-links mb-4">
                <a href="https://github.com/kubebuddy/kubebuddy.github.io/issues/new?body=%2A%2AOn+Page%3A%2A%2A+%5B${currentPage}%5D%28https%3A%2F%2Fkubebuddy.org%2Fdocs%2F${currentPage.toLowerCase()}%29" 
                class="btn btn-outline-warning text-dark inline-flex" 
                target="_blank"><i class="bi bi-bug-fill"></i> &nbsp; Report Issue</a>
                <a href="https://github.com/kubebuddy/kubebuddy.github.io/edit/main/documents/docs-md/${currentPage.toLowerCase()}.md?description=Signed-off-by%3A+NAME+%3CEMAIL_ADDRESS%3E%0A%0A%3E+_By+signing+off+you+acknowledge+adhering+to+the+requirements+listed+here%3A+https%3A%2F%2Fprobot.github.io%2Fapps%2Fdco%2F_" 
                class="btn btn-outline-dark inline-flex" 
                target="_blank"><i class="bi bi-github"></i> &nbsp; Edit</a>
            </div>
        `;
    }

    // Render markdown content
    async function renderMarkdown(filename) {
        contentContainer.innerHTML = `
            <div class="text-center p-5">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3">Loading ${filename} documentation...</p>
            </div>
        `;

        const markdown = await loadMarkdown(filename);
        const html = marked.parse(markdown);

        // Format display name
        let displayName = filename.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');

        // Render content
        contentContainer.innerHTML = createSupportLinks(displayName) + html;

        // Add copy buttons to all <pre><code> blocks
        const codeBlocks = contentContainer.querySelectorAll('pre > code');
        codeBlocks.forEach(codeBlock => {
            const pre = codeBlock.parentNode;

            // Create copy button
            const button = document.createElement('button');
            button.className = 'copy-button btn btn-sm btn-outline-secondary';
            button.innerHTML = '<i class="bi bi-clipboard"></i>';
            button.style.position = 'absolute';
            button.style.top = '.5rem';
            button.style.right = '.5rem';
            button.style.zIndex = '10';

            // Wrapper for positioning
            const wrapper = document.createElement('div');
            wrapper.style.position = 'relative';
            wrapper.appendChild(button);
            wrapper.appendChild(pre.cloneNode(true));

            pre.parentNode.replaceChild(wrapper, pre);

            // Copy logic
            button.addEventListener('click', () => {
                navigator.clipboard.writeText(codeBlock.textContent).then(() => {
                    button.innerHTML = '<i class="bi bi-clipboard-check"></i> Copied!';
                    button.className = 'copy-button btn btn-sm btn-success';
                    setTimeout(() => {
                        button.innerHTML = '<i class="bi bi-clipboard"></i>';
                        button.className = 'copy-button btn btn-sm btn-outline-secondary';
                    }, 3000);
                });
            });
        });

        // Update active link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-md') === filename) {
                link.classList.add('active');
            }
        });

        // Update URL hash
        window.location.hash = `#${filename}`;

        // Scroll to top after content is rendered
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }

    // Event listeners for sidebar links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const mdFile = this.getAttribute('data-md');
            renderMarkdown(mdFile);
        });
    });

    // Handle dropdown toggles
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const submenuId = this.getAttribute('data-bs-target');
            const submenu = document.querySelector(submenuId);
            submenu.classList.toggle('show');
        });
    });

    // Load initial content
    const initialPage = window.location.hash.substring(1) || 'introduction';
    renderMarkdown(initialPage);

    // Handle URL hash change
    window.addEventListener('hashchange', function () {
        const page = window.location.hash.substring(1) || 'introduction';
        renderMarkdown(page);
    });
});