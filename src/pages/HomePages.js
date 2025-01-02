import React from "react";
import {useNavigate} from 'react-router-dom'
const HomePages = () => {
  const navigate = useNavigate()
  const Login = ()=>{
    navigate("/pages/login")
  }
  return (
    <div className="min-h-screen ">
      <main className="bg-batik bg-center bg-cover bg-no-repeat flex justify-center items-center min-h-screen bg-cover bg-center">
        <section className="w-[680px] h-[680px] flex justify-center items-center flex-col gap-2">
          <h1 className="text-3xl font-bold text-white">Welcome to Admin Panel</h1>
          <p className="text-white">This is the Admin Panel where you can manage your content</p>
          <button onClick={Login} className="text-1xl font-bold text-cyan-500  bg-white -cyan-600 p-3 rounded-[5px] hover:bg-cyan-600 hover:text-white">Get Started</button>
        </section>
      </main>
    </div>
  );
};

export default HomePages;
