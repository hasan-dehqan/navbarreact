import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">مزه خونگی</div>
            <ul className="nav-links">
                <li><a href="#recipe-of-the-day">دستور پخت روز</a></li>
                <li><a href="#quick-easy">سریع و آسان</a></li>
                <li><a href="#vegan-plant-based">وگان و گیاهی</a></li>
                <li><a href="#cooking-challenges">چالش‌های آشپزی</a></li>
                <li><a href="#seasonal-specials">ویژه‌های فصلی</a></li>
                <li><a href="#video-tutorials">آموزش‌های ویدیویی</a></li>
                <li><a href="#user-submissions">ارسال‌های کاربران</a></li>
                <li><a href="#cooking-hacks">ترفندهای آشپزی</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;



// import React from 'react';
// import './Navbar.css'; // فایل CSS برای استایل

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">مزه خونگی</div>
//       <ul className="nav-items">
//         <li className="nav-item">دستور پخت روز</li>
//         <li className="nav-item">سریع و آسان</li>
//         <li className="nav-item">وگان و گیاهی</li>
//         <li className="nav-item">چالش‌های آشپزی</li>
//         <li className="nav-item">ویژه‌های فصلی</li>
//         <li className="nav-item">آموزش‌های ویدیویی</li>
//         <li className="nav-item">ارسال‌های کاربران</li>
//         <li className="nav-item">ترفندهای آشپزی</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

