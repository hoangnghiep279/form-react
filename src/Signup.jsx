import { Link } from "react-router-dom";
const Signup = () => {
    return (
        <div>
            <div className="w-[430px] bg-[var(--white-color)] shadow-xl rounded-xl p-[20px]">
                <h1 className="text-[var(--text-color)] text-[1.6rem] font-semibold leading-6">Sign In</h1>
                <a
                    href="#!"
                    className="border-[var(--border-color)] p-[11px] rounded-md border-2 flex items-center mt-[15px]"
                >
                    <div className="flex items-center justify-center bg-[#0866ff] w-6 h-6 rounded-full ">
                        <img src="../src/assets/icon/facebook.svg" alt="" className="w-[10px]" />
                    </div>
                    <span className="text-[var(--text-second-color)] text-base grow">Tiếp tục với Facebook</span>
                </a>
                <a
                    href="#!"
                    className="border-[var(--border-color)] p-[11px] rounded-md border-2 flex items-center mt-[15px]"
                >
                    <div>
                        <img src="../src/assets/icon/google.svg" alt="" className="w-[20px]" />
                    </div>
                    <span className="text-[var(--text-second-color)] text-base grow">Tiếp tục với Google</span>
                </a>
                <a
                    href="#!"
                    className="border-[var(--border-color)] p-[11px] rounded-md border-2 flex items-center mt-[15px]"
                >
                    <div>
                        <img src="../src/assets/icon/apple.svg" alt="" className="w-[20px]" />
                    </div>
                    <span className="text-[var(--text-second-color)] text-base grow">Tiếp tục với Apple</span>
                </a>
                <span className="uppercase text-[var(--text-second-color)] text-base my-2 block">Hoặc</span>
                <form action="">
                    <div className="border-[var(--border-color)] p-[15px] rounded-md border-2 flex ">
                        <input
                            type="text"
                            placeholder="Họ"
                            className="outline-none border-none grow text-[var(--text-color)]"
                        />
                    </div>
                    <div className="border-[var(--border-color)] p-[15px] rounded-md border-2 flex  mt-3">
                        <input
                            type="text"
                            placeholder="Tên"
                            className="outline-none border-none grow text-[var(--text-color)]"
                        />
                    </div>
                    <div className="border-[var(--border-color)] p-[15px] rounded-md border-2 flex  mt-3">
                        <input
                            type="text"
                            placeholder="Email"
                            className="outline-none border-none grow text-[var(--text-color)]"
                        />
                    </div>
                    <div className="border-[var(--border-color)] p-[15px] rounded-md border-2 flex mt-3">
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            className="outline-none border-none grow text-[var(--text-color)]"
                        />
                    </div>

                    <button className="rounded-md bg-[var(--btn-bg-color)] w-full p-[15px] mt-7">Đăng Nhập</button>
                    <span className="text-[#575363b3] text-sm mt-2 block ">
                        Bạn đã có tài khoản?
                        <Link to={"/"} className="text-[var(--text-color)] font-semibold">
                            Đăng nhập
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Signup;
