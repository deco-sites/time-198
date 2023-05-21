import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  button?: {
    label: string;
    href: string;
    target?: string;
  };
}

function HeroBanner({
  title = "",
  description,
  image,
  button,
}: Props) {
  if (!image) return null;

  return (
    <div className="w-full h-[380px] relative">
      <div className="flex flex-col items-center py-10 px-6 backdrop-blur-sm text-base-500 absolute top-1/2 right-24 transform -translate-y-1/2 bg-white outline outline-offset-2 outline-white">
        <h2 className="text-xl">{title}</h2>
        {description ? <p className="text-sm">{description}</p> : null}
        {button
          ? (
            <a href={button.href} target={button.target}>
              <button className="btn btn-outline btn-sm rounded-none mt-4 font-normal">
                {button.label}
              </button>
            </a>
          )
          : null}
      </div>
      <Image
        className="w-full h-full object-cover"
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default HeroBanner;
