import Button from './components/Button';
import CheckBox from './components/CheckBox';
import Input from './components/Input';

const App = () => {
  return (
    <>
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="inter flex flex-col items-center justify-center gap-4 p-6 border border-[#4f4f4f] rounded-md shadow-md max-w-md mx-auto bg-white mt-10">
          <h1 className="text-left w-full text-2xl font-bold text-zinc-600">
            Sign Into App
          </h1>
          <p>Please enter your details to continue.</p>

          <Input type="text" placeholder="Enter Your Name" />
          <Input type="text" placeholder="someone@example.com" />
          <Input type="text" placeholder="Enter Password" />
          <CheckBox type="checkbox">
            I agree with <strong>terms</strong> and <strong>policies</strong>
          </CheckBox>
          <Button
            type="button"
            name="add-btn"
            className="bg-[#4F4F4F] "
            value="add"
            disabled={false}
          >
            Sign In
          </Button>
          <Button
            type="button"
            name="add-btn"
            className="bg-[#ffffff] text-black  border border-[#4f4f4f] "
            value="add"
            disabled={false}
          >
            Go To Login
          </Button>
        </div>
      </div>
    </>
  );
};
export default App;
