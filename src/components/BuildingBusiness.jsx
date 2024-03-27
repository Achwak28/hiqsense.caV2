import { Box } from "@mui/material/" 



import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default function BuildingBusiness (){ 

const services = [
    "Web Design",
    "Logo and Graphic Design",
    "SEO Optimization",
    "Email Hosting",
  ];

return (
<Box>
            <div className="flex z-[0] relative w-full bulding-business" >
              <div className="absolute  left-1/2 p-1 md:p-4 rounded-lg transform -translate-x-1/2 
              -translate-y-1/2 w-[80%] bg-gradient-to-r from-red-600 via-purple-600 to-indigo-700">
                <div className="building-business-container flex flex-row items-center p-2 py-4 md:p-4">
                  <div className="flex flex-col w-full md:w-2/3 p-2 pt-1 md:p-4">
                    <p className="font-sans font-bold text-white text-2xl  text-left">
                      Start Building your Business Today
                    </p>
                    <div className="building-business-services gap-3 text-sm mt-6">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-center gap-1 ">
                          <TaskAltIcon className="text-white max-w-5 max-h-5" />
                          <span className="text-white">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

            <div className="building-business-buttons md:w-1/3 justify-center md:justify-end p-2 pt-1 md:p-4">
              <button className="building-business-button w-[8.56rem] my-3 md:mb-0 h-[2.5rem] mr-4 bg-transparent text-white border border-white rounded">
                Get in Touch
              </button>
              <button className="building-business-button w-[8.56rem] h-[2.5rem]  bg-[#F6393D] text-white  rounded">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      </Box>

)
}