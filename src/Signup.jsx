import { Link } from "react-router-dom";
const Signup = () => {
    return (
        <div>
            <div className="w-[430px] bg-[#fff] shadow-xl rounded-xl p-[20px]">
                <h1 className="text-[#191720] text-[26px] font-semibold leading-6">Sign In</h1>
                <a href="#!" className="border-[#19172059] p-[11px] rounded-md border-2 flex items-center mt-[15px]">
                    <div className="flex items-center justify-center bg-[#0866ff] w-6 h-6 rounded-full ">
                        <img src="../src/assets/icon/facebook.svg" alt="" className="w-[10px]" />
                    </div>
                    <span className="text-[#575363] text-[16px] grow">Continue with Facebook</span>
                </a>
                <a href="#!" className="border-[#19172059] p-[11px] rounded-md border-2 flex items-center mt-[15px]">
                    <div>
                        <img src="../src/assets/icon/google.svg" alt="" className="w-[20px]" />
                    </div>
                    <span className="text-[#575363] text-[16px] grow">Continue with Facebook</span>
                </a>
                <a href="#!" className="border-[#19172059] p-[11px] rounded-md border-2 flex items-center mt-[15px]">
                    <div>
                        <img src="../src/assets/icon/apple.svg" alt="" className="w-[20px]" />
                    </div>
                    <span className="text-[#575363] text-[16px] grow">Continue with Facebook</span>
                </a>
                <span className="uppercase text-[#575363] text-[16px] my-2 block">or</span>
                <form action="">
                    <div className="border-[#19172059] p-[15px] rounded-md border-2 flex ">
                        <input
                            type="text"
                            placeholder="First name"
                            className="outline-none border-none grow text-[#191720]"
                        />
                    </div>
                    <div className="border-[#19172059] p-[15px] rounded-md border-2 flex  mt-3">
                        <input
                            type="text"
                            placeholder="Email"
                            className="outline-none border-none grow text-[#191720]"
                        />
                    </div>
                    <div className="border-[#19172059] p-[15px] rounded-md border-2 flex  mt-3">
                        <input
                            type="text"
                            placeholder="Last name"
                            className="outline-none border-none grow text-[#191720]"
                        />
                    </div>
                    <div className="border-[#19172059] p-[15px] rounded-md border-2 flex mt-3">
                        <input
                            type="password"
                            placeholder="Password"
                            className="outline-none border-none grow text-[#191720]"
                        />
                    </div>

                    <button className="rounded-md bg-[#572af8] w-full p-[15px] mt-7">Sign in</button>
                    <span className="text-[#575363b3] text-[14px] ">
                        Have an account?
                        <Link to={"/"} className="text-[#191720] font-semibold">
                            Sign In
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Signup;
