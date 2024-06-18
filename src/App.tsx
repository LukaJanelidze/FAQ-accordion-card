import { Fragment, useState } from 'react'
import { accordionArr } from './Accordion'
import AccordionSection from './components/AccordionSection/AccordionSection'
import AccordionPicture from './components/AccordionPicture/AccordionPicture'
import './App.css'

function App() {
  const [chosenSection, setChosenSection] = useState< number | null >(2)

  return (
    <div className='body-faq-accordion-container'>

      <div className='faq-accordion-container'>

        <div className='accordion-top-picture'>
        <AccordionPicture />
        </div>
        
        <div className='accordion'>
          
        <h1 className='accordion-title'>FAQ</h1>

          {accordionArr.map((item) => {
            return (
              <Fragment key={item.id}>
                < AccordionSection 
                title={item.title}
                subText={item.subText}
                id={item.id}
                chosenSection={chosenSection}
                setChosenSection={setChosenSection}
                />
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
