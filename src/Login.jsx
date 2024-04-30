import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="w-[430px] bg-[var(--white-color)] shadow-xl rounded-xl p-[30px]">
                <h1 className="text-[var(--text-color)] text-[26px] font-semibold leading-8">Đăng nhập</h1>
                <a
                    href="#!"
                    className="border-[var(--border-color)] p-[11px] rounded-md border-2 flex items-center mt-[30px]"
                >
                    <div className="flex items-center justify-center bg-[#0866ff] w-6 h-6 rounded-full ">
                        <img src="../src/assets/icon/facebook.svg" alt="" className="w-[10px]" />
                    </div>
                    <span className="text-[#575363] text-[16px] grow">Tiếp tục với Facebook</span>
                </a>
                <a
                    href="#!"
                    className="border-[var(--border-color)] p-[11px] rounded-md border-2 flex items-center mt-[30px]"
                >
                    <div>
                        <img src="../src/assets/icon/google.svg" alt="" className="w-[20px]" />
                    </div>
                    <span className="text-[#575363] text-[16px] grow">Tiếp tục với Google</span>
                </a>
                <a
                    href="#!"
                    className="border-[var(--border-color)] p-[11px] rounded-md border-2 flex items-center mt-[30px]"
                >
                    <div>
                        <img src="../src/assets/icon/apple.svg" alt="" className="w-[20px]" />
                    </div>
                    <span className="text-[#575363] text-[16px] grow">Tiếp tục với Apple</span>
                </a>
                <span className="uppercase text-[#575363] text-[16px] my-5 block">Hoặc</span>
                <form action="">
                    <div className="border-[var(--border-color)] p-[15px] rounded-md border-2 flex ">
                        <input
                            type="text"
                            placeholder="Email"
                            className="outline-none border-none grow text-[var(--text-color)]"
                        />
                    </div>
                    <div className="border-[var(--border-color)] p-[15px] rounded-md border-2 flex mt-5">
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            className="outline-none border-none grow text-[var(--text-color)]"
                        />
                    </div>

                    <button className="text-[#575363b3] text-[16px] flex ml-auto mt-3">Quên mật khẩu</button>
                    <button className="rounded-md bg-[var(--btn-bg-color)] w-full p-[15px] mt-5">Đăng Ký</button>
                    <span className="text-[#575363b3] text-[14px] mt-2 block">
                        Bạn chưa có tài khoản?{" "}
                        <Link to={"Signup"} className="text-[#191720] font-semibold">
                            Đăng ký
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Login;
