
import { useMediaQuery } from "../../../../hooks/useMediaQuery";

export default function Map () {
const isDesktop = useMediaQuery("(min-width: 768px)");
return (
    <div> 
    {isDesktop && (
        <div className="h-full w-full flex items-center justify-center flex-col pt-5">
      
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64399.57080430895!2d-106.7173928109375!3d52.12651736257713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8248b9b7f11f8d19%3A0xaa92a6def3f0d050!2sHiqsense%20Smart%20Systems%20LTD!5e1!3m2!1sen!2sca!4v1710894032029!5m2!1sen!2sca" 
       
        allowfullscreen="" loading="lazy" style={{ border: 0 }} className="w-full h-full"></iframe>
        </div>
      )}

</div>
)
}