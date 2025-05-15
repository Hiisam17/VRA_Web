import React from "react";
import {
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  Bell,
  Clock,
  FileText,
  ListChecks,
  Award,
  Home,
  MessageCircle,
  AlertTriangle,
  Timer
} from "lucide-react";
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
      {/* Page Content Container */}
      <div className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-12 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Home size={16} className="mr-2 text-primary-color" />
              <button onClick={() => navigate('/')} className="hover:text-primary-color transition-colors duration-200">Trang chủ</button>
              <ChevronRight size={16} className="mx-2 text-gray-400" />
              <button onClick={() => navigate('/lesson-list')} className="hover:text-primary-color transition-colors duration-200">Danh sách buổi học</button>
              <ChevronRight size={16} className="mx-2 text-gray-400" />
              <span className="font-medium text-primary-color">Báo cáo chi tiết</span>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="container mx-auto px-12 py-6">
          <div className="w-full h-40 md:h-48 bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg overflow-hidden relative shadow-lg">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-72 h-72 bg-blue-500 bg-opacity-20 rounded-full"></div>
              <div className="absolute -right-4 top-1/4 transform -translate-y-1/2 w-40 h-40 bg-blue-400 bg-opacity-20 rounded-full"></div>
              <div className="absolute right-1/4 bottom-0 w-24 h-24 bg-blue-300 bg-opacity-20 rounded-full"></div>
            </div>

            <div className="relative h-full flex items-center">
              <div className="px-8 md:px-12 py-6 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white drop-shadow-md">Báo Cáo Chi Tiết</h1>
                <p className="text-blue-100 max-w-xl">Thông tin chi tiết về buổi học rửa tay của học sinh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="container mx-auto px-12 pb-12">
          {/* Card nhiệm vụ */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 mb-8">
            {/* Header controls */}
            <div className="p-5 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                  <ListChecks className="mr-2 text-primary-color" size={20} />
                  Danh Sách Nhiệm Vụ
                  <span className="ml-3 text-sm font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    Hiển thị {tasks.length} nhiệm vụ
                  </span>
                </h2>
                <p className="text-gray-500 text-sm mt-1">Chi tiết các nhiệm vụ trong buổi học rửa tay</p>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider text-center">
                      <div className="flex items-center justify-center bg-blue-100 rounded-full px-3 py-1.5">
                        <ListChecks className="h-3 w-3 text-blue-600 mr-2" />
                        STT
                      </div>
                    </th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider text-center">
                      <div className="flex items-center justify-center bg-blue-100 rounded-full px-3 py-1.5">
                        <FileText className="h-3 w-3 text-blue-600 mr-2" />
                        Tên nhiệm vụ
                      </div>
                    </th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider text-center">
                      <div className="flex items-center justify-center bg-blue-100 rounded-full px-3 py-1.5">
                        <Bell className="h-3 w-3 text-blue-600 mr-2" />
                        Số lần nhắc nhở
                      </div>
                    </th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider text-center">
                      <div className="flex items-center justify-center bg-blue-100 rounded-full px-3 py-1.5">
                        <Clock className="h-3 w-3 text-blue-600 mr-2" />
                        Thời gian phản hồi
                      </div>
                    </th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider text-center">
                      <div className="flex items-center justify-center bg-blue-100 rounded-full px-3 py-1.5">
                        <MessageCircle className="h-3 w-3 text-blue-600 mr-2" />
                        Nhận xét
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tasks.map((task) => (
                    <tr key={task.stt} className="hover:bg-blue-50 transition-colors duration-150">
                      <td className="px-6 py-4 text-base text-gray-700 font-medium text-center">{task.stt}</td>
                      <td className="px-6 py-4 text-base text-center">
                        <span className="font-medium text-blue-600">{task.name}</span>
                      </td>
                      <td className="px-6 py-4 text-base text-center">
                        {task.remind >= 3 ? (
                          <div className="flex items-center justify-center group relative">
                            <span className={`font-medium ${task.remind >= 3 ? 'text-amber-600' : 'text-gray-700'}`}>{task.remind}</span>
                            <AlertTriangle className="h-4 w-4 text-amber-500 ml-2" />

                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-amber-600 text-white text-sm rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                              Nhiều lần nhắc nhở
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-amber-600"></div>
                            </div>
                          </div>
                        ) : (
                          <span className="text-gray-700">{task.remind}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-base text-center">
                        {task.response > 8 ? (
                          <div className="flex items-center justify-center group relative">
                            <span className="font-medium text-red-600">{task.response}s</span>
                            <Timer className="h-4 w-4 text-red-500 ml-2" />

                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-red-600 text-white text-sm rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                              Thời gian phản hồi lâu
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-red-600"></div>
                            </div>
                          </div>
                        ) : (
                          <span className="text-gray-700">{task.response}s</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-base text-gray-700 text-center group relative">
                        {task.note}

                        {/* Tooltip with detailed note */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 max-w-xs">
                          {task.name}: {task.note}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200 bg-gray-50">
              <div className="flex-1 flex justify-between sm:hidden">
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Trước
                </button>
                <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Sau
                </button>
              </div>

              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Hiển thị <span className="font-medium">1</span> đến <span className="font-medium">5</span> trong số <span className="font-medium">5</span> kết quả
                  </p>
                </div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Trang đầu</span>
                    <ChevronsLeft className="h-5 w-5" />
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Trang trước</span>
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {[1].map(page => (
                    <button
                      key={page}
                      className="z-10 bg-primary-color border-primary-color text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                      {page}
                    </button>
                  ))}

                  <button className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Trang sau</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Trang cuối</span>
                    <ChevronsRight className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            </div>
          </div>

          {/* Legend for icons */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-8 border border-gray-100">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Chú thích:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                <span className="text-sm text-gray-600">Nhiều lần nhắc nhở (≥ 3 lần)</span>
              </div>
              <div className="flex items-center">
                <Timer className="h-4 w-4 text-red-500 mr-2" />
                <span className="text-sm text-gray-600">Thời gian phản hồi lâu ({'>'}8 giây)</span>
              </div>
            </div>
          </div>

          {/* Two column layout for video and score */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video thực hành */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="p-5 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-800 flex items-center">
                    <FileText className="mr-2 text-primary-color" size={20} />
                    Video thực hành
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">Xem lại quá trình thực hiện nhiệm vụ</p>
                </div>
                <div className="p-6">
                  <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/-Wwp91N7P1M?list=PLcMNZDALWdfdp6q-4WbnV99I9_YgWBhru"
                      title="Video thực hành"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Kết quả */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 h-full">
                <div className="p-5 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-800 flex items-center">
                    <Award className="mr-2 text-primary-color" size={20} />
                    Kết quả
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">Đánh giá tổng thể buổi học</p>
                </div>
                <div className="p-6 flex flex-col items-center justify-center h-full">
                  <div className="relative w-48 h-48 flex items-center justify-center mb-4">
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
                  <span className="text-lg font-semibold text-blue-900">Điểm số</span>
                  <p className="text-gray-600 text-center mt-4 max-w-md">
                    Học sinh đã hoàn thành tốt các nhiệm vụ trong buổi học. Cần cải thiện thêm về kỹ năng xịt xà phòng.
                  </p>
                </div>
              </div>
            </div>
          </div>        </main>
      </div>
    </div>
  );
};

export default VRADetailReport; 