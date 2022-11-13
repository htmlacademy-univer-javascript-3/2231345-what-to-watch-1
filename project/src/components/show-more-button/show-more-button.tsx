type ShowMoreButtonProps = {
  onClick: () => void
}


export default function ShowMoreButton({onClick}: ShowMoreButtonProps) {
  return (
    <div className="catalog__more">
      <button onClick={onClick} className="catalog__button" type="button">Show more</button>
    </div>
  );
}
