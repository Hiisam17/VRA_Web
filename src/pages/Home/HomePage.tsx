import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import {
    Eye,
    EyeOff,
    CheckCircle,
    ChevronRight,
    Star,
    User,
    User2,
    ArrowRight,
    LogOut,
} from "lucide-react";
import { anh1, anh2, anh3, Manage, dotor, AI, googleLogo } from "../../assets/images";
import RegisterForm, { RegisterFormData } from "../../components/Auth/RegisterForm";

// Define the context type from MainLayout
type MainLayoutContext = {
    showRegisterForm: boolean;
    setShowRegisterForm: (show: boolean) => void;
    scrollToTop: () => void;
    scrollToLoginForm: () => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    user: { username: string; avatar?: string } | null;
    setUser: (user: { username: string; avatar?: string } | null) => void;
};

// Add User type
type UserType = {
    username: string;
    avatar?: string;
};

const HomePage: React.FC = () => {
    // Get context from MainLayout
    const { 
        showRegisterForm, 
        setShowRegisterForm, 
        scrollToTop, 
        scrollToLoginForm,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser
    } = useOutletContext<MainLayoutContext>();

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            quote:
                "Nhờ hệ thống VRA mà tình trạng của con tôi ngày càng tiến triển tốt đẹp hơn. Tôi tin rằng đội ngũ y bác sĩ đã luôn cố gắng hết mình trong việc chăm sóc và điều trị.",
            name: "Dang Quang",
            role: "Phụ huynh",
            gender: "male",
        },
        {
            quote:
                "Sau khi hoàn thành liệu trình điều trị, con trai tôi đã có thể giao tiếp với thê giới bên ngoài. VRA quả là một hệ thống tuyệt vời.",
            name: "Dương Nguyễn",
            role: "Phụ huynh",
            gender: "male",
        },
        {
            quote:
                "Trong quá trình điều trị, tôi luôn có thể theo dõi chi tiết quá trình điều trị của con nhỏ. Đội ngũ y bác sĩ cũng tư vấn rất nhiệt tình và tận tâm.",
            name: "Dung Trần",
            role: "Phụ huynh",
            gender: "female",
        },
        {
            quote:
                "Con tôi rất thích các bài học tương tác trên VRA. Các hoạt động vừa học vừa chơi giúp bé hứng thú và tiếp thu tốt hơn.",
            name: "Minh Anh",
            role: "Phụ huynh",
            gender: "female",
        },
        {
            quote:
                "Tôi đánh giá cao tính năng theo dõi tiến độ học tập. Giúp tôi nắm rõ được sự phát triển của con mỗi ngày.",
            name: "Hoàng Nam",
            role: "Phụ huynh",
            gender: "male",
        },
        {
            quote:
                "Đội ngũ hỗ trợ rất nhiệt tình, luôn sẵn sàng giải đáp thắc mắc và tư vấn kịp thời cho phụ huynh chúng tôi.",
            name: "Thảo Nguyên",
            role: "Phụ huynh",
            gender: "female",
        },
        {
            quote:
                "Các bài học được thiết kế rất khoa học, phù hợp với từng độ tuổi và khả năng của trẻ. Con tôi tiến bộ rõ rệt sau 3 tháng.",
            name: "Văn Hùng",
            role: "Phụ huynh",
            gender: "male",
        },
        {
            quote:
                "Giao diện thân thiện, dễ sử dụng. Tôi có thể dễ dàng theo dõi và hỗ trợ con học tập tại nhà.",
            name: "Hương Giang",
            role: "Phụ huynh",
            gender: "female",
        },
        {
            quote:
                "Các hoạt động tương tác giúp con tôi tự tin hơn trong giao tiếp và hòa nhập tốt hơn với môi trường xung quanh.",
            name: "Quốc Bảo",
            role: "Phụ huynh",
            gender: "male",
        },
        {
            quote:
                "Tôi rất ấn tượng với cách VRA áp dụng công nghệ AI để cá nhân hóa bài học cho từng trẻ. Con tôi học tập hiệu quả hơn nhiều.",
            name: "Mai Linh",
            role: "Phụ huynh",
            gender: "female",
        },
        {
            quote:
                "Các báo cáo chi tiết về tiến độ học tập giúp tôi và giáo viên có thể điều chỉnh phương pháp dạy phù hợp với con.",
            name: "Đức Minh",
            role: "Phụ huynh",
            gender: "male",
        },
        {
            quote:
                "Con tôi rất thích các bài học qua hình ảnh và video. Cách tiếp cận này giúp bé dễ dàng tiếp thu và ghi nhớ kiến thức.",
            name: "Thanh Hà",
            role: "Phụ huynh",
            gender: "female",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 3) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Scroll animation with Intersection Observer
    useEffect(() => {
        const animatedElements = document.querySelectorAll("[data-aos]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("aos-animate");
                    } else {
                        entry.target.classList.remove("aos-animate");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        animatedElements.forEach((element) => {
            observer.observe(element);

            // Set initial animation type from data-aos attribute
            const animationType = element.getAttribute("data-aos");
            if (animationType === "fade-up") {
                element.classList.add("animate-on-scroll-fade-up");
            } else if (animationType === "fade-right") {
                element.classList.add("animate-on-scroll-fade-right");
            } else if (animationType === "fade-left") {
                element.classList.add("animate-on-scroll-fade-left");
            }
        });

        return () => {
            animatedElements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);

    // Add smooth scrolling to anchor links
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a[href^="#"]');

            if (anchor) {
                e.preventDefault();
                const targetId = anchor.getAttribute("href");

                if (targetId) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const headerHeight =
                            document.querySelector(".header")?.clientHeight || 80;
                        const targetTop =
                            targetElement.getBoundingClientRect().top + window.scrollY;

                        window.scrollTo({
                            top: targetTop - headerHeight - 20,
                            behavior: "smooth",
                        });
                    }
                }
            }
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            document.removeEventListener("click", handleAnchorClick);
        };
    }, []);

    const handleRegisterSubmit = (data: RegisterFormData) => {
        // Handle the form submission
        alert("Đăng ký thành công!");
        setShowRegisterForm(false);
    };

    const handleLogin = () => {
        // Here you would typically make an API call to verify credentials
        // For now, we'll just simulate a successful login
        if (username && password) {
            setIsLoggedIn(true);
            setUser({
                username: username,
                avatar: undefined // You can add a default avatar or get it from the API
            });
            setUsername("");
            setPassword("");
        } else {
            alert("Vui lòng nhập đầy đủ thông tin đăng nhập!");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser(null);
    };

    return (
        <div className="flex flex-col items-start bg-white relative">
            <div className="w-full main-content">
                {/* Hero Section */}
                <section className="hero-section w-full flex items-center justify-center overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 w-full py-8 md:py-12">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
                            <div className="w-full md:w-1/2 pt-4 animate-slideUp">
                                <div className="mb-8 md:mb-12">
                                    <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-3 hero-text leading-tight">
                                        Nền tảng học tập
                                        <span className="block mt-2">
                                            cho em trẻ mắc chứng
                                        </span>
                                        <span style={{ color: '#50EDD1' }}>tự kỷ</span>
                                    </h1>
                                </div>

                                <div
                                    className="flex flex-col space-y-3 mb-10"
                                    data-aos="stagger"
                                >
                                    {[
                                        "Tự tin giao tiếp",
                                        "Khơi dậy đam mê khám phá",
                                        "Quản lý dễ dàng, chăm sóc tận tâm",
                                        "Ứng dụng công nghệ, nâng cao chất lượng",
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="inline-flex items-center bg-blue-950 bg-opacity-70 px-5 py-3 rounded-lg transform transition-all duration-500 hover:scale-105 hover:bg-opacity-90"
                                        >
                                            <CheckCircle className="text-white mr-3 h-5 w-5 flex-shrink-0" />
                                            <span className="text-white text-base">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <button
                                        onClick={scrollToLoginForm}
                                        className="btn btn-primary text-white font-bold px-6 py-3 rounded-full flex items-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105"
                                    >
                                        Bắt đầu ngay
                                        <ChevronRight className="ml-1 h-5 w-5" />
                                    </button>
                                    <a
                                        href="#features"
                                        className="btn text-white border-2 border-white font-bold px-6 py-3 rounded-full transition-all duration-500"
                                    >
                                        Tìm hiểu thêm
                                    </a>
                                </div>
                            </div>

                            {/* Right side content */}
                            <div className="w-full md:w-1/2 mt-8 md:mt-0">
                                {isLoggedIn ? (
                                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl animate-slideInRight">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="h-16 w-16 rounded-full bg-primary-color flex items-center justify-center">
                                                <User className="h-8 w-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-white text-xl font-bold">{user?.username}</h3>
                                                <p className="text-blue-100">Tài khoản đã xác thực</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                            <div className="bg-white/5 p-4 rounded-xl">
                                                <h4 className="text-white font-semibold mb-2">Buổi học đã tham gia</h4>
                                                <p className="text-2xl text-white font-bold">12</p>
                                            </div>
                                            <div className="bg-white/5 p-4 rounded-xl">
                                                <h4 className="text-white font-semibold mb-2">Điểm trung bình</h4>
                                                <p className="text-2xl text-white font-bold">8.5</p>
                                            </div>
                                            <div className="bg-white/5 p-4 rounded-xl">
                                                <h4 className="text-white font-semibold mb-2">Thời gian học</h4>
                                                <p className="text-2xl text-white font-bold">24h</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <button
                                                onClick={handleLogout}
                                                className="btn text-white border-2 border-white font-bold px-6 py-2 rounded-full transition-all duration-500 hover:bg-white/10"
                                            >
                                                <LogOut className="h-5 w-5 inline-block mr-2" />
                                                Đăng xuất
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        id="login-form"
                                        className="hero-login-container animate-slideInRight"
                                    >
                                        <div className="bg-white/10 backdrop-blur-lg p-2 md:p-3 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                                            <div className="bg-white p-6 rounded-2xl">
                                                <h2 className="text-gray-900 text-xl font-bold mb-5">
                                                    Học giao tiếp và khám phá thế giới với VRA
                                                </h2>

                                                <div className="space-y-4 mb-5">
                                                    <div className="form-input flex items-center border-2 border-gray-200 rounded-lg px-4 py-3 focus-within:border-primary-color transition-all duration-300">
                                                        <User className="h-5 w-5 text-gray-400 mr-3" />
                                                        <input
                                                            type="text"
                                                            placeholder="Tên tài khoản*"
                                                            value={username}
                                                            onChange={(e) => setUsername(e.target.value)}
                                                            className="flex-1 text-gray-800 bg-transparent border-0 focus:outline-none"
                                                        />
                                                    </div>

                                                    <div className="space-y-2">
                                                        <div className="form-input flex items-center border-2 border-gray-200 rounded-lg px-4 py-3 focus-within:border-primary-color transition-all duration-300">
                                                            <input
                                                                type={showPassword ? "text" : "password"}
                                                                placeholder="Mật khẩu*"
                                                                value={password}
                                                                onChange={(e) =>
                                                                    setPassword(e.target.value)
                                                                }
                                                                className="flex-1 text-gray-800 bg-transparent border-0 focus:outline-none"
                                                            />
                                                            <button
                                                                onClick={() =>
                                                                    setShowPassword(!showPassword)
                                                                }
                                                                className="text-gray-500 hover:text-primary-color transition-colors duration-300"
                                                            >
                                                                {showPassword ? (
                                                                    <Eye className="h-5 w-5" />
                                                                ) : (
                                                                    <EyeOff className="h-5 w-5" />
                                                                )}
                                                            </button>
                                                        </div>
                                                        <div className="text-right">
                                                            <button
                                                                className="text-primary-color text-sm hover:underline transition-all duration-300 border-none bg-transparent cursor-pointer"
                                                                onClick={() => alert("Chức năng đang được phát triển")}
                                                            >
                                                                Quên mật khẩu?
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <button
                                                        className="btn btn-primary text-white font-bold w-full py-3 rounded-lg hover:bg-primary-light transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                                                        onClick={handleLogin}
                                                    >
                                                        Đăng nhập
                                                    </button>
                                                </div>

                                                <div className="mb-5">
                                                    <div className="flex items-center mb-3">
                                                        <span className="text-gray-500 text-sm mr-2">
                                                            Hoặc tiếp tục với
                                                        </span>
                                                        <div className="h-px bg-gray-300 flex-1"></div>
                                                    </div>

                                                    <button className="bg-gray-100 w-full py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 transform hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md">
                                                        <img
                                                            src={googleLogo}
                                                            alt="Google"
                                                            className="h-5 w-5 mr-2"
                                                        />
                                                        <span className="text-gray-700">
                                                            Đăng nhập với Google
                                                        </span>
                                                    </button>
                                                </div>

                                                <div className="text-center mb-4">
                                                    <span className="text-gray-900 text-sm">
                                                        Nếu bạn chưa có tài khoản, vui lòng{" "}
                                                        <button
                                                            className="text-primary-color font-semibold hover:underline transition-all duration-300 border-none bg-transparent cursor-pointer p-0"
                                                            onClick={() => setShowRegisterForm(true)}
                                                        >
                                                            Đăng ký
                                                        </button>
                                                    </span>
                                                </div>

                                                <div className="text-center">
                                                    <div className="h-px bg-gray-300 w-full mb-3"></div>
                                                    <p className="text-gray-700 text-xs">
                                                        Trang này được bảo vệ bởi reCAPTCHA và áp dụng
                                                        Điều khoản sử dụng.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose VRA Section */}
                <section
                    id="features"
                    className="feature-section w-full py-16 lg:py-20 px-6 md:px-8 bg-gradient-to-b from-white to-blue-50"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <span className="inline-block text-primary-color font-semibold mb-2 text-sm tracking-wider uppercase">
                                Tại sao chọn VRA
                            </span>
                            <h2 className="text-primary-color font-bold text-3xl md:text-5xl mb-4 leading-tight">
                                Lý do nên lựa chọn hệ thống VRA
                            </h2>
                            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
                                Chúng tôi cung cấp giải pháp toàn diện, giúp trẻ phát
                                triển kỹ năng và tự tin trong một môi trường học tập
                                tương tác.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    image: anh1,
                                    title: "Khám phá thế giới 3D sống động",
                                    desc: "VRA giúp trẻ tương tác với môi trường ảo, học qua các vật thể và không gian thú vị. Các bài học được thiết kế dưới dạng trò chơi, giúp trẻ vừa học vừa giải trí.",
                                    delay: 0,
                                },
                                {
                                    image: anh2,
                                    title: "Phát triển kỹ năng giao tiếp và xã hội",
                                    desc: "VRA hỗ trợ trẻ tự tin giao tiếp thông qua bài học kỹ năng xã hội. Hệ thống AI gợi ý thông minh giúp trẻ xử lí tình huống khi gặp khó khăn mà không bị áp lực.",
                                    delay: 0.2,
                                },
                                {
                                    image: anh3,
                                    title: "Đồng hành cùng gia đình và giáo viên",
                                    desc: "Giáo viên và phụ huynh có thể quản lý và điều chỉnh lộ trình học cho trẻ qua giao diện web thân thiện, dễ sử dụng.",
                                    delay: 0.4,
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="feature-card bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
                                    data-aos="fade-up"
                                    style={{ animationDelay: `${item.delay}s` }}
                                >
                                    <div className="card-image-container">
                                        <img
                                            src={item.image}
                                            className="w-full h-full object-cover transform transition-all duration-500 hover:scale-110"
                                            alt={item.title}
                                        />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-title">{item.title}</h3>
                                        <p className="card-description">{item.desc}</p>
                                        <button className="group flex items-center text-primary-color font-semibold transform transition-all duration-300 hover:translate-x-2">
                                            <span className="group-hover:underline">
                                                Tìm hiểu thêm
                                            </span>
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="section-features w-full py-16 lg:py-20 px-6 md:px-8 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
                    <div className="max-w-7xl mx-auto">
                        <div
                            className="feature-section-title text-center mb-16"
                            data-aos="fade-up"
                        >
                            <span className="inline-block text-accent-color font-semibold mb-2 text-sm tracking-wider uppercase">
                                Tính năng nổi bật
                            </span>
                            <h2 className="text-white font-bold text-3xl md:text-5xl mb-4 leading-tight">
                                Cùng tìm hiểu khả năng của
                                <span className="text-accent-color block mt-2">
                                    hệ thống VRA
                                </span>
                                dành riêng cho phụ huynh
                            </h2>
                        </div>

                        <div className="feature-row flex flex-col-reverse md:flex-row justify-between items-center md:items-stretch gap-12 md:gap-10">
                            <div
                                className="w-full md:w-1/2 flex flex-col justify-center"
                                data-aos="fade-right"
                            >
                                <span className="inline-block text-accent-color font-semibold mb-2 text-sm tracking-wider uppercase">
                                    Theo dõi học tập
                                </span>
                                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                                    Dễ dàng theo dõi và quản lí tiến độ học tập của trẻ
                                    nhỏ
                                </h3>
                                <p className="text-blue-100 mb-4 text-lg leading-relaxed">
                                    Hệ thống cập nhật tiến độ học tập của trẻ nhỏ theo
                                    thời gian thực, giúp phụ huynh và giáo viên nắm bắt
                                    được sự tiến bộ của trẻ mỗi ngày.
                                </p>
                                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                                    Mỗi khi kết thúc buổi học hệ thống sẽ tự động ghi lại
                                    video quá trình học tập để phụ huynh có thể xem lại và
                                    đánh giá hiệu quả.
                                </p>
                                <div className="flex flex-wrap gap-4 mt-auto">
                                    <button
                                        className="btn btn-primary bg-white text-primary-color px-6 py-3 rounded-full flex items-center hover:bg-blue-50 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                                        onClick={scrollToTop}
                                    >
                                        Tìm hiểu ngay
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2" data-aos="fade-left">
                                <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.03] hover:rotate-1 relative group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-color/30 to-transparent mix-blend-overlay opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                                    <img
                                        src={Manage}
                                        alt="Dashboard"
                                        className="w-full h-auto rounded-2xl"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="bg-primary-color text-white px-6 py-3 rounded-full font-bold shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="feature-row flex flex-col md:flex-row justify-between items-center md:items-stretch gap-12 md:gap-10">
                            <div
                                className="w-full md:w-1/2 order-2 md:order-1"
                                data-aos="fade-right"
                            >
                                <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.03] hover:rotate-1 relative group">
                                    <div className="absolute inset-0 bg-gradient-to-bl from-primary-color/30 to-transparent mix-blend-overlay opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                                    <img
                                        src={dotor}
                                        alt="Doctors Team"
                                        className="w-full h-auto rounded-2xl"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="bg-primary-color text-white px-6 py-3 rounded-full font-bold shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            Gặp đội ngũ chuyên gia
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2"
                                data-aos="fade-left"
                            >
                                <span className="inline-block text-accent-color font-semibold mb-2 text-sm tracking-wider uppercase">
                                    Đội ngũ chuyên môn
                                </span>
                                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                                    Đội ngũ y bác sĩ chất lượng cao
                                </h3>
                                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                                    Đội ngũ y bác sĩ có thâm niên kinh nghiệm trong việc
                                    thăm khám và điều trị cho trẻ tự kỷ, luôn đặt sự phát
                                    triển của trẻ lên hàng đầu.
                                </p>

                                <div className="space-y-4 mb-8">
                                    {[
                                        "Cách truyền đạt kiến thức gần gũi và dễ hiểu.",
                                        "Tận tâm chăm sóc và hỗ trợ trẻ trong quá trình điều trị.",
                                        "Sẵn sàng giải đáp và tư vấn cho phụ huynh.",
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center group"
                                            data-aos="fade-up"
                                            data-aos-delay={idx * 100}
                                        >
                                            <div className="bg-accent-color rounded-full p-1.5 mr-4 transform transition-all duration-300 group-hover:scale-110">
                                                <CheckCircle className="text-primary-color h-5 w-5" />
                                            </div>
                                            <span className="text-blue-100 text-lg">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4 mt-auto">
                                    <button
                                        className="btn btn-primary bg-white text-primary-color px-6 py-3 rounded-full flex items-center hover:bg-blue-50 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                                        onClick={scrollToTop}
                                    >
                                        Tìm hiểu ngay
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="feature-row flex flex-col-reverse md:flex-row justify-between items-center md:items-stretch gap-12 md:gap-10">
                            <div
                                className="w-full md:w-1/2 flex flex-col justify-center"
                                data-aos="fade-right"
                            >
                                <span className="inline-block text-accent-color font-semibold mb-2 text-sm tracking-wider uppercase">
                                    Công nghệ tiên tiến
                                </span>
                                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                                    Liên tục cập nhật và ứng dụng công nghệ cao
                                </h3>
                                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                                    Sản phẩm sử dụng AI để cá nhân hóa nội dung và lộ
                                    trình học tập theo nhu cầu của từng người dùng. Hệ
                                    thống có khả năng phân tích hành vi, ghi nhận tiến độ
                                    học và tự động gợi ý những bài học hoặc bài tập phù
                                    hợp. Điều này đảm bảo rằng mỗi học sinh đều được học
                                    tập theo cách hiệu quả nhất, giúp tối ưu hóa khả năng
                                    tiếp thu và phát triển.
                                </p>
                                <div className="flex flex-wrap gap-4 mt-auto">
                                    <button
                                        className="btn btn-primary bg-white text-primary-color px-6 py-3 rounded-full flex items-center hover:bg-blue-50 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                                        onClick={scrollToTop}
                                    >
                                        Tìm hiểu ngay
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2" data-aos="fade-left">
                                <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.03] hover:rotate-1 relative group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-color/30 to-transparent mix-blend-overlay opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                                    <img
                                        src={AI}
                                        alt="Technology"
                                        className="w-full h-auto rounded-2xl"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="bg-primary-color text-white px-6 py-3 rounded-full font-bold shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            Khám phá công nghệ
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="w-full py-16 lg:py-20 px-6 md:px-8 bg-gradient-to-b from-blue-50 to-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-14" data-aos="fade-up">
                            <span className="inline-block text-primary-color font-semibold mb-2 text-sm tracking-wider uppercase">
                                Đánh giá từ người dùng
                            </span>
                            <h2 className="text-primary-color font-bold text-3xl md:text-5xl mb-4 leading-tight">
                                Phụ huynh nói gì về chúng tôi
                            </h2>
                            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
                                Những phản hồi từ phụ huynh giúp chúng tôi không ngừng
                                hoàn thiện dịch vụ để mang đến trải nghiệm tốt nhất cho
                                trẻ nhỏ.
                            </p>
                        </div>

                        <div
                            className="testimonial-slider relative overflow-hidden rounded-xl px-4"
                            data-aos="fade-up"
                        >
                            <div
                                className="flex gap-6 transition-all duration-700 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentTestimonial * 33.33
                                        }%)`,
                                }}
                            >
                                {testimonials.map((item, index) => (
                                    <div
                                        key={index}
                                        className="testimonial-card min-w-[280px] md:min-w-[350px]"
                                    >
                                        <div className="flex space-x-1 mb-4">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    className="text-yellow-400 h-5 w-5 fill-current"
                                                    fill="currentColor"
                                                />
                                            ))}
                                        </div>
                                        <p className="testimonial-quote">{item.quote}</p>
                                        <div className="flex justify-between items-center mt-auto">
                                            <div>
                                                <h4 className="font-bold text-primary-color text-lg">
                                                    {item.name}
                                                </h4>
                                                <p className="text-gray-500">{item.role}</p>
                                            </div>
                                            <div
                                                className={`h-12 w-12 rounded-full flex items-center justify-center ${item.gender === "male"
                                                    ? "bg-blue-100"
                                                    : "bg-pink-100"
                                                    }`}
                                            >
                                                {item.gender === "male" ? (
                                                    <User className={`h-7 w-7 text-blue-600`} />
                                                ) : (
                                                    <User2 className={`h-7 w-7 text-pink-600`} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center mt-8 space-x-3">
                            {[0, 3, 6, 9].map((index) => (
                                <button
                                    key={index}
                                    className={`h-3 w-3 rounded-full transition-all duration-300 ${currentTestimonial === index
                                        ? "bg-primary-color w-10"
                                        : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    onClick={() => setCurrentTestimonial(index)}
                                />
                            ))}
                        </div>

                        <div className="flex justify-center mt-12">
                            <button className="btn btn-primary text-white px-8 py-3 rounded-full flex items-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                Xem tất cả đánh giá
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </section>

                <RegisterForm
                    isOpen={showRegisterForm}
                    onClose={() => setShowRegisterForm(false)}
                    onSubmit={handleRegisterSubmit}
                />
            </div>
        </div>
    );
};

export default HomePage;
