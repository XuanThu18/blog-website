# Blog Website

Một trang web blog hiện đại với giao diện đẹp mắt và nhiều tính năng.

## 🌟 Tính năng

- ✨ Giao diện responsive, hoạt động tốt trên mọi thiết bị
- 📝 Tạo và quản lý bài viết
- 🔍 Tìm kiếm bài viết
- 📁 Phân loại theo danh mục
- 🏷️ Hệ thống tags
- 📊 Hiển thị bài viết phổ biến
- 💾 Lưu trữ dữ liệu JSON
- 📖 Hỗ trợ Markdown cho nội dung

## 🚀 Cài đặt và Chạy

### Yêu cầu
- Node.js v14 trở lên
- npm hoặc yarn

### Cài đặt

```bash
# Clone repository
git clone https://github.com/XuanThu18/blog-website.git

# Di chuyển vào thư mục
cd blog-website

# Cài đặt dependencies
npm install
```

### Chạy ứng dụng

```bash
# Chạy với Node.js
npm start

# Hoặc chạy với PM2
npx pm2 start ecosystem.config.js
```

Truy cập: http://localhost:3000

## 📂 Cấu trúc dự án

```
blog-website/
├── public/              # Static files
│   ├── index.html      # Trang chính
│   ├── css/            # Stylesheets
│   └── js/             # JavaScript files
├── data/               # Dữ liệu bài viết
│   └── posts.json      # File JSON chứa bài viết
├── server.js           # Express server
├── package.json        # Dependencies
└── ecosystem.config.js # PM2 configuration
```

## 🎨 Công nghệ sử dụng

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Markdown**: marked.js
- **Icons**: Font Awesome
- **Process Manager**: PM2

## 📝 Hướng dẫn sử dụng

1. **Viết bài mới**: Click nút "✏️ Viết bài" ở góc trên bên phải
2. **Tìm kiếm**: Sử dụng thanh tìm kiếm ở hero section
3. **Lọc theo danh mục**: Click vào các danh mục
4. **Xem chi tiết**: Click vào bài viết để xem nội dung đầy đủ

## 🌐 Demo và Deployment

### Truy cập trang web
- Repository: https://github.com/XuanThu18/blog-website
- Demo GitHub Pages: https://xuanthu18.github.io/blog-website/

### Cách kích hoạt GitHub Pages
1. Vào Settings của repository
2. Chọn Pages từ menu bên trái
3. Trong Source, chọn "Deploy from a branch"
4. Chọn branch "main" và folder "/" (root)
5. Click Save
6. Đợi vài phút để GitHub Pages build và deploy
7. Truy cập trang web tại: https://xuanthu18.github.io/blog-website/

## 👤 Tác giả

- GitHub: [@XuanThu18](https://github.com/XuanThu18)

## 📄 License

MIT License