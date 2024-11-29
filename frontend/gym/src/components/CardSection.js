const Card = ({ title, description, imageUrl, link }) => {
    return (
      <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href={link}>
          <div
            className="relative overflow-hidden rounded-t-lg h-56 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            {/* התמונה מכילה div עם flex כדי למרכז את הכותרת */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-4">
              <h5 className="text-white text-3xl font-bold text-center">{title}</h5>
            </div>
            {/* כפתור על התמונה */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <a
                href={link}
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-700"
              >
                לפרטים נוספים
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </a>
        <div className="p-5">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  