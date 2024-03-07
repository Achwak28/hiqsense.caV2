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
            <div className="flex z-[0] relative w-full" >
              <div className="absolute  left-1/2 p-4 rounded-lg transform -translate-x-1/2 
              -translate-y-1/2 w-[80%] bg-gradient-to-r from-red-600 via-purple-600 to-indigo-700">
                <div className="block md:flex flex-col md:flex-row justify-between">
                  <div className="flex flex-col">
                    <p className="font-sans font-bold text-white text-2xl p-4 text-left">
                      Start Building your Business Today
                    </p>
                    <div className="flex flex-col md:flex-row flex-wrap gap-3 text-sm">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-center gap-1 ">
                          <TaskAltIcon className="text-white max-w-5 max-h-5" />
                          <span className="text-white">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

            <div className="sm:flex gap-2 items-center justify-center w-full md:flex gap-4 items-center justify-end md:w-1/2">
              <button className="w-1/4 bg-transparent px-2 py-2 text-white border border-white rounded-lg">
                Get in Touch
              </button>
              <button className="w-1/4 bg-[#F6393D] px-2 py-2 text-white  rounded-lg">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      </Box>

)
}