import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom"

const SignupForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ));
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Incorrect Password");
            return;
        }
        setIsLoggedIn(true);
        navigate("/dashboard");
        toast.success("Account created successfully");
    }

    return (
        <div>

            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button
                    className={`${accountType === "student" ?
                        "bg-richblack-900 text=richblack-5" :
                    "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("student")}>
                    Student
                </button>
                <button
                    className={`${accountType === "instructor" ?
                    "bg-richblack-900 text=richblack-5" :
                    "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                
                <div className='flex justify-between mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            First Name
                            <sup className='text-pink-200'>*</sup>
                        </p>
                        <input 
                            required
                            type='text'
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full 
                            p-[12px]'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Last Name
                            <sup className='text-pink-200'>*</sup>
                        </p>
                        <input 
                            required
                            type='text'
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full 
                            p-[12px]'
                        />
                    </label>
                </div>

                <div className='mt-[20px]'>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Email
                            <sup className='text-pink-200'>*</sup>
                        </p>
                        <input 
                            required
                            type='text'
                            name='email'
                            onChange={changeHandler}
                            placeholder='Enter your Email'
                            value={formData.email}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full 
                            p-[12px]'
                        />
                    </label>
                </div>
                    
                <div className='w-full flex mt-[20px]'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Create Password
                            <sup className='text-pink-200'>*</sup>
                        </p>
                        <input 
                            required
                            type={isShowPassword ? ("text") : ("password")}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter a new password'
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full 
                            p-[12px]'
                        />
                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setIsShowPassword((prev) => !prev)}>
                            {
                                isShowPassword ? 
                                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : 
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                            }
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Confirm Password
                            <sup className='text-pink-200'>*</sup>
                        </p>
                        <input 
                            required
                            type={showConfirmPassword ? ("text") : ("password")}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Re-enter to confirm you password'
                            value={formData.confirmPassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full 
                            p-[12px]'
                        />
                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {
                                showConfirmPassword ?  
                                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : 
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                            }
                        </span>
                    </label>
                </div>

                <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900
                px-[12px] py-[8px] mt-6'>
                    Sign Up
                </button>
                
            </form>

        </div>
    );
}

export default SignupForm