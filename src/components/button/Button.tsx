interface HeaderButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function HeaderButton({ text, onClick }: HeaderButtonProps) {
  return (
    <button
      onClick={(e) => onClick(e)}
      className='px-2 py-3 font-bold transition-all duration-200 border-2 rounded-lg border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black'
    >
      {text}
    </button>
  );
}
