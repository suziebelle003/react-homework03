import { twMerge } from 'tailwind-merge';
type TButtonProps = React.ComponentPropsWithoutRef<'button'>;

const Button = (props: TButtonProps) => {
  const { children, className, ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          `inter text-sm text-white font-medium rounded-lg w-[240px] h-[44px]`,
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
