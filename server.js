const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
// Get all posts
app.get('/api/posts', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, 'data', 'posts.json'), 'utf-8');
        const posts = JSON.parse(data);
        res.json(posts);
    } catch (error) {
        console.error('Error reading posts:', error);
        res.status(500).json({ error: 'Failed to load posts' });
    }
});

// Save posts (for when users create new posts)
app.post('/api/posts', async (req, res) => {
    try {
        const posts = req.body;
        await fs.writeFile(
            path.join(__dirname, 'data', 'posts.json'),
            JSON.stringify(posts, null, 2)
        );
        res.json({ success: true });
    } catch (error) {
        console.error('Error saving posts:', error);
        res.status(500).json({ error: 'Failed to save posts' });
    }
});

// Get single post by ID
app.get('/api/posts/:id', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, 'data', 'posts.json'), 'utf-8');
        const posts = JSON.parse(data);
        const post = posts.find(p => p.id === parseInt(req.params.id));
        
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.json(post);
    } catch (error) {
        console.error('Error reading post:', error);
        res.status(500).json({ error: 'Failed to load post' });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Blog server is running' });
});

// Catch all - serve index.html for client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Blog server is running on http://0.0.0.0:${PORT}`);
    console.log(`Access the blog at http://localhost:${PORT}`);
});