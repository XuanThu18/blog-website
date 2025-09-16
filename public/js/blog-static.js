// Blog Application JavaScript - Static Version for GitHub Pages
class BlogApp {
    constructor() {
        this.posts = this.getStaticPosts();
        this.filteredPosts = [...this.posts];
        this.currentCategory = 'all';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadFromLocalStorage();
        this.renderPosts();
        this.renderPopularPosts();
    }

    getStaticPosts() {
        return [
            {
                id: 1,
                title: "Hướng dẫn học lập trình web từ cơ bản đến nâng cao",
                category: "technology",
                author: "Nguyễn Văn A",
                date: "2024-01-15",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
                excerpt: "Trong bài viết này, tôi sẽ chia sẻ lộ trình học lập trình web hiệu quả nhất cho người mới bắt đầu...",
                content: `# Hướng dẫn học lập trình web từ cơ bản đến nâng cao

## 1. Tại sao nên học lập trình web?

Lập trình web là một trong những lĩnh vực công nghệ phát triển nhanh nhất hiện nay. Với sự bùng nổ của internet và các thiết bị di động, nhu cầu về các ứng dụng web ngày càng tăng cao.

## 2. Lộ trình học tập

### 2.1. HTML & CSS (2-4 tuần)
- Học cấu trúc HTML cơ bản
- CSS styling và layout
- Responsive design với Flexbox và Grid

### 2.2. JavaScript (4-6 tuần)
- Cú pháp cơ bản
- DOM manipulation
- Event handling
- ES6+ features

### 2.3. Framework (6-8 tuần)
- React, Vue hoặc Angular
- State management
- Routing
- API integration

## 3. Tài nguyên học tập

- **MDN Web Docs**: Tài liệu chính thức và chi tiết nhất
- **FreeCodeCamp**: Khóa học miễn phí với chứng chỉ
- **YouTube**: Nhiều kênh chất lượng như Traversy Media, Web Dev Simplified

## 4. Dự án thực tế

Sau khi học xong lý thuyết, hãy thực hành với các dự án:
1. Portfolio website
2. Todo app
3. Blog platform
4. E-commerce site

> "The only way to learn programming is by writing programs" - Brian Kernighan`,
                tags: ["JavaScript", "Web Development", "Programming"],
                views: 1250,
                likes: 89
            },
            {
                id: 2,
                title: "10 địa điểm du lịch không thể bỏ qua ở Việt Nam",
                category: "travel",
                author: "Trần Thị B",
                date: "2024-01-14",
                image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
                excerpt: "Việt Nam sở hữu nhiều cảnh đẹp tuyệt vời từ núi rừng đến biển đảo. Cùng khám phá 10 địa điểm du lịch hấp dẫn nhất...",
                content: `# 10 địa điểm du lịch không thể bỏ qua ở Việt Nam

## 1. Vịnh Hạ Long - Quảng Ninh
Kỳ quan thiên nhiên thế giới với hàng nghìn đảo đá vôi

## 2. Phố cổ Hội An - Quảng Nam
Di sản văn hóa thế giới với kiến trúc cổ kính

## 3. Sapa - Lào Cai
Vùng núi cao với ruộng bậc thang tuyệt đẹp

## 4. Phú Quốc - Kiên Giang
Đảo ngọc với bãi biển trong xanh

## 5. Đà Lạt - Lâm Đồng
Thành phố ngàn hoa với khí hậu mát mẻ quanh năm`,
                tags: ["Travel", "Vietnam", "Tourism"],
                views: 892,
                likes: 67
            },
            {
                id: 3,
                title: "Công thức nấu ăn: Phở bò truyền thống",
                category: "food",
                author: "Lê Văn C",
                date: "2024-01-13",
                image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800",
                excerpt: "Phở là món ăn truyền thống nổi tiếng của Việt Nam. Hôm nay tôi sẽ chia sẻ công thức nấu phở bò ngon như ngoài hàng...",
                content: `# Công thức nấu Phở bò truyền thống

## Nguyên liệu cần chuẩn bị
- 2kg xương ống bò
- 500g nạm bò
- 500g gầu bò
- Bánh phở tươi
- Hành tây, gừng, hành lá, ngò

## Gia vị
- Quế, hồi, thảo quả
- Nước mắm, muối, đường

## Cách nấu
1. Ninh xương trong 8-10 tiếng
2. Nướng hành tây và gừng
3. Cho gia vị vào túi vải, thả vào nồi nước dùng
4. Nêm nếm cho vừa ăn`,
                tags: ["Food", "Vietnamese Cuisine", "Recipe"],
                views: 543,
                likes: 45
            },
            {
                id: 4,
                title: "Lối sống tối giản - Bí quyết sống hạnh phúc",
                category: "lifestyle",
                author: "Phạm Thị D",
                date: "2024-01-12",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
                excerpt: "Lối sống tối giản không chỉ giúp bạn tiết kiệm tiền bạc mà còn mang lại sự bình yên trong tâm hồn...",
                content: `# Lối sống tối giản - Bí quyết sống hạnh phúc

Trong xã hội hiện đại ngày nay, chúng ta thường bị cuốn vào vòng xoáy tiêu dùng...`,
                tags: ["Lifestyle", "Minimalism", "Happiness"],
                views: 721,
                likes: 58
            },
            {
                id: 5,
                title: "Python cho người mới bắt đầu",
                category: "technology",
                author: "Hoàng Văn E",
                date: "2024-01-11",
                image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800",
                excerpt: "Python là ngôn ngữ lập trình dễ học nhất cho người mới bắt đầu. Hãy cùng tìm hiểu về Python trong bài viết này...",
                content: `# Python cho người mới bắt đầu

Python là một trong những ngôn ngữ lập trình phổ biến nhất hiện nay...`,
                tags: ["Python", "Programming", "Tutorial"],
                views: 1089,
                likes: 92
            },
            {
                id: 6,
                title: "Kỹ năng mềm quan trọng trong thời đại 4.0",
                category: "education",
                author: "Vũ Thị F",
                date: "2024-01-10",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
                excerpt: "Trong thời đại công nghệ 4.0, kỹ năng mềm đóng vai trò quan trọng không kém gì kỹ năng chuyên môn...",
                content: `# Kỹ năng mềm quan trọng trong thời đại 4.0

## 1. Kỹ năng giao tiếp
## 2. Tư duy phản biện
## 3. Làm việc nhóm...`,
                tags: ["Education", "Soft Skills", "Career"],
                views: 456,
                likes: 34
            }
        ];
    }

