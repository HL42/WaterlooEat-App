// 多语言翻译数据
const translations = {
    en: {
        // 导航栏
        site_name: "WaterlooEat",
        nav_home: "Home",
        nav_restaurants: "Restaurants",
        nav_reviews: "Reviews",
        nav_about: "About",
        btn_login: "Login",
        btn_register: "Register",
        
        // 英雄区域
        hero_title: "Discover Waterloo's Most Delicious Food",
        hero_subtitle: "Share your dining experiences and explore hidden culinary treasures in the city",
        search_placeholder: "Search restaurants, food, or locations...",
        search_btn: "Search",
        today_recommendation: "Today's Recommendation",
        best_restaurant: "Best Restaurant in Waterloo",
        
        // 功能特色
        features_title: "Why Choose WaterlooEat",
        feature_share_title: "Share Food",
        feature_share_desc: "Upload your food photos and share authentic dining experiences",
        feature_reviews_title: "Real Reviews",
        feature_reviews_desc: "Based on authentic user reviews, we recommend the best restaurants for you",
        feature_local_title: "Local Recommendations",
        feature_local_desc: "Focused on the Waterloo area, discover local culinary treasures",
        
        // 餐厅
        restaurants_title: "Popular Restaurants",
        cuisine_western: "Western · Modern Cuisine",
        cuisine_japanese: "Japanese · Sushi",
        cuisine_asian: "Asian · Bao",
        location_downtown: "Waterloo Downtown",
        location_university: "Near University of Waterloo",
        location_mall: "Waterloo Shopping Center",
        
        // 评价
        reviews_title: "Latest Reviews",
        user_zhang: "Zhang",
        user_li: "Li",
        time_2h: "2 hours ago",
        time_1d: "1 day ago",
        review_pasta: "The pasta at this restaurant is absolutely delicious! The atmosphere is great and the service is excellent. Highly recommend to friends who love Italian food.",
        review_sushi: "The sushi is very fresh and reasonably priced. Although the restaurant is small, it has a great Japanese atmosphere. Recommend the salmon sushi!",
        
        // 页脚
        footer_tagline: "Discover Waterloo's Most Delicious Food",
        footer_quick_links: "Quick Links",
        footer_contact: "Contact Us",
        footer_copyright: "© 2024 WaterlooEat. All rights reserved."
    },
    
    zh: {
        // 导航栏
        site_name: "WaterlooEat",
        nav_home: "首页",
        nav_restaurants: "餐厅",
        nav_reviews: "评价",
        nav_about: "关于",
        btn_login: "登录",
        btn_register: "注册",
        
        // 英雄区域
        hero_title: "发现滑铁卢最美味的食物",
        hero_subtitle: "分享你的美食体验，探索城市中的隐藏宝藏",
        search_placeholder: "搜索餐厅、美食或地点...",
        search_btn: "搜索",
        today_recommendation: "今日推荐",
        best_restaurant: "滑铁卢最佳餐厅",
        
        // 功能特色
        features_title: "为什么选择 WaterlooEat",
        feature_share_title: "分享美食",
        feature_share_desc: "上传你的美食照片，分享真实的用餐体验",
        feature_reviews_title: "真实评价",
        feature_reviews_desc: "基于真实用户评价，为你推荐最棒的餐厅",
        feature_local_title: "本地推荐",
        feature_local_desc: "专注于滑铁卢地区，发现本地美食宝藏",
        
        // 餐厅
        restaurants_title: "热门餐厅",
        cuisine_western: "西餐 · 现代料理",
        cuisine_japanese: "日料 · 寿司",
        cuisine_asian: "亚洲料理 · 包子",
        location_downtown: "滑铁卢市中心",
        location_university: "滑铁卢大学附近",
        location_mall: "滑铁卢购物中心",
        
        // 评价
        reviews_title: "最新评价",
        user_zhang: "张同学",
        user_li: "李同学",
        time_2h: "2小时前",
        time_1d: "1天前",
        review_pasta: "这家餐厅的意面真的太好吃了！环境也很棒，服务态度很好。强烈推荐给喜欢意大利菜的朋友们。",
        review_sushi: "寿司很新鲜，价格也合理。虽然店面不大，但是很有日式氛围。推荐三文鱼寿司！",
        
        // 页脚
        footer_tagline: "发现滑铁卢最美味的食物",
        footer_quick_links: "快速链接",
        footer_contact: "联系我们",
        footer_copyright: "© 2024 WaterlooEat. 版权所有。"
    }
};

// 语言切换功能
class LanguageSwitcher {
    constructor() {
        this.currentLang = 'en'; // 默认英语
        this.init();
    }
    
    init() {
        // 从本地存储获取语言设置
        const savedLang = localStorage.getItem('waterlooeat_lang');
        if (savedLang && translations[savedLang]) {
            this.currentLang = savedLang;
        }
        
        // 绑定语言切换按钮事件
        this.bindLanguageButtons();
        
        // 初始化页面语言
        this.updateLanguage();
        
        // 初始化按钮状态和滑动位置
        this.updateLanguageButtons();
    }
    
    bindLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const lang = e.currentTarget.getAttribute('data-lang');
                this.switchLanguage(lang);
            });
        });
    }
    
    switchLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('waterlooeat_lang', lang);
            this.updateLanguage();
            this.updateLanguageButtons();
        }
    }
    
    updateLanguage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[this.currentLang][key]) {
                element.textContent = translations[this.currentLang][key];
            }
        });
        
        // 更新placeholder属性
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[this.currentLang][key]) {
                element.placeholder = translations[this.currentLang][key];
            }
        });
    }
    
    updateLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        const languageSwitcher = document.querySelector('.language-switcher');
        
        langButtons.forEach(button => {
            const lang = button.getAttribute('data-lang');
            if (lang === this.currentLang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // 更新滑动指示器位置
        if (languageSwitcher) {
            if (this.currentLang === 'zh') {
                languageSwitcher.classList.add('slide-right');
            } else {
                languageSwitcher.classList.remove('slide-right');
            }
        }
    }
}

// 页面加载完成后初始化语言切换器
document.addEventListener('DOMContentLoaded', function() {
    new LanguageSwitcher();
});
