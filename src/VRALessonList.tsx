import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo1 from "./img/Logo1.png";

const VRALessonList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const navigate = useNavigate();

  const lessons = [
    { id: 1, device: "device_02", date: "13/04/2025", title: "Bài học rửa tay", level: "Chi tiết" },
    { id: 2, device: "device_02", date: "13/04/2025", title: "Khám phá thế giới động vật", level: "Chi tiết" },
    { id: 3, device: "device_02", date: "13/04/2025", title: "Khám phá thế giới động vật", level: "Chi tiết" },
    { id: 4, device: "device_02", date: "13/04/2025", title: "Bài học rửa tay", level: "Chi tiết" },
    { id: 5, device: "device_02", date: "13/04/2025", title: "Khám phá thế giới đại dương", level: "Chi tiết" },
    { id: 6, device: "device_02", date: "13/04/2025", title: "Khám phá con người", level: "Chi tiết" },
    { id: 7, device: "device_02", date: "13/04/2025", title: "Khám phá thế giới thực vật", level: "Chi tiết" },
    { id: 8, device: "device_02", date: "13/04/2025", title: "Giao tiếp với Doraemon", level: "Chi tiết" },
    { id: 9, device: "device_02", date: "13/04/2025", title: "Khám phá thế giới thực vật", level: "Chi tiết" },
    { id: 10, device: "device_02", date: "13/04/2025", title: "Khám phá lịch sử cùng Nobita", level: "Chi tiết" },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDetailClick = (lessonId: number) => {
    navigate('/report-detail');
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
            <button 
              onClick={() => navigate('/')}
              className="text-black font-bold text-2xl px-4 py-2 rounded hover:bg-gray-100 transition-all duration-200"
            >
              Trang chủ
            </button>
            <button className="text-black font-bold text-2xl px-4 py-2 rounded hover:bg-gray-100 transition-all duration-200">
              Danh sách học sinh
            </button>
            <button className="text-black font-bold text-2xl px-4 py-2 rounded hover:bg-gray-100 transition-all duration-200">
              Quản lý cấu hình cá nhân hóa
            </button>
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
          <a href="#" className="hover:text-blue-600">Trang chủ</a>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Danh sách buổi học</span>
        </div>
      </div>

      {/* Banner */}
      <div className="container mx-auto px-4 mb-6">
        <div className="w-full h-36 bg-blue-900 rounded-md overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-70"></div>
          <div className="absolute right-0 w-1/2 h-full bg-blue-950 opacity-30 rounded-l-full transform -translate-y-1/4"></div>
          <div className="absolute left-10 top-1/2 transform -translate-y-1/2">
            <div className="w-24 h-24 bg-blue-400 bg-opacity-30 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-300 bg-opacity-40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 flex-grow mb-8">
        <div className="bg-white rounded-md shadow">
          <div className="p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Danh Sách Buổi Học</h1>
            <div className="relative">
              <select className="pl-4 pr-8 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Tất cả</option>
              </select>
            </div>
          </div>
          
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-500 text-sm">
                  <th className="px-6 py-3 font-medium">STT</th>
                  <th className="px-6 py-3 font-medium">ID Thiết bị</th>
                  <th className="px-6 py-3 font-medium">Thời gian</th>
                  <th className="px-6 py-3 font-medium">Bài học</th>
                  <th className="px-6 py-3 font-medium">Cấp độ</th>
                </tr>
              </thead>
              <tbody>
                {lessons.map((lesson, index) => (
                  <tr key={lesson.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 text-sm text-gray-700">{lesson.id}</td>
                    <td className="px-6 py-4 text-sm text-blue-600">{lesson.device}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{lesson.date}</td>
                    <td className="px-6 py-4 text-sm text-blue-600">{lesson.title}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDetailClick(lesson.id)}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-200"
                      >
                        Chi tiết
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center items-center py-4 border-t">
            <nav className="flex items-center space-x-1">
              <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                <ChevronsLeft size={18} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                <ChevronLeft size={18} />
              </button>
              
              {[1, 2, 3].map(page => (
                <button
                  key={page}
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    currentPage === page 
                      ? "bg-blue-600 text-white" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
              
              <span className="text-gray-500">...</span>
              
              <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                {totalPages}
              </button>
              
              <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                <ChevronRight size={18} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                <ChevronsRight size={18} />
              </button>
            </nav>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
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
}

export default VRALessonList; 