import React, { useState } from "react";
import "./App.css";
import { randomImage } from "./fakeData";
import { Pagination } from "flowbite-react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [imagePerPage] = useState(8);

  // get current images
  const indexOfLastImage = currentPage * imagePerPage;
  const indexOfFirstImage = indexOfLastImage - imagePerPage;
  const currentImages = randomImage.slice(indexOfFirstImage, indexOfLastImage);

  //get page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <h1 className="text-center mb-5 text-3xl">Pagination</h1>
      <div className="w-full flex justify-center">
        <div className="w-1/2">
          <div>
            <div className="gap-2 grid grid-cols-4">
              {currentImages.map((item) => (
                <div key={item.id} className="">
                  <img
                    className="mb-4 object-cover h-48 w-96"
                    src={item.image}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Pagination
                currentPage={1}
                onPageChange={(page) => {
                  setCurrentPage(page);
                }}
                showIcons
                totalPages={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
