type TInputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> & {
  type: 'text' | 'password' | 'email' | 'number' | 'date';
};
const Input = (props: TInputProps) => {
  const { ...rest } = props;
  return (
    <>
      <input
        className="inter w-[240px] h-[44px] text-sm border border-[#4f4f4f]
      py-[13.5] px-[16px] rounded-lg placeholder-[#acacac] "
        {...rest}
      />
    </>
  );
};
export default Input;
