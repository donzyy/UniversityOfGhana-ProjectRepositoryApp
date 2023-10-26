import React from 'react'

const EvaluationandCommentModal = ({isEvaluationVisible, onEvaluationClose}) => {

    if (!isEvaluationVisible) return null;

    const handleEvalutionClose = (e) => {
        if (e.target.id === 'EvalutionWrapper') onEvaluationClose();
    }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='EvalutionWrapper' onClick={handleEvalutionClose}>
      <div className='w-[600px] flex flex-col'>
        <button className='text-white  text-xl place-self-end' onClick={onEvaluationClose}>X</button>
        <div className='bg-white p-2 rounded'>
            Evaluation Modal
        </div>
      </div>
    </div>
  )
}

export default EvaluationandCommentModal
