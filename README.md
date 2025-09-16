# WaterlooEat - Waterloo Food Discovery Platform

A modern, bilingual food discovery platform designed specifically for the Waterloo community, similar to Dianping in China. Discover the best restaurants, share your dining experiences, and explore hidden culinary treasures in Waterloo.

## 🌟 Features

- 🍽️ **Food Sharing**: Upload food photos and share authentic dining experiences
- ⭐ **Real Reviews**: Get recommendations based on authentic user reviews
- 📍 **Local Focus**: Discover local culinary treasures in the Waterloo area
- 🎨 **Apple-Style Design**: Clean, modern interface with premium aesthetics
- 📱 **Responsive Design**: Perfect experience on desktop and mobile devices
- 🌐 **Bilingual Support**: English and Chinese language switching
- 🔍 **Smart Search**: Real-time search with scroll-based UI optimization

## 🚀 Live Demo

Visit the live website to explore Waterloo's culinary scene!

## 📱 Screenshots

### Desktop View
- Clean, modern interface with Apple-inspired design
- Integrated search functionality with smooth animations
- Restaurant cards with ratings and location information
- User reviews with photo sharing capabilities

### Mobile View
- Fully responsive design
- Touch-friendly interface
- Optimized for mobile browsing

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Design**: Apple-inspired UI with modern CSS features
- **Icons**: Font Awesome
- **Fonts**: SF Pro Display (Apple's official font)
- **Responsive**: CSS Grid, Flexbox, Media Queries
- **Animations**: CSS Transitions and Transforms

## 📁 Project Structure

```
WaterlooEat/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Stylesheet with Apple-inspired design
├── js/
│   ├── script.js           # Main JavaScript functionality
│   └── translations.js     # Bilingual translation system
├── README.md               # English documentation
├── README_CN.md            # Chinese documentation
└── .gitignore              # Git ignore file
```

## 🎨 Design Features

### Apple-Style Interface
- Clean, minimalist layout
- Soft rounded corners and subtle shadows
- High-quality gradients and color schemes
- Smooth animations and transitions
- Glass-morphism effects (backdrop-filter)

### Color Scheme
- Primary: #ff6b35 (Orange-red)
- Background: #f5f5f7 (Light gray)
- Text: #1d1d1f (Dark gray)
- Accent: #6e6e73 (Medium gray)

## 🌐 Bilingual Support

The platform supports both English and Chinese languages with:
- Real-time language switching
- Local storage for language preference
- Complete translation coverage
- Smooth transition animations

## 📱 Responsive Design

- **Desktop**: Full-featured experience with side-by-side layout
- **Tablet**: Optimized for touch interaction
- **Mobile**: Compact design with vertical layout
- **Cross-browser**: Compatible with all modern browsers

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HL42/WaterlooEat-App.git
   cd WaterlooEat-App
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     
     # Using VS Code Live Server extension
     ```

3. **Access the application**
   - Open `http://localhost:8000` in your browser
   - Or directly open `index.html` file

## 🎯 Usage

### For Users
1. **Browse Restaurants**: Scroll through popular restaurants in Waterloo
2. **Search**: Use the search bar to find specific restaurants or cuisines
3. **Read Reviews**: Check authentic user reviews and photos
4. **Language Switch**: Toggle between English and Chinese
5. **Mobile Experience**: Enjoy seamless mobile browsing

### For Developers
1. **Customize Content**: Update restaurant data in HTML
2. **Add Features**: Extend functionality in JavaScript files
3. **Modify Styling**: Customize the Apple-inspired design in CSS
4. **Add Translations**: Extend language support in translations.js

## 🔧 Customization

### Adding New Restaurants
Edit the restaurant cards in `index.html`:
```html
<div class="restaurant-card">
    <div class="restaurant-image">
        <img src="your-image-url" alt="Restaurant Name">
        <div class="rating">
            <i class="fas fa-star"></i>
            <span>4.8</span>
        </div>
    </div>
    <div class="restaurant-info">
        <h3>Restaurant Name</h3>
        <p class="cuisine">Cuisine Type</p>
        <p class="location">
            <i class="fas fa-map-marker-alt"></i>
            <span>Location</span>
        </p>
        <div class="price-range">$$$</div>
    </div>
</div>
```

### Adding New Languages
Extend the translations in `js/translations.js`:
```javascript
const translations = {
    en: { /* English translations */ },
    zh: { /* Chinese translations */ },
    fr: { /* French translations */ } // Add new language
};
```

## 🌟 Key Features Explained

### Smart Search Bar
- **Sticky Positioning**: Stays visible while scrolling
- **Auto-Hide**: Disappears when scrolling down, reappears when scrolling up
- **Real-time Search**: Filters restaurants as you type
- **Smooth Animations**: Elegant transitions and effects

### Restaurant Cards
- **High-Quality Images**: Optimized for web performance
- **Rating System**: Visual star ratings
- **Location Info**: Easy-to-find location details
- **Price Indicators**: Clear pricing information
- **Hover Effects**: Interactive visual feedback

### User Reviews
- **Photo Sharing**: Users can upload food photos
- **Rating System**: 5-star rating system
- **Time Stamps**: Recent activity indicators
- **User Profiles**: Simple user identification

## 🔮 Future Roadmap

- [ ] User registration and login system
- [ ] Restaurant detail pages
- [ ] User profile management
- [ ] Photo upload functionality
- [ ] Advanced rating and review system
- [ ] Map integration
- [ ] Backend API development
- [ ] Database integration
- [ ] Mobile app development
- [ ] Social features and sharing

## 🤝 Contributing

We welcome contributions to improve WaterlooEat! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Add comments for complex functionality
- Test your changes across different browsers
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **HL42** - Project Creator and Lead Developer
- **Community Contributors** - Waterloo food enthusiasts

## 📞 Contact

- **Project Link**: [https://github.com/HL42/WaterlooEat-App](https://github.com/HL42/WaterlooEat-App)
- **Email**: waterlooeat@example.com
- **Issues**: [GitHub Issues](https://github.com/HL42/WaterlooEat-App/issues)

## 🙏 Acknowledgments

- Inspired by Dianping's user-friendly interface
- Apple's design language for modern aesthetics
- Waterloo community for local insights
- Open source community for tools and resources

## 📊 Project Stats

- **Languages**: JavaScript (41.6%), HTML (30.7%), CSS (27.7%)
- **Stars**: 0 (Help us reach our first star! ⭐)
- **Forks**: 0
- **Contributors**: 1
- **Last Updated**: 2024

---

**Made with ❤️ for the Waterloo community**

*Discover, Share, and Enjoy Waterloo's Culinary Scene*