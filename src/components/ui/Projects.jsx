import directimg from '../images/featured-work/direct.svg'

function Projects({ img1, altText, projectHeading, projectSubHeading, linkText }) {
    return (
        <>
            <div>
                <img src={img1} alt={altText} />
                <h3>{projectHeading}</h3>
                <p>{projectSubHeading}</p>
                <div><a href="#"><span className='flex justify-center'>{linkText} <img src={directimg} alt="Direct Arrow" /> </span></a></div>
            </div>
        </>
    )
}

export default Projects;