interface HeaderButtonProps {
  text: string;
}

function onClick(text: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e.preventDefault();
  console.log(text + ' clicked');
}

export default function HeaderButton({ text }: HeaderButtonProps) {
  return (
    <button
      onClick={(e) => onClick(text, e)}
      className='px-2 py-3 font-bold transition-all duration-200 border-2 rounded-lg border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black'
    >
      {text}
    </button>
  );
}
