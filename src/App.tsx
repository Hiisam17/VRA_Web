import React, { useState } from "react";
import { Eye, EyeOff, CheckCircle, ChevronRight, Star, User, User2, X } from "lucide-react";
import logo from "./img/logo.png";
import Logo1 from "./img/Logo1.png";
import anh1 from "./img/anh1.png";
import anh2 from "./img/anh2.jpg";
import anh3 from "./img/anh3.jpg";
import Manage from "./img/Manage.jpg";
import dotor from "./img/dotor.jpg";
import AI from "./img/AI.png";
import googleLogo from "./img/LogoGoogle.webp";

export default function App() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToLoginForm = () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const style = {
    backgroundColor: "#19395E",
    color: "#fff",
  };

  return (
    <div className="flex flex-col items-start bg-white relative">
      {/* Header Navigation */}
      <div className="flex items-center w-full px-20 py-4 justify-between">
        <div className="flex items-center space-x-10">
          <img
            src={Logo1}
            alt="VRA Logo"
            className="h-16 object-contain"
          />
          <div className="flex space-x-8">
            <button className="text-black font-bold text-2xl px-4 py-2 rounded hover:bg-gray-100 transition-all duration-200">Trang chủ</button>
            <button className="text-black font-bold text-2xl px-4 py-2 rounded hover:bg-gray-100 transition-all duration-200">
              Danh sách học sinh
            </button>
            <button className="text-black font-bold text-2xl px-4 py-2 rounded hover:bg-gray-100 transition-all duration-200">
              Quản lý cấu hình cá nhân hóa
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button 
            className="text-blue-600 text-2xl font-bold px-4 py-2 rounded hover:bg-blue-50 transition-all duration-200"
            onClick={scrollToLoginForm}
          >
            Đăng nhập
          </button>
          <button 
            className="bg-red-500 text-white font-bold text-2xl px-6 py-2 rounded hover:bg-red-600 transition-all duration-200"
            onClick={() => setShowRegisterForm(true)}
          >
            Đăng ký
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full bg-blue-900 py-8 px-20" style={style}>
        <div className="flex items-start justify-between">
          <div className="w-1/2 pt-12">
            <div className="mb-16">
              <h1 className="text-white font-bold text-4xl mb-2">
                Nền tảng học tập
              </h1>
              <h1 className="text-white font-bold text-4xl mb-2">
                cho em trẻ mắc chứng
              </h1>
              <h1 className="text-teal-300 font-bold text-4xl">tự kỷ</h1>
            </div>

            <div className="flex flex-col space-y-3 mb-8">
              <div className="inline-flex items-center bg-blue-950 px-6 py-4 rounded">
                <CheckCircle className="text-white mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-white text-base">Tự tin giao tiếp</span>
              </div>
              <div className="inline-flex items-center bg-blue-950 px-6 py-4 rounded">
                <CheckCircle className="text-white mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-white text-base">Khơi dậy đam mê khám phá</span>
              </div>
              <div className="inline-flex items-center bg-blue-950 px-6 py-4 rounded">
                <CheckCircle className="text-white mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-white text-base">Quản lý dễ dàng, chăm sóc tận tâm</span>
              </div>
              <div className="inline-flex items-center bg-blue-950 px-6 py-4 rounded">
                <CheckCircle className="text-white mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-white text-base">Ứng dụng công nghệ, nâng cao chất lượng chăm sóc</span>
              </div>
            </div>
          </div>

          {/* Login Card */}
          <div id="login-form" className="bg-blue-600 p-8 rounded-3xl shadow-lg">
            <div className="bg-white p-8 rounded-3xl">
              <h2 className="text-gray-900 text-lg font-bold mb-6">
                Học giao tiếp và khám phá thế giới với VRA
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                  <input
                    type="text"
                    placeholder="Tên tài khoản*"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="flex-1 text-gray-800 bg-transparent border-0 focus:outline-none text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Mật khẩu*"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="flex-1 text-gray-800 bg-transparent border-0 focus:outline-none text-sm"
                    />
                    <button 
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <Eye className="h-5 w-5" />
                      ) : (
                        <EyeOff className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <div className="text-right">
                    <a href="#" className="text-blue-600 text-xs">
                      Quên mật khẩu?
                    </a>
                  </div>
                </div>

                <button
                  className="bg-blue-600 text-white font-bold text-sm w-full py-2 rounded hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
                  onClick={() => alert("Đăng nhập thành công!")}
                >
                  Đăng nhập
                </button>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <span className="text-gray-500 text-xs mr-2">
                    Hoặc tiếp tục với
                  </span>
                  <div className="h-px bg-gray-300 flex-1"></div>
                </div>

                <button className="bg-gray-100 w-full py-2 rounded flex items-center justify-center hover:bg-gray-200 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md">
                  <img
                    src={googleLogo}
                    alt="Google"
                    className="h-5 w-5 mr-2"
                  />
                  <span className="text-gray-700">Đăng nhập với Google</span>
                </button>
              </div>

              <div className="text-center mb-6">
                <span className="text-gray-900 text-xs">
                  Nếu bạn chưa có tài khoản, vui lòng{" "}
                  <a 
                    href="#" 
                    className="text-blue-600"
                    onClick={() => setShowRegisterForm(true)}
                  >
                    Đăng ký
                  </a>
                </span>
              </div>

              <div className="text-center">
                <div className="h-px bg-gray-300 w-full mb-3"></div>
                <p className="text-gray-700 text-xs">
                  Trang này được bảo vệ bởi reCAPTCHA và áp dụng Điều khoản sử
                  dụng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose VRA Section */}
      <div className="w-full py-16 px-20 text-center">
        <h2 className="text-blue-900 font-bold text-4xl mb-12">
          Lý do nên lựa chọn hệ thống VRA
        </h2>

        <div className="flex gap-4">
          {[
            {
              image: anh1,
              title: "Khám phá thế giới 3D sống động",
              desc: "VRA giúp trẻ tương tác với môi trường ảo, học qua các vật thể và không gian thú vị. Đồng thời, các bài học được thiết kế dưới dạng trò chơi, giúp trẻ vừa học vừa giải trí.",
            },
            {
              image: anh2,
              title: "Phát triển kỹ năng giao tiếp và xã hội",
              desc: "VRA hỗ trợ trẻ tự tin giao tiếp thông qua bài học kỹ năng xã hội. Cùng vời hệ thống AI gợi ý thông minh giúp trẻ xử lí tình huống khi gặp khó khăn mà không bị áp lực",
            },
            {
              image: anh3,
              title: "Đồng hành cùng gia đình và giáo viên",
              desc: "Giáo viên và phụ huynh có thể quản lý và điều chỉnh lộ trình học cho trẻ qua giao diện web.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex-1 relative rounded-xl overflow-hidden bg-blue-50"
            >
              <div className="p-6">
                <img
                  src={item.image}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  alt={item.title}
                />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-800 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-blue-900 py-16 px-20" style={style}>
        <h2 className="text-white font-bold text-4xl mb-6">
          Cùng tìm hiểu khả năng của
          <span className="text-teal-300 block">hệ thống VRA</span>
          dành riêng cho phụ huynh?
        </h2>

        <div className="flex justify-between items-center my-16">
          <div className="w-1/2 pr-16">
            <h3 className="text-white text-3xl font-bold mb-6">
              Dễ dàng theo dõi và quản lí tiến độ học tập của trẻ nhỏ
            </h3>
            <p className="text-white mb-4">
              Hệ thống cập nhật tiến độ học tập của trẻ nhỏ theo thời gian thực.
            </p>
            <p className="text-white mb-10">
              Mỗi khi kết thúc buổi học hệ thống sẽ tự động ghi lại video quá
              trình học tập của trẻ.
            </p>
            <button 
              className="bg-blue-600 text-white px-6 py-3 rounded flex items-center hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
              onClick={scrollToTop}
            >
              Tìm hiểu ngay
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="w-1/2">
            <img
              src={Manage}
              alt="Dashboard"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="flex justify-between items-center my-16">
          <div className="w-1/2 pr-16">
            <h3 className="text-white text-3xl font-bold mb-6">
              Đội ngũ y bác sĩ chất lượng cao
            </h3>
            <p className="text-white mb-8">
              Đội ngũ y bác sĩ có thâm niên kinh nghiệm trong việc thăm khám và
              điều trị cho trẻ tự kỷ.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="text-white mr-2 h-4 w-4" />
                <span className="text-white">
                  Cách truyền đạt kiến thức gần gũi và dễ hiểu.
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-white mr-2 h-4 w-4" />
                <span className="text-white">
                  Tận tâm chăm sóc và hỗ trợ trẻ trong quá trình điều trị.
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-white mr-2 h-4 w-4" />
                <span className="text-white">
                  Sẵn sàng giải đáp và tư vấn cho phụ huynh.
                </span>
              </div>
            </div>

            <button 
              className="bg-blue-600 text-white px-6 py-3 rounded flex items-center hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
              onClick={scrollToTop}
            >
              Tìm hiểu ngay
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="w-1/2">
            <img
              src={dotor}
              alt="Doctors Team"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="flex justify-between items-center my-16">
          <div className="w-1/2">
            <img
              src={AI}
              alt="Technology"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="w-1/2 pl-16">
            <h3 className="text-white text-3xl font-bold mb-6">
              Liên tục cập nhật và ứng dụng công nghệ cao
            </h3>
            <p className="text-white mb-10">
              Sản phẩm sử dụng AI để cá nhân hóa nội dung và lộ trình học tập
              theo nhu cầu của từng người dùng. Hệ thống có khả năng phân tích
              hành vi, ghi nhận tiến độ học và tự động gợi ý những bài học hoặc
              bài tập phù hợp. Điều này đảm bảo rằng mỗi học sinh đều được học
              tập theo cách hiệu quả nhất, giúp tối ưu hóa khả năng tiếp thu và
              phát triển.
            </p>
            <button 
              className="bg-blue-600 text-white px-6 py-3 rounded flex items-center hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
              onClick={scrollToTop}
            >
              Tìm hiểu ngay
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full bg-blue-50 py-16 px-20">
        <h2 className="text-blue-900 font-bold text-4xl text-center mb-12">
          Phụ huynh nói gì về chúng tôi
        </h2>

        <div className="flex gap-8">
          {[
            {
              quote:
                "Nhờ hệ thống VRA mà tình trạng của con tôi ngày càng tiến triển tốt đẹp hơn. Tôi tin rằng đội ngũ y bác sĩ đã luôn cố gắng hết mình trong việc chăm sóc và điều trị.",
              name: "Dang Quang",
              role: "Phụ huynh",
              gender: "male"
            },
            {
              quote:
                "Sau khi hoàn thành liệu trình điều trị, con trai tôi đã có thể giao tiếp với thê giới bên ngoài. VRA quả là một hệ thống tuyệt vời.",
              name: "Dương Nguyễn",
              role: "Phụ huynh",
              gender: "male"
            },
            {
              quote:
                "Trong quá trình điều trị, tôi luôn có thể theo dõi chi tiết quá trình điều trị của con nhỏ. Đội ngũ y bác sĩ cũng tư vấn rất nhiệt tình và tận tâm.",
              name: "Dung Trần",
              role: "Phụ huynh",
              gender: "female"
            },
          ].map((item, index) => (
            <div key={index} className="flex-1 bg-white p-8 rounded-xl">
              <Star className="text-yellow-500 h-5 w-5 mb-3" />
              <p className="text-gray-800 mb-8">{item.quote}</p>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  {item.gender === "male" ? (
                    <User className="h-8 w-8 text-blue-600" />
                  ) : (
                    <User2 className="h-8 w-8 text-pink-600" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="w-1/2 h-2 bg-gray-200 rounded-full">
            <div className="w-1/4 h-full bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-white pt-16">
        <div className="px-20 mb-12">
          <div className="flex">
            <div className="w-1/4 pr-8">
              <img
                src= {Logo1}
                alt="VRA Logo"
                className="mb-4"
              />
              <p className="text-gray-700 mb-4">
                VRA là một hệ thống hỗ trợ can thiệp sớm cho trẻ tự kỷ thông qua
                trải nghiệm thực tế ảo. Web VRA cho phụ huynh/giáo viên quản lý
                quá trình học của trẻ
              </p>
              
            </div>

            <div className="w-1/4 px-4">
              <h3 className="text-blue-600 font-bold mb-6">
                Chăm sóc khách hàng
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-800">
                    Hướng dẫn thanh toán
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800">
                    Điều kiện giao dịch chung
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800">
                    Quy trình sử dụng dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800">
                    Chính sách bảo hành
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800">
                    Chính sách hoàn trả hàng
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800">
                    Chính sách bảo mật
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-1/4 px-4">
              <h3 className="text-blue-600 font-bold mb-6">Tính năng</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-800">
                    Xem thông tin trẻ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800">
                    Quản lý danh sách
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800">
                    Cấu hình bài học
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-1/4 px-4">
              <h3 className="text-blue-600 font-bold mb-6">Về chúng tôi</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-800">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800">
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800">
                    Trợ giúp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Register Form Modal */}
      {showRegisterForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-3xl w-[500px] relative border-4 border-blue-600 shadow-2xl">
            <button 
              onClick={() => setShowRegisterForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-gray-900 text-2xl font-bold mb-6 text-center">
              Đăng ký tài khoản
            </h2>

            <div className="space-y-4">
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Họ và tên*"
                  value={registerData.fullName}
                  onChange={handleRegisterChange}
                  className="flex-1 text-gray-800 bg-transparent border-0 focus:outline-none text-sm"
                />
              </div>

              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  className="flex-1 text-gray-800 bg-transparent border-0 focus:outline-none text-sm"
                />
              </div>

              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại*"
                  value={registerData.phone}
                  onChange={handleRegisterChange}
                  className="flex-1 text-gray-800 bg-transparent border-0 focus:outline-none text-sm"
                />
              </div>

              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Mật khẩu*"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  className="flex-1 text-gray-800 bg-transparent border-0 focus:outline-none text-sm"
                />
              </div>

              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Xác nhận mật khẩu*"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                  className="flex-1 text-gray-800 bg-transparent border-0 focus:outline-none text-sm"
                />
              </div>

              <button
                className="bg-blue-600 text-white font-bold text-sm w-full py-2 rounded hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
                onClick={() => {
                  // Xử lý đăng ký ở đây
                  alert("Đăng ký thành công!");
                  setShowRegisterForm(false);
                }}
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full h-12 bg-gray-900"></div>
    </div>
  );
}
