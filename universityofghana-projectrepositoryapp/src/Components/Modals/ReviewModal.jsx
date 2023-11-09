import React, {useState} from 'react'
import * as Dialog from "@radix-ui/react-dialog";
import { VscCommentDiscussion, VscStarEmpty } from 'react-icons/vsc';
import axios from 'axios';
import Swal from 'sweetalert2';

const ReviewModal = ({submissionID}) => {
  const [selectedRating, setselectedRating] = useState(0);
  const [commentary, setCommentary] = useState('')
  const stars = Array(5).fill(0);

  //console.log(submissionID)
  //console.log(selectedRating)
  //console.log(commentary)
  
  const handRatingSelect =(rating) => {
    setselectedRating(rating);
  }

  const notificationMessage = Swal.mixin({
    showConfirmButton: false,
    timer: 6000,
    showCancelButton: false,
  })

  const handleReviewModal = () => {
    axios.put(`https://localhost:5001/api/StudentSubmission/${submissionID}/commentaryandrating?commentary=${commentary}&rating=${selectedRating}`)
    .then(response => {
     console.log('Rating and commentary sent succesfully', response.data)
     notificationMessage.fire({
        icon: 'success',
        imageUrl: '/UGRepositoryLogo.png',
        imageWidth: '150px',
        text: 'You have succesfully Reviewed the project'
      })
    })
    .catch(error => {
        console.error('An error occured', error)
        notificationMessage.fire({
        icon: 'error',
        title: 'An Error occured whiles Reviewing the project',
        timer: '6000',
        text: 'Please try again in a few moments'
        })
    })
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="flex items-center space-x-3.5">
        <button className="text-LegonBlue hover:text-purple-600">
        <VscCommentDiscussion className='fill-current' title='Commentary and Rating' size={18}  />
        </button>
        </div>
      </Dialog.Trigger>
      
      <Dialog.Portal>

        <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-40" />

        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4">

          <div className='bg-white rounded-md shadow-lg px-4 py-6'>

            {/* <div className='flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full'></div> */}
              {/* <VscCheck className = "w-5 h-5 text-green-600" size={20} fill="currentColor" /> */}
              <div className='border-b border-LegonGold py-4 px-6.5'>
              <img className='mx-auto my-6 h-22 sm:h-32 w-auto' src='/UGRepositoryLogo.png' alt='University Of Ghana Logo' />
              </div>
            

            <Dialog.Title className="text-lg font-medium text-gray-800 text-center mt-3">
            {" "}
            Rate Project and Give Commentary 
            </Dialog.Title>

            <Dialog.Description className="mt-1 text-sm leading-relaxed text-center text-gray-500">
              <div className="items-center gap-2 mx-39 mt-3 sm:flex">
              {/* <StarRating selectedRating={selectedRating} onRatingSelect={handRatingSelect} /> */}
              <div className="flex items-center mb-5">
                  {stars.map((_, index) => {
                    const starRating = index + 1;
                    return (
                      <VscStarEmpty
                        key={index}
                        size={24}
                        onClick={() => handRatingSelect(starRating)}
                        className={`cursor-pointer ${
                          starRating <= selectedRating ? 'text-yellow-400' : 'text-gray-400'
                        }`}
                      />
                    );
                  })}
              </div>
              </div>
              <textarea required placeholder='Type your Commentary Here' className='w-full rounded border-[1.5px] border-LegonContainer bg-transparent py-3 px-5 font-medium outline-none transition focus:border-LegonGold active:border-LegonGold disabled:cursor-default disabled:bg-LegonContainer' value={commentary} onChange={(e) => setCommentary(e.target.value)}></textarea>
            </Dialog.Description>

            <div className='items-center gap-2 mt-3 text-sm sm:flex'>
              <Dialog.Close asChild>
                <button onClick={handleReviewModal} className='w-full mt-2 p-2.5 flex-1 text-white bg-LegonGold rounded-md outline-none ring-offset-2 ring-LegonBlue focus:ring-2'>Submit</button>
              </Dialog.Close>

              <Dialog.Close asChild>
                <button className='"w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-LegonGold focus:ring-2" aria-label="Close'>Cancel</button>
              </Dialog.Close>
            </div>

          </div>
        </Dialog.Content>

      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ReviewModal
