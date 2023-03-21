import Button from '../button/Button';

interface ReviewFormProps {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  revText: string;
  labelText: string;
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function ReviewForm({ handleSubmit, revText, labelText, defaultValue, onChange }: ReviewFormProps) {
  return (
    <form className='flex flex-col w-full'>
      <label>{labelText}</label>
      <textarea
        className='w-full p-3 my-4 text-black rounded-md outline-none'
        rows={3}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      <div>
        <Button text='Submit' onClick={handleSubmit} />
      </div>
    </form>
  );
}
