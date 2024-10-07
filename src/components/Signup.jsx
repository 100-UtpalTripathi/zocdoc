import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
    
        if (!firstName) {
            newErrors.firstName = 'First name is required.';
        }
        if (!lastName) {
            newErrors.lastName = 'Last name is required.';
        }

        const dobRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dateOfBirth || !dobRegex.test(dateOfBirth)) {
            newErrors.dateOfBirth = 'Please enter a valid date of birth in the format dd/mm/yyyy.';
        }

        if (!sex) {
            newErrors.sex = 'Please select your sex.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Signed up successfully!");
            navigate('/');
        }
    };

    return (
        <div className="bg-[#fefeff]">
            <div className='w-[40%] mx-auto my-16 flex flex-col'>
                <h1 className='text-3xl font-bold my-3'>Create an account</h1>
                <div className='flex flex-col my-5'>
                    <p className='my-2'>Email</p>
                    <input 
                        type='email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder='' 
                        className='border border-pale-grey rounded-md p-3 w-full'/>
                    {errors.email && <p className="text-red text-sm mt-1">{errors.email}</p>}
                </div>
                <div className='flex gap-2 my-3 relative'>
                    <div className='flex-col grow'>
                        <p className="my-2">Legal First Name</p>
                        <input 
                            type='text' 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                            placeholder='' 
                            className='border border-pale-grey rounded-md p-3 w-full'/>
                        {errors.firstName && <p className="text-red text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div className='flex-col grow'>
                        <p className="my-2">Legal Last Name</p>
                        <input 
                            type='text' 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                            placeholder='' 
                            className='border border-pale-grey rounded-md p-3 w-full'/>
                        {errors.lastName && <p className="text-red text-sm mt-1">{errors.lastName}</p>}
                    </div>
                </div>
                <div className='flex flex-col my-3'>
                    <p className='my-2 font-bold'>Date of Birth</p>
                    <input 
                        type="date" 
                        value={dateOfBirth} 
                        onChange={(e) => setDateOfBirth(e.target.value)} 
                        placeholder='dd/mm/yyyy' 
                        className='border border-pale-grey rounded-md p-3'/>
                    {errors.dateOfBirth && <p className="text-red text-sm mt-1">{errors.dateOfBirth}</p>}
                </div>
                <div className='relative'>
                    <p className="my-2">Sex</p>
                    <input 
                        type="radio" 
                        name="sex" 
                        value="male" 
                        onChange={(e) => setSex(e.target.value)} />
                    <label htmlFor="male" className='ps-2'>Male</label>
                    <br/>
                    <input 
                        type="radio" 
                        id="female" 
                        name="sex" 
                        value="female" 
                        onChange={(e) => setSex(e.target.value)} />
                    <label htmlFor="female" className='ps-2'>Female</label>
                    {errors.sex && <p className="text-red text-sm mt-1">{errors.sex}</p>}
                </div>
                <div className='text-center my-5'>
                <button className="w-72 h-12 bg-orange-300 text-black rounded-md border border-black hover:bg-gray-200 mt-6 ml-4">Sign Up</button>
                </div>

                <div className='flex items-center justify-between my-5'>
                    <hr className='text-grey w-[45%]'/><p>or</p><hr className='text-grey w-[45%]'/>
                </div>
                
                
                <div className='my-5 text-center'>
                    <p className='text-grey'>Already have an account? <span className='text-black underline'><Link to="/login">Log in</Link></span></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
