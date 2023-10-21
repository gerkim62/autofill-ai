import { ReactElement } from 'react'; 
import { FaQuestion } from 'react-icons/fa';

interface Props {
  question: string;
  answer: string;
}

export default function Faq({ question, answer }: Props): ReactElement {

  return (
    <div className="my-2 mx-4 p-4 rounded-lg -ml-5">
      <div className="flex items-center text-pink-500">
        <FaQuestion className="mr-2" /> 
        <h3 className="text-lg font-medium">{question}</h3>
      </div>

      <p className="mt-2 text-gray-700">
        {answer}
      </p>
    </div>
  );
}