    loadFromLocalStorage() {
        const savedPosts = localStorage.getItem('blogPosts');
        if (savedPosts) {
            const customPosts = JSON.parse(savedPosts);
            this.posts = [...this.posts, ...customPosts];
            this.filteredPosts = [...this.posts];
        }
    }

    saveToLocalStorage() {
        // Chỉ lưu các bài viết được tạo mới (id > 6)
        const customPosts = this.posts.filter(post => post.id > 6);
        localStorage.setItem('blogPosts', JSON.stringify(customPosts));
    }

    setupEventListeners() {
        // Mobile menu toggle
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.querySelector('.nav-menu');
        navToggle?.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Category filter
        const categories = document.querySelectorAll('.category');
        categories.forEach(cat => {
            cat.addEventListener('click', (e) => {
                categories.forEach(c => c.classList.remove('active'));
                e.target.classList.add('active');
                this.filterByCategory(e.target.dataset.category);
            });
        });

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        
        const performSearch = () => {
            const query = searchInput.value.toLowerCase();
            this.searchPosts(query);
        };

        searchBtn?.addEventListener('click', performSearch);
        searchInput?.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') performSearch();
        });

        // New post modal
        const newPostBtn = document.getElementById('newPostBtn');
        const newPostModal = document.getElementById('newPostModal');
        const postDetailModal = document.getElementById('postDetailModal');
        const closeBtns = document.querySelectorAll('.close');

        newPostBtn?.addEventListener('click', () => {
            newPostModal.style.display = 'block';
        });

        closeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.closest('.modal').style.display = 'none';
            });
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });

        // New post form submission
        const newPostForm = document.getElementById('newPostForm');
        newPostForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.createNewPost();
        });
    }

    filterByCategory(category) {
        this.currentCategory = category;
        if (category === 'all') {
            this.filteredPosts = [...this.posts];
        } else {
            this.filteredPosts = this.posts.filter(post => post.category === category);
        }
        this.renderPosts();
    }

    searchPosts(query) {
        if (!query) {
            this.filteredPosts = [...this.posts];
        } else {
            this.filteredPosts = this.posts.filter(post => 
                post.title.toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query) ||
                post.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }
        this.renderPosts();
    }

    renderPosts() {
        const postsGrid = document.getElementById('postsGrid');
        if (!postsGrid) return;

        if (this.filteredPosts.length === 0) {
            postsGrid.innerHTML = '<p style="text-align: center; padding: 2rem;">Không tìm thấy bài viết nào.</p>';
            return;
        }

        postsGrid.innerHTML = this.filteredPosts.map(post => `
            <article class="post-card" onclick="blogApp.showPostDetail(${post.id})">
                <img src="${post.image}" alt="${post.title}" class="post-image">
                <div class="post-content">
                    <div class="post-meta">
                        <span><i class="far fa-calendar"></i> ${this.formatDate(post.date)}</span>
                        <span><i class="far fa-folder"></i> ${this.getCategoryName(post.category)}</span>
                        <span><i class="far fa-eye"></i> ${post.views}</span>
                    </div>
                    <h2 class="post-title">${post.title}</h2>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-footer">
                        <div class="post-author">
                            <img src="https://ui-avatars.com/api/?name=${post.author}&background=random" 
                                 alt="${post.author}" class="author-avatar-small">
                            <span>${post.author}</span>
                        </div>
                        <a href="#" class="read-more" onclick="event.preventDefault()">
                            Đọc tiếp <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </article>
        `).join('');
    }

    renderPopularPosts() {
        const popularPosts = document.getElementById('popularPosts');
        if (!popularPosts) return;

        const topPosts = [...this.posts]
            .sort((a, b) => b.views - a.views)
            .slice(0, 5);

        popularPosts.innerHTML = topPosts.map(post => `
            <div class="popular-post" onclick="blogApp.showPostDetail(${post.id})">
                <img src="${post.image}" alt="${post.title}" class="popular-post-image">
                <div class="popular-post-content">
                    <h4>${post.title}</h4>
                    <span><i class="far fa-eye"></i> ${post.views} lượt xem</span>
                </div>
            </div>
        `).join('');
    }

    showPostDetail(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        const postDetail = document.getElementById('postDetail');
        const modal = document.getElementById('postDetailModal');

        // Convert markdown to HTML
        const contentHtml = marked.parse(post.content);

        postDetail.innerHTML = `
            <h1>${post.title}</h1>
            <div class="post-detail-meta">
                <span><i class="far fa-user"></i> ${post.author}</span>
                <span><i class="far fa-calendar"></i> ${this.formatDate(post.date)}</span>
                <span><i class="far fa-folder"></i> ${this.getCategoryName(post.category)}</span>
                <span><i class="far fa-eye"></i> ${post.views} lượt xem</span>
                <span><i class="far fa-heart"></i> ${post.likes} thích</span>
            </div>
            <img src="${post.image}" alt="${post.title}" class="post-detail-image">
            <div class="post-detail-content">
                ${contentHtml}
            </div>
            <div class="tags" style="margin-top: 2rem;">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;

        modal.style.display = 'block';

        // Increment view count
        post.views++;
        this.saveToLocalStorage();
    }

    createNewPost() {
        const title = document.getElementById('postTitle').value;
        const category = document.getElementById('postCategory').value;
        const image = document.getElementById('postImage').value || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800';
        const excerpt = document.getElementById('postExcerpt').value;
        const content = document.getElementById('postContent').value;
        const tags = document.getElementById('postTags').value.split(',').map(t => t.trim());

        const newPost = {
            id: Math.max(...this.posts.map(p => p.id)) + 1,
            title,
            category,
            author: "Người dùng",
            date: new Date().toISOString().split('T')[0],
            image,
            excerpt,
            content,
            tags,
            views: 0,
            likes: 0
        };

        this.posts.unshift(newPost);
        this.filteredPosts = [...this.posts];
        this.renderPosts();
        this.saveToLocalStorage();

        // Reset form and close modal
        document.getElementById('newPostForm').reset();
        document.getElementById('newPostModal').style.display = 'none';

        // Show success message
        this.showNotification('Bài viết đã được tạo thành công!');
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: var(--shadow-lg);
            z-index: 9999;
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('vi-VN', options);
    }

    getCategoryName(category) {
        const categoryNames = {
            technology: 'Công nghệ',
            lifestyle: 'Đời sống',
            travel: 'Du lịch',
            food: 'Ẩm thực',
            education: 'Giáo dục'
        };
        return categoryNames[category] || category;
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.blogApp = new BlogApp();
});