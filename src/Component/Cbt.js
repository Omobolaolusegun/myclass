import React from "react";
import availableQuestion from "./question";
const question = availableQuestion;

const Cbt = () => {
  return (
    <>
      
      {
      question.map((each, i) => (
        <div key={i} className={`bg-secondary-subtle border border-green border-3 col-lg-6 m-auto mt-3 shadow rounded text-center p-2 m-3 fw-bold fs-2`}>
          <div className="test-start">
            <div>
              {i + 1}. {each.question}
            </div>
            <div>A. {each.A}</div>
            <div>B. {each.B}</div>
            <div>C. {each.C}</div>
            <div>D. {each.D}</div>
            <div className={`bg-primary`}>
            ans: {each.answer}
            </div>
           
          </div>
        </div>
      ))
      }
    </>
  );
};

export default Cbt;
