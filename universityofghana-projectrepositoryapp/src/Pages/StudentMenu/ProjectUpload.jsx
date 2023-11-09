import React, { useState } from 'react'
import { VscChevronDown, VscFolderLibrary} from "react-icons/vsc";
import DefaultLayout from '../../Layout/DefaultLayout';
import axios from 'axios';
import Swal from 'sweetalert2';
import StudentLayout from '../../Layout/StudentLayout';


function ProjectUpload() {
  /* const [formData, setFormData] = useState({
    studentSubmissionID: 0,
    studentID: '',
    studentEmail: '',
    studentContact: '',
    firstName: '',
    lastName: '',
    middleName: '',
    gender: '',
    dateOfBirth: '',
    department: '',
    courseCode: '',
    supervisor: '',
    projectTitle: '',
    projectDescription: ''
  }); */

  
  const [formData, setFormData] = useState({
    Student_Submission_ID: 0,
    Student_ID: ' ',
    Student_Email: ' ',
    Student_Contact: ' ',
    First_Name: ' ',
    Middle_Name: ' ',
    Last_Name: ' ',
    Supervisor_Value: 0,
    Department_Value: 0,
    CourseCode_Value: 0,
    Project_Title: ' ',
    Project_Description: ' ',
    Submission_Date: dateFormat() ,
    Submission_Status: 'Pending',
    Project_File_Name: null,
    Project_File:  null,
    Supervisor_Commentary: ' ',
    Supervisor_Rating: 0
  });


  function dateFormat() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    const hours = ('0' + currentDate.getHours()).slice(-2);
    const minutes = ('0' + currentDate.getMinutes()).slice(-2);
    const seconds = ('0' + currentDate.getSeconds()).slice(-2);

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
  }
  
  console.log(dateFormat)

  const uploadMessage = Swal.mixin({
    showConfirmButton: false,
    timer: 3000,
    showCancelButton: false,
  })

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFormData({ ...formData, Project_File: selectedFile });
    }
  };
  

  const handleUpload = (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) 
    {
      data.append(key, formData[key]);
    }

    axios.post('https://localhost:5001/api/StudentSubmission', data)
    .then((response) => {

      console.log(response);

      uploadMessage.fire ({
        icon: 'success',
        imageUrl: '/UGRepositoryLogo.png',
        imageWidth: '150px',
        text: 'Project has been successfully submitted!'
      })
    })
    .catch((error) => {
      console.error(error);

      uploadMessage.fire ({
        icon: 'error',
        title: 'Project could not be submitted!',
        text: 'An error occured submitting your project. Please try again.👌🤦‍♂️'
      })
    })
  }



  return (
    
    <StudentLayout>
      <div className='overflow-hidden rounded-sm border border-LegonContainer bg-white shadow-default'>
        <div className='px-4 pb-6 text-center lg:pb-8 xl:pb-11.5'>

          <div className='border-b border-LegonGold py-4 px-6.5'>
            <img className='mx-auto my-6 h-32 sm:h-32 w-auto' src='/UGRepositoryLogo.png' alt='University Of Ghana Logo' />
            <h1 className='font-bold text-2xl text-black text-center'>Project Upload</h1>
          </div>

        </div>

        <div className='col-span-12 xl:col-span-8'>
          <div className='flex flex-col gap-9'>

            <form onSubmit={handleUpload} method='POST'>

              <div className='p-6.5'>

                <div className='mb-2.5 block  text-LegonText'>
                  <label  className='mb-2.5 block font-medium text-black'>Student ID</label>
                  <input required value={formData.Student_ID} onChange={(e) => setFormData({ ...formData, Student_ID: e.target.value })} type='text' placeholder='Student ID' title='Student ID' id='studentID' name='Student_ID' className='w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition focus:border-LegonGold active:border-LegonGold disabled:cursor-default disabled:bg-white' />
                </div>
                
                <div className= 'mb-5.5 flex flex-col gap-5.5 sm:flex-row'>

                  <div className='w-full sm:w-1/2'>
                    <label className='mb-3 block text-sm font-medium text-black' htmlFor='studentEmail'>Student Emaill</label>
                    <div className='relative'>
                      <input required value={formData.Student_Email} onChange={(e) => setFormData({ ...formData, Student_Email: e.target.value })} className='w-full rounded border outline-none bg-white font-medium py-3 pl-11.5 pr-4.5 text-LegonText focus:border-LegonGold focus-visible:outline-none' type='email' title='Student Email' name='studentEmail' id='studentEmail' placeholder='Student Email'  />
                    </div>
                  </div>

                  <div className='w-full sm:w-1/2'>
                    <label className='mb-3 block text-sm font-medium text-LegonText' htmlFor='studentPhone'>Student Contact</label>
                    <div className='relative'>
                      <input required value={formData.Student_Contact} onChange={(e) => setFormData({ ...formData, Student_Contact: e.target.value })} className='w-full rounded border outline-none bg-white font-medium py-3 pl-11.5 pr-4.5 text-LegonText focus:border-LegonGold focus-visible:outline-none' type='text' title='Student Contact' name='studentContact' id='studentContact' placeholder='Student Contact'  />
                    </div>
                  </div>


                </div>

                <div className='mb-5.5 flex flex-col gap-5.5 sm:flex-row'>

                      <div className='w-full sm:w-1/2'>
                      <label className='mb-3 block text-sm font-medium text-LegonText' htmlFor='fullName'>First Name</label>
                        <div className='relative'>
                         <input required value={formData.First_Name} onChange={(e) => setFormData({ ...formData, First_Name: e.target.value })} className='w-full rounded border outline-none bg-white font-medium py-3 pl-11.5 pr-4.5 text-LegonText focus:border-LegonGold focus-visible:outline-none' type='text' title='First Name' name='firstName' id='firstName' placeholder='First Name' />
                          </div>
                      </div>

                        <div className='w-full sm:w-1/2'>
                            <label className='mb-3 block text-sm font-medium text-LegonText' htmlFor='fullName'>Last Name</label>
                            <div className='relative'>
                                <input required value={formData.Last_Name} onChange={(e) => setFormData({ ...formData, Last_Name: e.target.value })} className='w-full rounded border outline-none bg-white font-medium py-3 pl-11.5 pr-4.5 text-LegonText focus:border-LegonGold focus-visible:outline-none' type='text' title='Last Name' name='lastName' id='lastName' placeholder='Last Name' />
                            </div>
                        </div>

                        <div className='w-full sm:w-1/2'>
                            <label className='mb-3 block text-sm font-medium text-LegonText' htmlFor='fullName'>Middle Name</label>
                            <div className='relative'>
                                <input required value={formData.Middle_Name} onChange={(e) => setFormData({ ...formData, Middle_Name: e.target.value })} className='w-full rounded border outline-none bg-white font-medium py-3 pl-11.5 pr-4.5 text-LegonText focus:border-LegonGold focus-visible:outline-none' type='text' title='Middle Name' name='lastName' id='middleName' placeholder='Middle Name' />
                            </div>
                        </div>
                </div>

               {/*  <div className='mb-4.5'>
                  <label className='mb-2.5 block font-medium text-LegonText'>Gender</label>
                  <div className='relative z-20 bg-transparent text-LegonText'>
                    <select required value={formData.gender} onChange={(e)=> setFormData({...formData, gender:e.target.value})} className='relative z-20 w-full appearance-none rounded border border-LegonContainer bg-transparent py-3 px-5 outline-none transition focus:border-LegonGold active:border-LegonGold'>
                      <option value=''>Select an option from here*</option>
                      <option value='male'> Male</option>
                      <option value='female'> Female</option>
                    </select>
                    <span className='absolute top-1/2 right-4 z-30 -translate-y-1/2'><VscChevronDown className='fill-current' size={24} /></span>
                  </div>
                </div> */}

                {/* <div className='mb-2.5 block'>
                  <label className='mb-2.5 block font-medium text-LegonText'>Date Of Birth</label>
                  <input required value={formData.dateOfBirth} onChange={(e)=> setFormData({...formData, dateOfBirth:e.target.value})} type='date' className='w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition focus:border-LegonGold active:border-LegonGold disabled:cursor-default disabled:bg-white' />
                </div> */}

                <div className='mb-4.5'>
                  <label className='mb-2.5 block font-medium text-LegonText'>Department</label>
                  <div className='relative z-20 bg-transparent text-LegonText'>
                    <select required value={formData.Department_Value} onChange={(e) => setFormData({ ...formData, Department_Value: e.target.value })} className='relative z-20 w-full appearance-none rounded border border-LegonContainer bg-transparent py-3 px-5 outline-none transition focus:border-LegonGold active:border-LegonGold'>
                      <option value=''>Select an option from here*</option>
                      <option value='1'>1. Department Of Computer Science</option>
                      <option value='2'>2. Department Of Biology</option>
                      <option value='3'>3. Department Of History</option>
                      <option value='4'>4. Department Of Chemistry</option>
                      <option value='5'>5. Department Of Mathematics</option>
                    </select>
                    <span className='absolute top-1/2 right-4 z-30 -translate-y-1/2'><VscChevronDown className='fill-current' size={24} /></span>
                  </div>
                </div>

                <div className='mb-4.5'>
                  <label className='mb-2.5 block font-medium text-LegonText'>Course Code</label>
                  <div className='relative z-20 bg-transparent text-LegonText'>
                    <select required value={formData.CourseCode_Value} onChange={(e) => setFormData({ ...formData, CourseCode_Value: e.target.value })} className='relative z-20 w-full appearance-none rounded border border-LegonContainer bg-transparent py-3 px-5 outline-none transition focus:border-LegonGold active:border-LegonGold'>
                      <option value=''>Select an option from here*</option>
                      <option value='1'>1.	CS101	(Introduction to Computer Science)</option>
                      <option value='2'>2. BIO101	(General Biology)</option>
                      <option value='3'>3. HIST101	(World History)</option>
                      <option value='4'>4. CHEM101	(Chemical Principles)</option>
                      <option value='5'>5. MATH101	(Calculus I)</option>
                      <option value='6'>6. ENG101	(English Composition)</option>
                      <option value='7'>7. PHYS101	(Physics Fundamentals)</option>
                      <option value='8'>8. PSYCH101 (Introduction to Psychology)</option>
                      <option value='9'>9. SOC101	(Introduction to Sociology)</option>
                      <option value='10'>10. ART101	(Art History)</option>
                      <option value='11'>11. ECON101 (Principles of Economics)</option>
                      <option value='12'>12. PHIL101 (Introduction to Philosophy)</option>
                      <option value='13'>13. MUS101	(Music Appreciation)</option>
                      <option value='14'>14. SPAN101 (Spanish Language I)</option>
                      <option value='15'>15. FREN101 (French Language I)</option>
                      <option value='16'>16. GEOG101 (Geography of the World)</option>
                      <option value='17'>17. MKTG101	(Marketing Fundamentals)</option>
                      <option value='18'>18. COMM101	(Communication Studies)</option>
                      <option value='19'>19. CHEM102	(Organic Chemistry)</option>
                      <option value='20'>20. MATH102	(Calculus II)</option>
                    </select>
                    <span className='absolute top-1/2 right-4 z-30 -translate-y-1/2'><VscChevronDown className='fill-current' size={24} /></span>
                  </div>
                </div>

                <div className='mb-4.5'>
                  <label className='mb-2.5 block font-medium text-LegonText'>Supervisor</label>
                  <div className='relative z-20 bg-transparent text-LegonText'>
                    <select required value={formData.Supervisor_Value} onChange={(e) => setFormData({ ...formData, Supervisor_Value: e.target.value })} className='relative z-20 w-full appearance-none rounded border border-LegonContainer bg-transparent py-3 px-5 outline-none transition focus:border-LegonGold active:border-LegonGold'>
                    <option value=''>Select an option from here*</option>
                      <option value='1'>1. Micheal K kolugu</option>
                      <option value='2'>2. John Smith</option>
                      <option value='3'>3. Emily Johnson</option>
                      <option value='4'>4. Micheal Williams</option>
                      <option value='5'>5. Sophia Brown</option>
                      <option value='6'>6. William Jones</option>
                      <option value='7'>7. Olivia Davis</option>
                      <option value='8'>8. Benjamin Miller</option>
                      <option value='9'>9. Ava Wilson</option>
                      <option value='10'>10. Ethan Moore</option>
                      <option value='11'>11. Mia Taylor</option>
                    </select>
                    <span className='absolute top-1/2 right-4 z-30 -translate-y-1/2'><VscChevronDown className='fill-current' size={24} /></span>
                  </div>
                </div>

                <div className='mb-2.5 block text-LegonText'>
                  <label className='mb-2.5 block font-medium text-black'>Project Title</label>
                  <input required value={formData.Project_Title} onChange={(e) => setFormData({ ...formData, Project_Title: e.target.value })} type='text' placeholder='Project Title' name='projectTitle' title='Project Title' id='projectTitle' className='w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition focus:border-LegonGold active:border-LegonGold disabled:cursor-default disabled:bg-white' />
                </div>

                <div className='mb-6'>
                  <label className='mb-2.5 block font-medium text-LegonText'>Project Description</label>
                  <textarea required value={formData.Project_Description} onChange={(e) => setFormData({ ...formData, Project_Description: e.target.value })} rows='6' /* maxLength={1} */ placeholder='Type your Project Description here' className='w-full rounded border-[1.5px] border-LegonContainer bg-transparent py-3 px-5 font-medium outline-none transition focus:border-LegonGold active:border-LegonGold disabled:cursor-default disabled:bg-LegonContainer'></textarea>
                </div>

                

                <div className='mt-5 mb-2.5 block'>
                  <label className='mb-2.5 block font-medium text-LegonText'>Upload Project</label>

                  <div id='FileUpload' className='relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-LegonGold bg-LegonContainer py-4 px-4 sm:py-7.5'>

                    <input type='file' onChange={(e) => handleFileSelect(e)} accept='image/*, .pdf, .doc, .docx, .rar' className='absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none'/>

                    <div className='flex flex-col items-center justify-center space-y-3'>
                      <span className='flex h-10 w-10 items-center justify-center rounded-full border border-LegonGold bg-white'>
                        <VscFolderLibrary className='fill-current text-LegonGold' size={20}/>
                      </span>
                      <p>
                        <span className='text-LegonGold bg-LegonBlue rounded-full px-2 py-1'>Click to upload</span> or
                        drag and drop
                      </p>
                      <p className='mt-1.5'>ZIP or RAR</p>
                      <p>(Max Size: 100MB)</p>
                    </div>
                  </div>

                </div>

{/* <input 
  type="file" 
  accept="image/*, .pdf, .doc, .docx" 
  onChange={handleFileSelect}
/> */}


                <div className='mt-5 mb-5 flex items-center border-LegonGold border-t border-b my-4 p-2'>
                  <label>I accept i did this project of my own violition. If found otherwise, I shall rescind it and face any punishment meted out to me. </label>
                  <input type="checkbox" size={20} className='ml-2' required/>
                </div>

                <button type='submit' className='flex w-full justify-center rounded bg-LegonGold p-3 font-medium'>Submit</button>

              </div>
            </form>

          </div>
        </div>

      </div>
    </StudentLayout>
  )
}

export default ProjectUpload
