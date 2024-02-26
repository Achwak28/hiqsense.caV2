import CompanyLogos from "./CompanyLogos";

const Content = () => {
  return (
    <div className="flex flex-col bg-content bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-content via-content to-content-left-gradient">
      <div className="bg-content flex flex-col lg:px-[120px] lg:pt-[120px] md:px-[90px] md:pt-[90px] sm:px-[60px] sm:pt-[60px] px-[30px] pt-[30px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-content via-content to-content-left-gradient lg:flex-row md:flex-col sm:flex-col">
        <div  className="w-full"><h4 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[48px] xl:text-[68px] text-white font-ebgaramond font-bold">Let Us Elevate Your Digital Presence!</h4></div>
        <div className="w-full flex flex-col gap-6">
          <p className="text-white font-opensanshebrew text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[21px]">
            Join us on a journey where your digital presence is not just enhanced but elevated, shaping the urban landscape in ways that are both visually stunning and strategically impactful.
          </p>
          <button className="text-white bg-red-500 py-2.5 w-full lg:w-fit rounded px-6 font-bold">Get started</button>
        </div>
      </div>
      <hr className="h-px mt-8 bg-content-underline border-0 lg:mx-[120px] md:mx-[90px] sm:mx-[60px] mx-[30px]" />
      <div className="w-full px-10 pb-[120px]">
        <CompanyLogos />
      </div>
    </div>
  )
}
export default Content;