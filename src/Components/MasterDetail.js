import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import optionData from "../Data/optionData";


const MasterDetailGrid = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDetail,setSelectedDetail] =useState(null)
  const optionsData = optionData;


  useEffect(() => {
    setSelectedOption(optionsData[0].option);
    
    // Set the first option as selected initially
  }, []);

  return (
    <div className="mx-20">
      <div className="grid gap-4">
        {/* Large screens */}
        <div className=" lg:grid lg:grid-cols-3">
          {/* Left bar */}
          <div className="col-span-1">
            {optionsData.map((data, index) => (
              <div key={index}>
              <div 
                className={`w-full p-4 flex items-center gap-4 ${
                  selectedOption === data.option ? "bg-gray-300" : "hover:bg-gray-200"
                }`}
                onClick={() => 
                    {
                        setSelectedOption(data.option)
                        setSelectedDetail(data.questions[0])
                    }
                }
              >
                <FontAwesomeIcon className="text-xl text-g lgray-400" icon={data.icon} />
                <h2 className="text-xl">{data.option}</h2>
              </div>
              {selectedOption === data.option && (
                  <div className="lg:hidden bg-white">
                    {data.questions.map((question, index) => (
                      <a key={index} className="flex items-center gap-1">
                        <FontAwesomeIcon className="text-yellow-500" icon={faCircleQuestion} />
                        <p className="text-lg">{question}</p>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
            ))}
          </div>

         
{/* Right bar */}
<div className="lg:grid col-span-2 bg-white p-16">
  <div >
    <h2 className="text-2xl mb-8">{selectedOption}</h2>
    <div className="">
      {optionsData
        .filter(option => option.option === selectedOption)
        .map((data, index) => (
          <div key={index}>
            {data.questions.map((question, index) => (
              <a key={index} className="flex items-center gap-1">
                <FontAwesomeIcon className="text-yellow-500" icon={faCircleQuestion} />
                <p className="text-lg">{question}</p>
              </a>
            ))}
          </div>
        ))}
    </div>
  </div>
</div>

        </div>

       { /* Small screens 
         <div className="lg:hidden">
          {optionsData.map((data, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg ">{data.option}</h3>
              <div
                className={`cursor-pointer hover:bg-gray-200 p-4 ${
                  selectedOption === data.option ? "bg-gray-300" : ""
                }`}
                onClick={() => setSelectedOption(data.option)}
              >
                {selectedOption === data.option && (
                  <div>
                    {data.questions.map((question, index) => (
                      <div key={index} className="flex items-center gap-1 my-4">
                        <FontAwesomeIcon className="text-yellow-500" icon={faCircleQuestion} />
                        <p className="text-lg">{question}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
                    
                    */}

      </div>
    </div>
  );
};

export default MasterDetailGrid;