import images from './Images';

type PictureProps = {
  imgName: string;
  className: string;
};

function Picture({ imgName, className }: PictureProps) {
  return (
    <div className={className}>
      <picture>
        <source
          type="image/webp"
          srcSet={`${images[imgName].webpSmall}, ${images[imgName].webpBig} 2x`}
        />
        <img
          src={`${images[imgName].pngSmall}`}
          srcSet={`${images[imgName].pngBig} 2x`}
          width="1102"
          height="653"
          alt="Коллаж со скриншотами Авито"
          loading="lazy"
        />
      </picture>
    </div>
  );
}

export default Picture;
