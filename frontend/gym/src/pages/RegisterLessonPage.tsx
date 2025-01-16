import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../Images/logo.webp';

const days = ["ש", "ו", "ה", "ד", "ג", "ב", "א"];

export const RegisterLessonPage: React.FC = () => {
  const [gymClasses, setGymClasses] = useState<any[]>([]);
  const [registeredClasses, setRegisteredClasses] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const memberId = localStorage.getItem("memberId");
    if (!memberId) {
      alert("Please log in first.");
      navigate('/');
      return;
    }

    axios.get('/classes')
      .then((response) => {
        setGymClasses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching the gym classes:', error);
      });

    axios.get(`/members/${memberId}/registered-classes`)
      .then((response) => {
        setRegisteredClasses(response.data || []);
      })
      .catch((error) => {
        console.error('Error fetching registered classes:', error);
      });
  }, [navigate]);

  const handleEnroll = (classId: string) => {
    const memberId = localStorage.getItem("memberId");
    if (!memberId) {
      alert("Please log in first.");
      return;
    }

    axios.post('/enrollments/register', { memberId, classId })
      .then((response) => {
        alert(`הרשמה בוצעה בהצלחה: ${response.data}`);
        setRegisteredClasses((prev) => [...prev, classId]);
      })
      .catch((error) => {
        console.error("Error during enrollment:", error);
        alert(`שגיאה בהרשמה: ${error.response?.data || 'שגיאה לא ידועה'}`);
      });
  };

  const handleUnenroll = (classId: string) => {
    const memberId = localStorage.getItem("memberId");
    if (!memberId) {
      alert("Please log in first.");
      return;
    }

    axios.post('/enrollments/unregister', { memberId, classId })
      .then((response) => {
        alert(`הרשמה בוטלה בהצלחה: ${response.data}`);
        setRegisteredClasses((prev) => prev.filter((id) => id !== classId));
      })
      .catch((error) => {
        console.error("Error during unenrollment:", error);
        alert(`שגיאה בביטול הרשמה: ${error.response?.data || 'שגיאה לא ידועה'}`);
      });
  };

  const getLessonsForDay = (day: string) => {
    const lessonsForDay = gymClasses.filter((gymClass) => gymClass.day === day);
    return lessonsForDay.sort((a, b) => {
      const timeA = a.time.split(" - ")[0]; 
      const timeB = b.time.split(" - ")[0];
      return new Date(`1970-01-01T${timeA}`).getTime() - new Date(`1970-01-01T${timeB}`).getTime();
    });
  };

  const isRegistered = (classId: string) => registeredClasses.includes(classId);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <img
          src={logo || "/placeholder.svg"}
          alt="Logo"
          className="h-20 w-20 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <h2 className="text-3xl font-bold text-red-600 underline text-center w-full">
          מערכת שעות
        </h2>
      </div>

      <div className="shadow-lg rounded-lg bg-white">
        <table className="table-fixed w-full border-collapse">
          <thead>
            <tr>
              {days.map((day) => (
                <th
                  key={day}
                  className="bg-red-500 text-white px-4 py-3 text-lg font-semibold w-1/7 border-r border-red-400 last:border-r-0"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {days.map((day) => (
                <td
                  key={day}
                  className="border-r border-gray-200 last:border-r-0 align-top bg-gray-50 p-2"
                >
                  {getLessonsForDay(day).map((lesson) => (
                    <div
                      key={lesson.id}
                      className="bg-white rounded-lg shadow-sm p-3 mb-3 transition-all hover:shadow-md"
                    >
                      <div className="font-bold text-red-500 text-lg">
                        {lesson.name}
                      </div>
                      <div className="text-gray-600 my-1">
                        {lesson.time}
                      </div>
                      <div className="text-gray-500 text-sm mb-2">
                        {lesson.instructor}
                      </div>
                      {isRegistered(lesson.id) ? (
                        <button
                          onClick={() => handleUnenroll(lesson.id)}
                          className="w-full py-2 px-4 bg-gray-500 text-white text-sm rounded-md hover:bg-gray-600 transition-colors"
                        >
                          ביטול
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEnroll(lesson.id)}
                          className="w-full py-2 px-4 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors"
                        >
                          הרשמה
                        </button>
                      )}
                    </div>
                  ))}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisterLessonPage;

