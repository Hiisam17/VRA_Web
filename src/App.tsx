import React, { useState } from "react";
import { Eye, CheckCircle, ChevronRight, Star } from "lucide-react";

export default function App() {
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-start bg-white relative">
      {/* Header Navigation */}
      <div className="flex items-center w-full px-20 py-4 justify-between">
        <div className="flex items-center space-x-10">
          <img
            src="/api/placeholder/210/61"
            alt="VRA Logo"
            className="h-16 object-contain"
          />
          <div className="flex space-x-8">
            <span className="text-black font-bold text-2xl">Trang chủ</span>
            <span className="text-black font-bold text-2xl">Danh sách học sinh</span>
            <span className="text-black font-bold text-2xl">Quản lý cấu hình cá nhân hóa</span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-blue-600 text-2xl font-bold">Đăng nhập</span>
          <button className="bg-red-500 text-white font-bold text-2xl px-6 py-2 rounded">Đăng ký</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full bg-blue-900 py-8 px-20">
        <div className="flex items-start justify-between">
          <div className="w-1/2 pt-12">
            <div className="mb-16">
              <h1 className="text-white font-bold text-4xl mb-2">
                Nền tảng học tập
              </h1>
              <h1 className="text-white font-bold text-4xl mb-2">
                cho em trẻ mắc chứng
              </h1>
              <h1 className="text-teal-300 font-bold text-4xl">
                tự kỷ
              </h1>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center bg-blue-950 px-6 py-4 rounded">
                <CheckCircle className="text-white mr-2 h-4 w-4" />
                <span className="text-white text-base">Tự tin giao tiếp</span>
              </div>
              <div className="flex items-center bg-blue-950 px-6 py-4 rounded">
                <CheckCircle className="text-white mr-2 h-4 w-4" />
                <span className="text-white text-base">Khơi dậy đam mê khám phá</span>
              </div>
              <div className="flex items-center bg-blue-950 px-6 py-4 rounded">
                <CheckCircle className="text-white mr-2 h-4 w-4" />
                <span className="text-white text-base">Quản lý dễ dàng, chăm sóc tận tâm</span>
              </div>
              <div className="flex items-center bg-blue-950 px-6 py-4 rounded">
                <CheckCircle className="text-white mr-2 h-4 w-4" />
                <span className="text-white text-base">Ứng dụng công nghệ, nâng cao chất lượng chăm sóc</span>
              </div>
            </div>
          </div>

          {/* Login Card */}
          <div className="bg-blue-600 p-12 rounded-3xl shadow-lg">
            <div className="bg-white p-12 rounded-3xl">
              <h2 className="text-gray-900 text-xl font-bold mb-8">
                Học giao tiếp và khám phá thế giới với VRA
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="border border-gray-300 rounded px-4 py-2">
                  <span className="text-gray-800 text-base">Tên tài khoản*</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center border border-gray-300 rounded px-4 py-2">
                    <input
                      type="password"
                      placeholder="Mật khẩu*"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="flex-1 text-gray-800 bg-transparent border-0 focus:outline-none"
                    />
                    <Eye className="h-6 w-6 text-gray-500" />
                  </div>
                  <div className="text-right">
                    <a href="#" className="text-blue-600 text-sm">Quên mật khẩu?</a>
                  </div>
                </div>
                
                <button 
                  className="bg-blue-600 text-white font-bold text-base w-full py-3 rounded"
                  onClick={() => alert("Đăng nhập thành công!")}
                >
                  Đăng nhập
                </button>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-3">
                  <span className="text-gray-500 text-sm mr-2">Hoặc tiếp tục với</span>
                  <div className="h-px bg-gray-300 flex-1"></div>
                </div>
                
                <button className="bg-gray-100 w-full py-3 rounded flex items-center justify-center">
                  <img src="/api/placeholder/18/18" alt="Google" className="h-5 w-5" />
                </button>
              </div>
              
              <div className="text-center mb-8">
                <span className="text-gray-900 text-sm">
                  Nếu bạn chưa có tài khoản, vui lòng {" "}
                  <a href="#" className="text-blue-600">Đăng ký</a>
                </span>
              </div>
              
              <div className="text-center">
                <div className="h-px bg-gray-300 w-full mb-4"></div>
                <p className="text-gray-700 text-xs">
                  Trang này được bảo vệ bởi reCAPTCHA và áp dụng Điều khoản sử dụng.
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
              image: "/api/placeholder/400/320",
              title: "Khám phá thế giới 3D sống động",
              desc: "VRA giúp trẻ tương tác với môi trường ảo, học qua các vật thể và không gian thú vị. Đồng thời, các bài học được thiết kế dưới dạng trò chơi, giúp trẻ vừa học vừa giải trí."
            },
            {
              image: "/api/placeholder/400/320",
              title: "Phát triển kỹ năng giao tiếp và xã hội",
              desc: "VRA hỗ trợ trẻ tự tin giao tiếp thông qua bài học kỹ năng xã hội. Cùng vời hệ thống AI gợi ý thông minh giúp trẻ xử lí tình huống khi gặp khó khăn mà không bị áp lực"
            },
            {
              image: "/api/placeholder/400/320",
              title: "Đồng hành cùng gia đình và giáo viên",
              desc: "Giáo viên và phụ huynh có thể quản lý và điều chỉnh lộ trình học cho trẻ qua giao diện web."
            }
          ].map((item, index) => (
            <div key={index} className="flex-1 relative rounded-xl overflow-hidden">
              <img src={item.image} className="w-full h-80 object-cover" alt={item.title} />
              <div className="bg-blue-50 p-6 pt-80">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-800 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-blue-900 py-16 px-20">
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
              Mỗi khi kết thúc buổi học hệ thống sẽ tự động ghi lại video quá trình học tập của trẻ.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded flex items-center">
              Tìm hiểu ngay
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="w-1/2">
            <img src="/api/placeholder/500/300" alt="Dashboard" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="flex justify-between items-center my-16">
          <div className="w-1/2 pr-16">
            <h3 className="text-white text-3xl font-bold mb-6">
              Đội ngũ y bác sĩ chất lượng cao
            </h3>
            <p className="text-white mb-8">
              Đội ngũ y bác sĩ có thâm niên kinh nghiệm trong việc thăm khám và điều trị cho trẻ tự kỷ.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="text-white mr-2 h-4 w-4" />
                <span className="text-white">Cách truyền đạt kiến thức gần gũi và dễ hiểu.</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-white mr-2 h-4 w-4" />
                <span className="text-white">Tận tâm chăm sóc và hỗ trợ trẻ trong quá trình điều trị.</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-white mr-2 h-4 w-4" />
                <span className="text-white">Sẵn sàng giải đáp và tư vấn cho phụ huynh.</span>
              </div>
            </div>
            
            <button className="bg-blue-600 text-white px-6 py-3 rounded flex items-center">
              Tìm hiểu ngay
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="w-1/2">
            <img src="/api/placeholder/500/300" alt="Doctors Team" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="flex justify-between items-center my-16">
          <div className="w-1/2">
            <img src="/api/placeholder/500/300" alt="Technology" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-1/2 pl-16">
            <h3 className="text-white text-3xl font-bold mb-6">
              Liên tục cập nhật và ứng dụng công nghệ cao
            </h3>
            <p className="text-white mb-10">
              Sản phẩm sử dụng AI để cá nhân hóa nội dung và lộ trình học tập theo nhu cầu của từng người dùng. Hệ thống có khả năng phân tích hành vi, ghi nhận tiến độ học và tự động gợi ý những bài học hoặc bài tập phù hợp. Điều này đảm bảo rằng mỗi học sinh đều được học tập theo cách hiệu quả nhất, giúp tối ưu hóa khả năng tiếp thu và phát triển.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded flex items-center">
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
              quote: "Nhờ hệ thống VRA mà tình trạng của con tôi ngày càng tiến triển tốt đẹp hơn. Tôi tin rằng đội ngũ y bác sĩ đã luôn cố gắng hết mình trong việc chăm sóc và điều trị.",
              name: "Dang Quang",
              role: "Phụ huynh"
            },
            {
              quote: "Sau khi hoàn thành liệu trình điều trị, con trai tôi đã có thể giao tiếp với thê giới bên ngoài. VRA quả là một hệ thống tuyệt vời.",
              name: "Dương Nguyễn",
              role: "Phụ huynh"
            },
            {
              quote: "Trong quá trình điều trị, tôi luôn có thể theo dõi chi tiết quá trình điều trị của con nhỏ. Đội ngũ y bác sĩ cũng tư vấn rất nhiệt tình và tận tâm.",
              name: "Dung Trần",
              role: "Phụ huynh"
            }
          ].map((item, index) => (
            <div key={index} className="flex-1 bg-white p-8 rounded-xl">
              <Star className="text-yellow-500 h-5 w-5 mb-3" />
              <p className="text-gray-800 mb-8">{item.quote}</p>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
                <img src="/api/placeholder/50/50" alt={item.name} className="h-12 w-12 rounded-full" />
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
      <footer className="w-full bg-white pt-16 pb-8 px-20">
        <div className="flex mb-12">
          <div className="w-1/4 pr-8">
            <img src="/api/placeholder/180/60" alt="VRA Logo" className="mb-4" />
            <p className="text-gray-700 mb-4">
              VRA là một hệ thống hỗ trợ can thiệp sớm cho trẻ tự kỷ thông qua trải nghiệm thực tế ảo. Web VRA cho phụ huynh/giáo viên quản lý quá trình học của trẻ
            </p>
            <div className="flex space-x-2">
              <a href="#" className="h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full">
                <img src="/api/placeholder/20/20" alt="Facebook" />
              </a>
              <a href="#" className="h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full">
                <img src="/api/placeholder/20/20" alt="Twitter" />
              </a>
              <a href="#" className="h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full">
                <img src="/api/placeholder/20/20" alt="Instagram" />
              </a>
              <a href="#" className="h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full">
                <img src="/api/placeholder/20/20" alt="LinkedIn" />
              </a>
            </div>
          </div>
          
          <div className="w-1/4 px-4">
            <h3 className="text-blue-600 font-bold mb-6">Chăm sóc khách hàng</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-800">Hướng dẫn thanh toán</a></li>
              <li><a href="#" className="text-gray-800">Điều kiện giao dịch chung</a></li>
              <li><a href="#" className="text-gray-800">Quy trình sử dụng dịch vụ</a></li>
              <li><a href="#" className="text-gray-800">Chính sách bảo hành</a></li>
              <li><a href="#" className="text-gray-800">Chính sách hoàn trả hàng</a></li>
              <li><a href="#" className="text-gray-800">Chính sách bảo mật</a></li>
            </ul>
          </div>
          
          <div className="w-1/4 px-4">
            <h3 className="text-blue-600 font-bold mb-6">Tính năng</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-800">Xem thông tin trẻ</a></li>
              <li><a href="#" className="text-gray-800">Quản lý danh sách</a></li>
              <li><a href="#" className="text-gray-800">Cấu hình bài học</a></li>
            </ul>
          </div>
          
          <div className="w-1/4 px-4">
            <h3 className="text-blue-600 font-bold mb-6">Về chúng tôi</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-800">Giới thiệu</a></li>
              <li><a href="#" className="text-gray-800">Điều khoản sử dụng</a></li>
              <li><a href="#" className="text-gray-800">Trợ giúp</a></li>
            </ul>
          </div>
        </div>
        
        <div className="w-full h-12 bg-gray-900 mt-8"></div>
      </footer>
    </div>
  );
}
