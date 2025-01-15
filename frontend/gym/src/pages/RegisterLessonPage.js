import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../Images/logo.webp';
import { useNavigate } from 'react-router-dom';

const days = ["ש", "ו", "ה", "ד", "ג", "ב", "א"];

export const RegisterLessonPage = () => {
  const [gymClasses, setGymClasses] = useState([]);
  const [registeredClasses, setRegisteredClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const memberId = localStorage.getItem("memberId");
    if (!memberId) {
      alert("Please log in first.");
      navigate('/');
      return;
    }

    // Fetching all classes
    axios
      .get('/classes')
      .then((response) => {
        setGymClasses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching the gym classes:', error);
      });

    // Fetching the classes the user is registered to
    axios
      .get(`/members/${memberId}/registered-classes`)
      .then((response) => {
        setRegisteredClasses(response.data || []);
      })
      .catch((error) => {
        console.error('Error fetching registered classes:', error);
      });
  }, [navigate]);

  const handleEnroll = (classId) => {
    const memberId = localStorage.getItem("memberId");

    if (!memberId) {
      alert("Please log in first.");
      return;
    }

    axios
      .post('/enrollments/register', { memberId, classId })
      .then((response) => {
        alert(`הרשמה בוצעה בהצלחה: ${response.data}`);
        setRegisteredClasses((prev) => [...prev, classId]);
      })
      .catch((error) => {
        console.error("Error during enrollment:", error);
        alert(`שגיאה בהרשמה: ${error.response?.data || 'שגיאה לא ידועה'}`);
      });
  };

  const handleUnenroll = (classId) => {
    const memberId = localStorage.getItem("memberId");
    console.log(" memberId", memberId)
    if (!memberId) {
      alert("Please log in first.");
      return;
    }

    axios
      .post('/enrollments/unregister', { memberId, classId })
      .then((response) => {
        alert(`הרשמה בוטלה בהצלחה: ${response.data}`);
        setRegisteredClasses((prev) => prev.filter((id) => id !== classId));
      })
      .catch((error) => {
        console.error("Error during unenrollment:", error);
        alert(`שגיאה בביטול הרשמה: ${error.response?.data || 'שגיאה לא ידועה'}`);
      });
  };

  const getLessonsForDay = (day) => {
    const lessonsForDay = gymClasses.filter((gymClass) => gymClass.day === day);

    lessonsForDay.sort((a, b) => {
      const timeA = a.time.split(" - ")[0]; 
      const timeB = b.time.split(" - ")[0];
      return new Date(`1970-01-01T${timeA}`) - new Date(`1970-01-01T${timeB}`);
    });

    return lessonsForDay;
  };

  const isRegistered = (classId) => registeredClasses.includes(classId);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <img
          src={logo}
          alt="Logo"
          className="h-20 w-20 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <h2 className="text-3xl font-bold text-red-600 underline text-center w-full">
          מערכת שעות
        </h2>
      </div>

      {/* טבלה */}
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="table-auto w-full border-collapse border border-gray-300 text-center">
          <thead className="bg-red-500 text-white">
            <tr>
              {days.map((day) => (
                <th
                  key={day}
                  className="border border-gray-300 px-4 py-2 text-lg font-semibold"
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
                  className="border border-gray-300 px-4 py-2 align-top bg-gray-50"
                >
                  {getLessonsForDay(day).map((lesson) => (
                    <div
                      key={lesson.id}
                      className="mb-4 p-4 shadow-sm rounded-lg bg-gray-100 hover:shadow-md"
                    >
                      <div className="font-bold text-red-600">
                        {lesson.name}
                      </div>
                      <div className="text-sm text-gray-600">{lesson.time}</div>
                      <div className="text-sm text-gray-500">
                        {lesson.instructor}
                      </div>
                      {isRegistered(lesson.id) ? (
                        <button
                          onClick={() => handleUnenroll(lesson.id)}
                          className="mt-2 px-4 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 shadow-md"
                        >
                          ביטול
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEnroll(lesson.id)}
                          className="mt-2 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 shadow-md"
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
