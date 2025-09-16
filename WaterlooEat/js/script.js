// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 加载屏幕功能
    initLoadingScreen();
    
    // 滚动动画功能
    initScrollAnimations();
    
    // 动画特色功能
    initAnimatedFeatures();
    
    // Near Me 功能
    initNearMeFeature();
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const searchSection = document.querySelector('.search-section');
    
    // 搜索栏滚动隐藏/显示功能
    let lastScrollTop = 0;
    let isSearchHidden = false;
    const scrollThreshold = 100; // 滚动100px后开始隐藏搜索栏
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 导航栏效果
        if (currentScrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        // 搜索栏隐藏/显示逻辑
        if (searchSection) {
            if (currentScrollTop > scrollThreshold) {
                // 向下滚动 - 隐藏搜索栏
                if (currentScrollTop > lastScrollTop && !isSearchHidden) {
                    searchSection.classList.add('hidden');
                    isSearchHidden = true;
                }
                // 向上滚动 - 显示搜索栏
                else if (currentScrollTop < lastScrollTop && isSearchHidden) {
                    searchSection.classList.remove('hidden');
                    isSearchHidden = false;
                }
            } else {
                // 在顶部区域 - 确保搜索栏显示
                if (isSearchHidden) {
                    searchSection.classList.remove('hidden');
                    isSearchHidden = false;
                }
            }
        }
        
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });
    
    // 平滑滚动到锚点
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 60; // 考虑固定导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 搜索功能
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-box input');
    
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            performSearch(searchTerm);
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value.trim();
            if (searchTerm) {
                performSearch(searchTerm);
            }
        }
    });
    
    // 搜索功能实现
    function performSearch(term) {
        // 这里可以添加实际的搜索逻辑
        console.log('搜索:', term);
        
        // 简单的搜索反馈
        const searchBox = document.querySelector('.search-box');
        searchBox.style.borderColor = '#ff6b35';
        searchBox.style.boxShadow = '0 0 0 3px rgba(255, 107, 53, 0.2)';
        
        setTimeout(() => {
            searchBox.style.borderColor = '#d2d2d7';
            searchBox.style.boxShadow = 'none';
        }, 1000);
        
        // 可以在这里添加实际的搜索逻辑，比如过滤餐厅卡片
        filterRestaurants(term);
    }
    
    // 餐厅过滤功能
    function filterRestaurants(searchTerm) {
        const restaurantCards = document.querySelectorAll('.restaurant-card');
        const term = searchTerm.toLowerCase();
        
        restaurantCards.forEach(card => {
            const restaurantName = card.querySelector('h3').textContent.toLowerCase();
            const cuisine = card.querySelector('.cuisine').textContent.toLowerCase();
            const location = card.querySelector('.location').textContent.toLowerCase();
            
            if (restaurantName.includes(term) || 
                cuisine.includes(term) || 
                location.includes(term)) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease-in-out';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // 添加淡入动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    // 卡片悬停效果增强
    const cards = document.querySelectorAll('.restaurant-card, .review-card, .feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 评分星星交互
    const ratingStars = document.querySelectorAll('.review-rating');
    
    ratingStars.forEach(rating => {
        const stars = rating.querySelectorAll('i');
        stars.forEach((star, index) => {
            star.addEventListener('click', function() {
                // 这里可以添加评分功能
                console.log('评分:', index + 1);
            });
        });
    });
    
    // 图片懒加载
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                
                img.onload = function() {
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
    
    // 移动端菜单切换（如果需要的话）
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.style.display = 'none';
    
    // 添加移动端菜单样式
    const mobileStyle = document.createElement('style');
    mobileStyle.textContent = `
        .mobile-menu-btn {
            background: none;
            border: none;
            font-size: 24px;
            color: #1d1d1f;
            cursor: pointer;
            padding: 10px;
        }
        
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block !important;
            }
        }
    `;
    document.head.appendChild(mobileStyle);
    
    // 添加移动端菜单按钮到导航栏
    const navContainer = document.querySelector('.nav-container');
    navContainer.appendChild(mobileMenuBtn);
    
    // 移动端菜单功能
    mobileMenuBtn.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // 窗口大小改变时重置菜单
    window.addEventListener('resize', function() {
        const navMenu = document.querySelector('.nav-menu');
        if (window.innerWidth > 768) {
            navMenu.style.display = 'flex';
        } else {
            navMenu.style.display = 'none';
        }
    });
    
    // 初始化时隐藏移动端菜单
    if (window.innerWidth <= 768) {
        document.querySelector('.nav-menu').style.display = 'none';
    }
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // 滚动到顶部按钮
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #ff6b35;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // 显示/隐藏回到顶部按钮
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // 回到顶部功能
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 悬停效果
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 6px 16px rgba(255, 107, 53, 0.4)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(255, 107, 53, 0.3)';
    });
});

// 工具函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 节流函数
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 加载屏幕功能
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressFill = document.querySelector('.progress-fill');
    const loadingPercentage = document.querySelector('.loading-percentage');
    
    if (!loadingScreen) return;
    
    // 添加加载类到body
    document.body.classList.add('loading');
    
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        progressFill.style.width = progress + '%';
        loadingPercentage.textContent = Math.round(progress) + '%';
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                document.body.classList.remove('loading');
            }, 500);
        }
    }, 100);
}

// 滚动动画功能
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, delay * 500); // Reduced from 1000ms to 500ms
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// 动画特色功能
function initAnimatedFeatures() {
    const featureItems = document.querySelectorAll('.feature-item');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    
    if (featureItems.length === 0) return;
    
    // 自动轮播功能
    function showFeature(index) {
        featureItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }
    
    // 指示器点击事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showFeature(currentIndex);
        });
    });
    
    // 自动轮播
    setInterval(() => {
        currentIndex = (currentIndex + 1) % featureItems.length;
        showFeature(currentIndex);
    }, 4000);
    
    // 鼠标悬停暂停轮播
    const featureContainer = document.querySelector('.animated-features-container');
    let autoPlayInterval;
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % featureItems.length;
            showFeature(currentIndex);
        }, 4000);
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    if (featureContainer) {
        featureContainer.addEventListener('mouseenter', stopAutoPlay);
        featureContainer.addEventListener('mouseleave', startAutoPlay);
        startAutoPlay();
    }
}

// Near Me 功能
function initNearMeFeature() {
    const nearMeLink = document.getElementById('near-me-link');
    const nearMeLoading = document.getElementById('near-me-loading');
    
    if (!nearMeLink || !nearMeLoading) return;
    
    nearMeLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 显示加载屏幕
        nearMeLoading.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // 模拟加载时间，然后重定向到 Google Maps
        setTimeout(() => {
            // 重定向到 Google Maps Waterloo
            window.open('https://www.google.com/maps/search/restaurants+near+Waterloo,+ON,+Canada', '_blank');
            
            // 隐藏加载屏幕
            nearMeLoading.classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 2500); // 2.5秒加载时间
    });
}
