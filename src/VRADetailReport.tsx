import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Logo1 from "./img/Logo1.png";
import { useNavigate } from "react-router-dom";

const tasks = [
  { stt: 1, name: "Bật vòi nước", remind: 4, response: 3.5, note: "Bật vòi hơi lâu" },
  { stt: 2, name: "Làm ướt tay", remind: 2, response: 2.7, note: "Phản ứng chậm" },
  { stt: 3, name: "Xịt xà phòng", remind: 4, response: 8.2, note: "Chưa nắm được cách xịt xà phòng" },
  { stt: 4, name: "Rửa tay", remind: 2, response: 5.3, note: "Rửa tay không kỹ" },
  { stt: 5, name: "Tắt vòi nước", remind: 4, response: 1.2, note: "Tắt sai cách" },
];

const VRADetailReport: React.FC = () => {
  const navigate = useNavigate();
  const score = 8; // điểm số mẫu
  const getStarColor = (score: number) => {
    if (score >= 8) return '#FFD700'; // vàng
    if (score >= 5) return '#FFA500'; // cam
    return '#FF4B4B'; // đỏ
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={Logo1} alt="VRA Logo" className="h-16 object-contain" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => navigate('/')} className="text-black font-bold text-2xl px-4 py-2 rounded hover:bg-gray-100 transition-all duration-200">Trang chủ</button>
            <button onClick={() => navigate('/lesson-list')} className="text-black font-bold text-2xl px-4 py-2 rounded hover:bg-gray-100 transition-all duration-200">Danh sách buổi học</button>
            <button className="text-black font-bold text-2xl px-4 py-2 rounded hover:bg-gray-100 transition-all duration-200">Điều chỉnh bài học</button>
          </nav>
          <div className="flex space-x-2">
            <button className="text-blue-600 text-2xl font-bold px-4 py-2 rounded hover:bg-blue-50 transition-all duration-200">Đăng nhập</button>
            <button className="bg-red-500 text-white font-bold text-2xl px-6 py-2 rounded hover:bg-red-600 transition-all duration-200">Đăng ký</button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-500">
          <button onClick={() => navigate('/')} className="hover:text-blue-600">Trang chủ</button>
          <span className="mx-2">›</span>
          <button onClick={() => navigate('/lesson-list')} className="hover:text-blue-600">Danh sách buổi học</button>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Báo cáo chi tiết</span>
        </div>
      </div>

      {/* Card nhiệm vụ */}
      <div className="container mx-auto px-4 mb-6">
        <div className="bg-white rounded-md shadow p-6">
          <img src="https://img.freepik.com/free-vector/gradient-technology-background_23-2148884155.jpg" alt="banner" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-xl font-bold mb-4">Danh sách nhiệm vụ</h2>
          <table className="w-full mb-4">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-500 text-sm">
                <th className="px-4 py-2 font-medium">STT</th>
                <th className="px-4 py-2 font-medium">Tên nhiệm vụ</th>
                <th className="px-4 py-2 font-medium">Số lần nhắc nhở</th>
                <th className="px-4 py-2 font-medium">Thời gian phản hồi</th>
                <th className="px-4 py-2 font-medium">Nhận xét</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.stt} className="text-center border-b last:border-b-0">
                  <td className="px-4 py-2 text-gray-700">{task.stt}</td>
                  <td className="px-4 py-2 text-blue-600 font-medium cursor-pointer hover:underline">{task.name}</td>
                  <td className="px-4 py-2 text-gray-700">{task.remind}</td>
                  <td className="px-4 py-2 text-gray-700">{task.response}</td>
                  <td className="px-4 py-2 text-gray-700">{task.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            {[1,2,3,4,5].map(i => (
              <button key={i} className={`w-6 h-6 flex items-center justify-center rounded-full border ${i===3?'bg-blue-600 text-white':'bg-white text-gray-700'} font-bold`}>{i}</button>
            ))}
            <span className="text-gray-500">...</span>
            <button className="w-6 h-6 flex items-center justify-center rounded-full border bg-white text-gray-700 font-bold">10</button>
          </div>
        </div>
      </div>

      {/* Video thực hành */}
      <div className="container mx-auto px-4 mb-6">
        <div className="bg-white rounded-md shadow p-6">
          <h3 className="text-lg font-bold mb-2 text-red-600">Video thực hành</h3>
          <div className="w-full aspect-video bg-gray-200 rounded overflow-hidden flex items-center justify-center">
            <iframe
              className="w-full h-full rounded"
              src="https://www.youtube.com/embed/-Wwp91N7P1M?list=PLcMNZDALWdfdp6q-4WbnV99I9_YgWBhru"
              title="Video thực hành"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Kết quả */}
      <div className="container mx-auto px-4 mb-6">
        <div className="bg-white rounded-md shadow p-6 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg viewBox="0 0 200 200" width="192" height="192" className="drop-shadow-lg">
                <polygon
                  points="100,20 123,78 185,78 135,120 153,180 100,145 47,180 65,120 15,78 77,78"
                  fill={getStarColor(score)}
                  stroke="#19395E"
                  strokeWidth="8"
                  style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.15))" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl font-extrabold text-white drop-shadow-md">{score}</span>
              </div>
            </div>
            <span className="text-lg font-semibold text-blue-900 mt-4">Điểm số của bạn</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src={Logo1} alt="VRA Logo" className="h-16 object-contain" />
              </div>
              <p className="text-sm text-gray-600">
                VRA là một hệ thống hỗ trợ can thiệp sớm cho trẻ tự kỷ thông qua trải nghiệm thực tế ảo. Web VRA cho phụ huynh/giáo viên quản lý quá trình học của trẻ
              </p>
              <div className="flex space-x-2">
                <a href="#" className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded text-white hover:bg-blue-700">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-8 h-8 bg-red-600 flex items-center justify-center rounded text-white hover:bg-red-700">
                  <Youtube size={18} />
                </a>
                <a href="#" className="w-8 h-8 bg-blue-400 flex items-center justify-center rounded text-white hover:bg-blue-500">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-8 h-8 bg-pink-600 flex items-center justify-center rounded text-white hover:bg-pink-700">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-blue-600 mb-4">Chăm sóc khách hàng</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Hướng dẫn thanh toán</a></li>
                <li><a href="#" className="hover:text-blue-600">Điều kiện giao dịch chung</a></li>
                <li><a href="#" className="hover:text-blue-600">Quy trình sử dụng dịch vụ</a></li>
                <li><a href="#" className="hover:text-blue-600">Chính sách bảo hành</a></li>
                <li><a href="#" className="hover:text-blue-600">Chính sách hoàn trả hàng</a></li>
                <li><a href="#" className="hover:text-blue-600">Chính sách bảo mật</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-blue-600 mb-4">Chức năng</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Học tập</a></li>
                <li><a href="#" className="hover:text-blue-600">Luyện tập</a></li>
                <li><a href="#" className="hover:text-blue-600">Thi đấu</a></li>
                <li><a href="#" className="hover:text-blue-600">Thư viện</a></li>
                <li><a href="#" className="hover:text-blue-600">Xếp hạng</a></li>
                <li><a href="#" className="hover:text-blue-600">Chia sẻ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-blue-600 mb-4">Về chúng tôi</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Giới thiệu</a></li>
                <li><a href="#" className="hover:text-blue-600">Điều khoản sử dụng</a></li>
                <li><a href="#" className="hover:text-blue-600">Trợ giúp</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full h-12 bg-gray-900"></div>
    </div>
  );
};

export default VRADetailReport; 