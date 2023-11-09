import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import { VscChevronDown, VscCloudDownload } from 'react-icons/vsc'
import Swal from 'sweetalert2'
import StudentLayout from '../../Layout/StudentLayout'


function DocumentationTemplate() {

  const showResearchTemplateResponse = () => {
    Swal.fire({
      title: "Research Template",
      text: "Your document will begin download shortly",
      icon: "success",
      timer: 2000,
      imageUrl: "/UGRepositoryLogo.png",
      imageHeight: "150px",
      backdrop: true,
      showConfirmButton: false,
      willClose: () => {
        window.location.href="/Project_Documentation_Template.docx"
        console.log("This is working")
      }
     })
  }  

  const showApplicationTemplateResponse = () => {
    Swal.fire({ 
      title: "Application Template",
      text: "Your document will begin download shortly",
      icon: "success",
      timer: 2000,
      imageUrl: "/UGRepositoryLogo.png",
      imageHeight: "150px",
      showConfirmButton: false,
      willClose: () => {
        window.location.href="/Project_Documentation_Template.docx"
        console.info("This is working")
      }
    })
  }

  return (
    <StudentLayout>
        <div className='overflow-hidden rounded-sm border border-LegonContainer bg-white shadow-default'>

          <div className='px-4 pb-6 text-center lg:pb-8 xl:pb-11.5'>

            {/* This handles the Position of the logo and title of the header */}
          <div className="border-b border-LegonGold py-4 px-6.5">
            <img className="mx-auto my-6 h-32 sm:h-32 w-auto" src="/UGRepositoryLogo.png" alt="University Of Ghana Logo" />
            <h2 className='font-bold text-2xl text-black text-center'>Documentation, Project Work, Templates and Formatting Instructions</h2>
          </div>
          {/* This handles the Position of the logo and title of the header */}

          </div>

          <div className='grid divide-y divide-neutral-200 max-w-xl mx-auto -mt-5 sm:mt mb-7'>
            
            {/* Documentation  */}
            <div className='py-5'>

              <details className='group'>
                <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                  <span className='font-semibold text-LegonBlue text-2xl'>Documentation</span>
                  <span className='transition group-open:rotate-180 text-LegonGold'><VscChevronDown size={24} shapeRendering="geometricPrecision" /></span>
                </summary>

                <p className='mt-4.5 group-open:animate-fadeIn'>
                Documentation is an indispensible pillar of human knowledge, serving as the bedrock upon which,
                information is organized, shared, and preserved for posterity. In it's essense, documentation
                represents the art and science of capturing, recording and presenting information in a structured and comprehensible
                manner. It transforms the intangible into the tangible, converting ideas, experiences, and data into transient form that can be accessed,
                understood, and utilized by a diverse audience.
                </p>

                <p className='mt-4.5 group-open:animate-fadeIn'>
                  At it's core, it is a universal language, transcending boundries of culture,time, and geography.
                  It encompasses a vast spectrum of mediums, from acient scrolls and manuscirpts to modern digital repositories (The University of Ghana Project Work and Research Repository).
                  Each tailored to the unique needs and technologies of its era. Regardless of it's form, the fundamental purpose of Documentation remains unchangeg: To communicate, Educate, and Facilitate
                  the transfer of knowledge
                </p>

                <p className='mt-4.5 group-open:animate-fadeIn'>
                  Documentation plays a pivotal role in bridging the gap between generations, allowing wisdom and insight to be passed
                  down through time. In doing so, it preserves the collective wisdom of civilizations and empowers future generations to build
                  upon the foundations of the past. Moreover, a well crafted documentation in the professional setting can be the difference between success and failure as it provides
                  roadmap for decision-making, troubleshooting, and problem-solving.
                </p>

                <p className='mt-4.5 group-open:animate-fadeIn'>
                  In today's digital age, the advent access to information has evolved documentations into a multifacited discipline.
                  Enabling individuals and communities worldwide to create, share and access an unprecendented volume of records. I.E. Documentation
                </p>
                
                <p className='mt-4.5 group-open:animate-fadeIn'>
                  In summary, documentation is not just a collection of words, images or symbols. It is the embodiment of human knowledge, creativity and progress.
                  It is a testament to our capacity to learn, adapt and communicate across time and space. As we navigate the complex landscapes of the mdoern world,
                  records remains our steadfast companion, Illuminating the path forward and preversing the tapestry of our collective experience. 
                </p>

              </details>
            </div>
            {/* Documentation  */}
            
            {/* Project Work */}
             <div className='py-5'>

              <details className='group'>
                <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                  <span className='font-semibold text-LegonBlue text-2xl'>Project Work</span>
                  <span className='transition group-open:rotate-180 text-LegonGold'><VscChevronDown size={24} shapeRendering="geometricPrecision" /></span>
                </summary>

                <p className='mt-4.5 group-open:animate-fadeIn'>
                Project work refers to a purposeful and organized endeavor
                undertaken to achieve specific goals or objectives within a defined timeframe. 
                It typically involves planning, execution, and evaluation phases, 
                where individuals or teams collaboratively apply 
                their knowledge, skills, and resources to complete tasks, solve problems, or create innovative outcomes. 
                Project work spans various domains, from business initiatives and research endeavors to creative endeavors and community undertakings, 
                serving as a structured approach to accomplish diverse missions efficiently and effectively.
                </p>

              </details>
            </div> 
            {/* Project Work */}
            
            {/* Types of project work */}
            <div className='py-5'>

              <details className='group'>
                <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                  <span className='font-semibold text-LegonBlue text-2xl'>Types of project work</span>
                  <span className='transition group-open:rotate-180 text-LegonGold'><VscChevronDown size={24} shapeRendering="geometricPrecision" /></span>
                </summary>

                <p className='mt-4.5 group-open:animate-fadeIn'>
                There are a plethora of project work methods. Currently the university of Ghana, supports and accepts only two types.
                Namely:
                </p>
                <ul className='mt-4 py-2'>
                    <li className='font-semibold'>1. Research Project Work</li>
                    <li className='font-semibold'>2. Application Project Work</li>
                  </ul>

                  <p className='mt-4.5 font-bold text-red-700'>
                  Note: In any case where the University accepts other different types of project work approaches, it shall be communicated here.
                  </p>
              </details>
            </div>
            {/* Types of project work */}

            {/* Research Project work */}
            <div className='py-5'>

              <details className='group'>
                <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                  <span className='font-semibold text-LegonBlue text-2xl'>Research Project work</span>
                  <span className='transition group-open:rotate-180 text-LegonGold'><VscChevronDown size={24} shapeRendering="geometricPrecision" /></span>
                </summary>

                <p className='mt-4.5 group-open:animate-fadeIn'>
                A research project work is an investigative and scholarly endeavor focused on exploring, 
                analyzing, and contributing to existing knowledge within a particular field or subject area. 
                It involves rigorous inquiry, data collection, analysis, and interpretation, often culminating in a comprehensive report or thesis. 
                Research project work serves to advance understanding, address specific research questions, and provide valuable insights, making it a fundamental component of academic, scientific, 
                and professional pursuits across various disciplines.
                </p>

              </details>
            </div>
            {/* Research Project work */}

            {/* Application Project work */}
            <div className='py-5'>

              <details className='group'>
                <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                  <span className='font-semibold text-LegonBlue text-2xl'>Application Project work</span>
                  <span className='transition group-open:rotate-180 text-LegonGold'><VscChevronDown size={24} shapeRendering="geometricPrecision" /></span>
                </summary>

                <p className='mt-4.5 group-open:animate-fadeIn'>
                An application project work refers to the practical development and implementation of software or technology solutions to address real-world problems or challenges. 
                It involves the design, coding, testing, and deployment of applications or systems tailored to meet specific user needs. 
                Application project work often emphasizes hands-on experience, problem-solving, and creativity in designing user-friendly and functional software. 
                It plays a crucial role in the software development industry, fostering innovation and enabling the creation of software applications that enhance efficiency, communication, 
                and convenience in various domains, from mobile apps to web-based platforms.
                </p>

              </details>
            </div>
            {/* Application Project work */}

            {/* Formatting Instructions */}
            <div className='py-5'>

              <details className='group'>
                <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                  <span className='font-semibold text-LegonBlue text-2xl'>Formatting Instructions</span>
                  <span className='transition group-open:rotate-180 text-LegonGold'><VscChevronDown size={24} shapeRendering="geometricPrecision" /></span>
                </summary>

                <p className='mt-4.5 group-open:animate-fadeIn'>
                "Formatting instructions" refer to specific guidelines and rules established to structure and present content in a consistent and organized manner. 
                These instructions encompass various elements, such as font styles, sizes, margins, spacing, citation styles, and page layouts, ensuring that documents or content adhere to a predefined standard. 
                Proper adherence to formatting instructions enhances readability, professionalism, and visual clarity, facilitating effective communication and conveying information in a structured and coherent fashion.
                </p>

              </details>
            </div>
            {/* Formatting Instructions */}
            
            {/* Research Documentation Format */}
            <div className='py-5'>

              <details className='group'>
                <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                  <span className='font-semibold text-LegonBlue text-2xl'>Research Documentation Format</span>
                  <span className='transition group-open:rotate-180 text-LegonGold'><VscChevronDown size={24} shapeRendering="geometricPrecision" /></span>
                </summary>

                <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                Title Page:
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Title of the Research</li>
                    <li className='font-semibold'>2. Author(s) Name(s)</li>
                    <li className='font-semibold'>3. Date of Submission</li>
                    <li className='font-semibold'>4. Institutional Affiliation (if applicable)</li>
                    <li className='font-semibold'>5. Abstract (Brief summary of the research)</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                Title of Contents:
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. List of sections and subsections with page numbers</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Section 1: Introduction
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Purpose of the Research</li>
                    <li className='font-semibold'>2. Research Objectives</li>
                    <li className='font-semibold'>3. Background Information</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Section 2: Literature Review
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Review of Relevant Literature</li>
                    <li className='font-semibold'>2. Identification of Research Gaps</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Section 3: Research Methodology
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Research Design</li>
                    <li className='font-semibold'>2. Data Collection Methods</li>
                    <li className='font-semibold'>3. Data Analysis Techniques</li>
                    <li className='font-semibold'>4. Ethical Considerations (if applicable)</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Section 4: Results
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Presentation of Research Findings</li>
                    <li className='font-semibold'>2. Use Tables, Charts, and Graphs for Clarity</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Section 5: Discussion
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Interpretation of Results</li>
                    <li className='font-semibold'>2. Comparison with Literature</li>
                    <li className='font-semibold'>3. Implications and Significance of Findings</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Section 6: Conclusion
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Summary of Key Findings</li>
                    <li className='font-semibold'>2. Conclusion and Recommendations</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Section 7: References
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. List of Citations in a Standard Format (e.g., APA, MLA)</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Appendices (if applicable)
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Include Supplementary Material (e.g., Questionnaires, Raw Data)</li>
                  </ul>
              </details>
            </div>
            {/* Research Documentation Format */}

            {/* Application Documentation Format */}
            <div className='py-5'>

              <details className='group'>
                <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                  <span className='font-semibold text-LegonBlue text-2xl'>Application Documentation Format</span>
                  <span className='transition group-open:rotate-180 text-LegonGold'><VscChevronDown size={24} shapeRendering="geometricPrecision" /></span>
                </summary>

                <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                Title Page:
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Title of the Project</li>
                    <li className='font-semibold'>2. Project Team Members</li>
                    <li className='font-semibold'>3. Date of Completion</li>
                    <li className='font-semibold'>4. Institutional Affiliation (if applicable)</li>
                    <li className='font-semibold'>5. Abstract (Brief summary of the research)</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                Table of Contents:
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. List of Sections and Subsections with Page Numbers</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Section 1: Introduction
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Purpose of the Project</li>
                    <li className='font-semibold'>2. Project Objectives</li>
                    <li className='font-semibold'>3. Background Information</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Section 2: Project Scope and Planning
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Project Scope Statement</li>
                    <li className='font-semibold'>2. Project Schedule</li>
                    <li className='font-semibold'>3. Resource Allocation</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Section 3: Project Design and Implementation
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. System Architecture</li>
                    <li className='font-semibold'>2. Design Diagrams (e.g., Flowcharts, UML Diagrams)</li>
                    <li className='font-semibold'>3. Development Tools and Technologies Used</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Section 4: Project Execution
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Detailed Description of How the Project Was Implemented</li>
                    <li className='font-semibold'>2. Challenges Encountered and Solutions</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Section 5: Testing and Quality Assurance
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Description of Testing Procedures</li>
                    <li className='font-semibold'>2. Test Results</li>
                    <li className='font-semibold'>3. Quality Control Measures</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Section 6: Results and Deliverables
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Presentation of Project Outcomes</li>
                    <li className='font-semibold'>2. Screenshots, Images, or Examples</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Section 7: Conclusion and Future Work
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Summary of Key Achievements</li>
                    <li className='font-semibold'>2. Lessons Learned</li>
                    <li className='font-semibold'>3. Future Enhancements or Developments</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Section 8: References
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. List of Sources Used in the Project</li>
                  </ul>

                  <p className='mt-4.5 group-open:animate-fadeIn font-extrabold'>
                  Appendices (if applicable)
                </p>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Include Supplementary Material (e.g., Code Snippets, User Manuals)</li>
                  </ul>

              </details>
            </div>
            {/* Application Documentation Format */}

            {/* Formatting Guidelines */}
            <div className='py-5'>

              <details className='group'>
                <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                  <span className='font-semibold text-LegonBlue text-2xl'>Formatting Guidelines</span>
                  <span className='transition group-open:rotate-180 text-LegonGold'><VscChevronDown size={24} shapeRendering="geometricPrecision" /></span>
                </summary>

                <ul className='mt-4 py-2 group-open:animate-fadeIn'>
                    <li className='font-semibold'>1. Use a standard font and font size (e.g., Times New Roman, 12pt)</li>
                    <li className='font-semibold'>2. Maintain consistent formatting for headings, subheadings, and body text</li>
                    <li className='font-semibold'>3. Use bullet points and numbered lists for clarity</li>
                    <li className='font-semibold'>4. Include page numbers in the footer or header</li>
                    <li className='font-semibold'>5. Use a consistent citation style (e.g., APA, MLA) for references</li>
                    <li className='font-semibold'>6. Include a cover page with essential project/research details</li>
                    <li className='font-semibold'>7. Use clear and concise language, avoiding jargon when possible</li>
                    <li className='font-semibold'>8. Ensure all images, charts, and diagrams are labeled and referenced in the text</li>
                  </ul>

              </details>
            </div>
            {/* Formatting Guidelines */}

            {/* Template */}
            <div className='py-5'>

              <details className='group'>
                <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                  <span className='font-semibold text-LegonBlue text-2xl'>Template</span>
                  <span className='transition group-open:rotate-180 text-LegonGold'><VscChevronDown size={24} shapeRendering="geometricPrecision" /></span>
                </summary>

                <p className='mt-4.5 group-open:animate-fadeIn'>
                A template, in its current context, is a pre-designed layout or structure that serves as a starting point for creating consistent and professional documents. 
                Templates provide a framework for organizing content, such as text, images, and other elements, in a visually appealing and organized manner. 
                They are widely used in various applications, from word processing software to graphic design tools, to streamline the document creation process. 
                Templates save time and effort by offering predefined styles, fonts, and formatting guidelines, ensuring that documents adhere to a specific visual theme or brand identity. 
                They are invaluable tools for achieving uniformity and efficiency in document production across various industries and purposes.
                </p>

                <p className='mt-4.5 font-bold text-red-700'>
                NOTE: Here is a list of links where you can download the various document in different formats.
                </p>

              <div className='mt-6.5'>
                <h4 className='mb-3.5 font-bold text-center text-LegonBlue'>Download Research Project Work Template</h4>

                <div className='flex items-center justify-center gap-3.5'>
                  <button className='flex items-center gap-1 bg-LegonGold p-3 hover:bg-LegonBlue hover:text-LegonGold font-bold rounded' onClick={showResearchTemplateResponse}> Download
                  <VscCloudDownload className='fill-current text-white hover:text-white' size={23} />
                  </button>
                </div>

              </div>

              <div className='mt-6.5'>
                <h4 className='mb-3.5 font-bold text-center text-LegonBlue'>Download Application Project Work Template</h4>

                <div className='flex items-center justify-center gap-3.5'>
                <button className='flex items-center gap-1 bg-LegonGold  p-3 hover:bg-LegonBlue hover:text-LegonGold font-bold rounded' onClick={showApplicationTemplateResponse}> Download
                  <VscCloudDownload className='fill-current text-white hover:text-white' size={23} />
                  </button>
                </div>
                
              </div>

              </details>
              
            </div>
            {/* Template */}

            
          </div>

        </div>
    </StudentLayout>
  )
}

export default DocumentationTemplate
