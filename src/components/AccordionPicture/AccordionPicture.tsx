import './AccordionPicture.css'

const AccordionPicture = () => {

    return(
    <div className='accordion-pic-box'>
            <img className='illustration' src={'./illustration-woman-online-mobile.svg'} alt="illustration" />
            <img className='bgpattern' src={'./bg-pattern-mobile.svg'} alt="background pattern" />
            <img className='desktop-illustration' src={"./illustration-woman-online-desktop.svg"} alt="" />
            <img className='desktop-bgpattern' src={"./bg-pattern-desktop.svg"} alt="" />
            <img className='desktop-illustration-box' src={"./illustration-box-desktop.svg"} alt="" />
    </div>
    )

};

export default AccordionPicture;