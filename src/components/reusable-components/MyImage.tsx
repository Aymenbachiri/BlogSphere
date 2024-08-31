import type {
  PlaceholderValue,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type MyImageProps = {
  src: string | StaticImport;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  placeholder?: PlaceholderValue;
};

export default function MyImage({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  priority,
  placeholder,
  ...rest
}: MyImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      priority={priority}
      placeholder={placeholder}
      {...rest}
    />
  );
}
