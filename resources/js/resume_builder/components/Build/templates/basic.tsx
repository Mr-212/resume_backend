import React, { useEffect } from "react";
import { useAppSelector } from "../../../store/hooks";



 const TemplateBasic: React.FC = () => {

    const profile = useAppSelector(state => state.profile.profile);
    const skills = useAppSelector(state => state.skills.skills);
    const education = useAppSelector(state => state.education);
    useEffect(() => {
        // console.log(skills);
    },[profile, skills]);
    const scoreArray = {0: "Fresh ",25: "Starter", 50: "Intermediate", 75: "Professional", 100: "Expert"};


    return(
    
        <div className="border border-gray-300 rounded-sm bg-white shadow-lg">
        <header className="flex flex-row border-b-2 bg-gray-100 p-4">
            <div className="flex flex-row space-y-4 w-4/6">
                <div className="flex flex-row w-full justify-start">
                    <div className="text-start">
                    <ul className="flex flex-row justify-start pl-2 gap-x-2">
                            <li>
                            <a href={profile.linkedin_url}
                                    className=""
                                    target="_blank">
                            <svg
                                className="w-6 h-6 text-blue-500 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                ></path>
                                </svg>
                                </a>
                            </li>
                            <li>
                            <a href={profile.twitter_url}
                                    className=""
                                    target="_blank">
                                <svg
                                className="w-6 h-6 text-blue-300 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                />
                                </svg>
                                </a>
                            </li>
                            <li>
                                <a href={profile.github_url}
                                    className=""
                                    target="_blank">
                                    <svg className="w-6 h-6 text-blue-300 fill-current" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 32 447.99999999999994 448" xmlns="http:www.w3.org/2000/svg" width="2500"
                                        height="2321">
                                        <g fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
                                                fill="currentColor" />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <ul className="mt-2 mb-2">
                            <li className="px-2 mt-1">
                                <h1 className="text-2xl font-extrabold">{profile?.first_name}</h1>
                            </li>
                            <li className="px-2 mt-1">
                                <h1 className="text-2xl font-extrabold text-gray-600">{profile?.job_title}</h1>
                            </li>
                            <li className="px-2 mt-1"><strong className="mr-1">Phone </strong>
                                <a href="tel:+821023456789" className="block">{profile.phone}</a>
                            </li>
                            <li className="px-2 mt-1"><strong className="mr-1">E-mail </strong>
                                <a href="mailto:" className="block">{profile.email}</a>
                            </li>
                            <li className="px-2 mt-1"><strong className="mr-1">Location</strong>
                            <span className="block">{profile.address}</span>
                            </li>
                        </ul>


                       
                    </div>
                    <div className="text-right">
                   
                        
                    </div>
                    
                    
                    
            
                </div>
            </div>

            <div className="w-2/6 border-l-2 pl-2 mt-2">
                <div className="bg-cover bg-no-repeat rounded-full h-52 w-52 border"
                                // style="background-image: url(../bootstrap/dog.jpg)"
                            >IMAGE
                </div>
            </div>
        </header>
        <main className="flex flex-row gap-x-4 px-4 pt-3">
            <div className="jsutify-start items-start w-2/6 border-r-2 pr-2">
{/* 
                <strong className="text-xl font-medium ">Github Stats</strong>
                <ul className="flex w-full mt-2 mb-10">
                    <li className="px-2 mt-2 w-4/12 bg-pink-600 text-white text-center rounded-tl-lg rounded-bl-lg">HTML
                    </li>
                    <li className="px-2 mt-2 w-4/12 bg-blue-600 text-white text-center">CSS</li>
                    <li className="px-2 mt-2 w-5/12 bg-yellow-500 text-white text-center rounded-tr-lg rounded-br-lg">JS
                    </li>

                </ul> */}
                <div className="flex flex-col justify-center items-center w-full mb-10">
                    <div className="text-left border-b-2 w-full pl-6 gap-x-2">
                        <strong className="text-md font-bold">Skills</strong>
                    </div>
                    <ul className="flex flex-col justify-start items-start w-full">
                        {Object.entries(skills).map(([key, val]) => {
                            // console.log(key, val)
                            return (
                                <div className="flex flex-col items-start gap-y-1 w-full mt-1">
                                    <div className="w-full text-left">
                                        <span className="text-green-500"><i className="fa fa-check" aria-hidden="true"></i></span>
                                        <span className="px-2 text-gray-700">{key}</span>
                                    </div>

                                    <div className="w-full text-left ml-6"><input className="w-4/5 h-1 bg-green-400 rounded-sm cursor-pointer dark:bg-gray-700"  type="range" min="0" max="100" step="25" value={val['score']} /></div>
                                    {/* <span className="block h-8 w-1/3 font-bold text-sky-400">{scoreArray[val['score']]}</span> */}
                                </div>

                                )
                        })}
                    </ul>
                </div>
                <strong className="text-xl font-medium">Further Education</strong>
                <ul className="mt-2 mb-10">
                    <li className="px-2 mt-1">Like Lion Frontend School</li>
                    <li className="px-2 mt-1">Udemy</li>
                    <li className="px-2 mt-1">Freecodecamp</li>
                </ul>
               
               
                <strong className="text-xl font-medium">Currently learning</strong>
                <ul className="mt-2 mb-10">
                    <li className="px-2 mt-1">About Web Accessibility</li>
                    <li className="px-2 mt-1">and User Experience</li>
                </ul>
                <strong className="text-xl font-medium">Interests & Hobbies</strong>
                <ul className="mt-2">
                    <li className="px-2 mt-1">Sustainability</li>
                    <li className="px-2 mt-1">New technologies</li>
                    <li className="px-2 mt-1">Blogging on dev.to</li>
                    <li className="px-2 mt-1">Investment</li>
                    <li className="px-2 mt-1">Travel</li>
                </ul>
            </div>
            <div className="w-4/6">
                <section>
                    <h2 className="text-md text-left border-b-2 font-bold">About Myself</h2>
                    <p className="mt-3 text-sm text-left">
                        {profile.job_description}
                    
                        </p>

                </section>

                <section>
                    <h2 className="text-left text-md mt-6 border-b font-semibold">Education Details</h2>
                    <ul className="mt-2">
                        {education.map((education,k) => {

                            return (
                                <li className="pt-1">
                                     <p className="flex justify-between text-sm"><strong className="font-bold italic text-gray-500">{education.qualification}</strong>{education.start_date + '-'+ education.end_date}</p>
                                     <p className="flex justify-between text-sm">{education.institution}<small className="font-bold">{education.gpa_marks}</small></p>
                                </li>
                            )

                        }) 
                        }
                        
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg text-left mt-6 pb-1 border-b-2 font-semibold">Work Experience</h2>
                    <ul className="mt-1">
                        <li className="py-2">
                            <div className="flex justify-between my-1">
                                <strong>Rules of 10000 hours</strong>
                                <p className="flex">
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">JS</span>
                                </p>
                            </div>
                            <ul className="flex mb-2">
                                <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Live</a>
                                </li>
                                <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Code</a>
                                </li>
                            </ul>
                            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                                delectus labore enim in minus quod vero dignissimos et, ratione obcaecati quis
                                maiores? Voluptatem, natus cupiditate perferendis omnis ex hic incidunt!
                                Earum dolore cupiditate sed et maxime distinctio iure fugiat aspernatur at veniam
                                laudantium eveniet corporis dicta reiciendis quod consequatur, labore perferendis
                                dolorum velit quibusdam minus iste dolorem! Officiis, obcaecati maxime</p>
                        </li>
                        <li className="py-2">
                            <div className="flex justify-between my-1">
                                <strong>Vending Machine</strong>
                                <p className="flex">
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">JS</span>
                                </p>
                            </div>
                            <ul className="flex mb-2">
                                <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Live</a>
                                </li>
                                <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Code</a>
                                </li>
                            </ul>
                            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                                expedita illum optio porro suscipit rerum labore veritatis autem eum totam veniam
                                repudiandae repellendus perspiciatis eligendi sequi maiores, cum ipsa ut!
                                Dolorum aliquid quaerat, dolore nemo, vero alias non porro quam totam impedit
                                repellat voluptas, nobis harum quae dolorem accusantium consequatur. Recusandae
                                cupiditate possimus natus consequuntur aliquid, molestias provident saepe nobis.
                            </p>
                        </li>
                        <li className="py-2">
                            <div className="flex justify-between my-1">
                                <strong>Landing Page</strong>
                                <p className="flex">
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">React</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">Node.js</span>
                                </p>
                            </div>
                            <ul className="flex mb-2">
                                <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Live</a>
                                </li>
                                <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Code</a>
                                </li>
                            </ul>
                            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                                odio autem non possimus adipisci, sed sequi culpa ipsa necessitatibus repellat
                                rerum. Obcaecati nobis modi voluptate nam minus praesentium soluta voluptatibus!
                                Minima temporibus deserunt laborum, expedita ad molestiae perferendis? Ipsa aut,
                                necessitatibus expedita rem iure minus sit voluptates magni, sequi eum architecto
                                excepturi tempora dolorum soluta quam odit amet nobis incidunt.</p>
                        </li>
                        <li className="py-2">
                            <div className="flex justify-between my-1">
                                <strong>Gamgyul Market</strong>
                                <p className="flex">
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">React</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">Node.js</span>
                                </p>
                            </div>
                            <ul className="flex mb-2">
                                <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Live</a>
                                </li>
                                <li><a href="#" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Code</a>
                                </li>
                            </ul>
                            <p className="text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
                                suscipit soluta at doloremque ipsa unde, doloribus beatae delectus odio dolorum
                                consequatur libero esse ratione nostrum nihil quaerat alias cupiditate assumenda?
                                Nesciunt unde aliquid quam quisquam excepturi deserunt ipsa doloremque culpa itaque.
                                Esse consectetur odit est laboriosam facilis! Accusamus inventore vel magni sed
                                aliquid! Aspernatur dolores, nam id fugit ad aliquam.
                            </p>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Work Experiences</h2>
                    <ul className="mt-2">
                        <li className="pt-2">
                            <p className="flex justify-between text-sm"><strong className="text-base">Company
                                    Name</strong>2019-2021</p>
                            <p className="flex justify-between text-base">Job title<small>location</small></p>
                            <p className="text-justify text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorum, expedita exercitationem, cum quisquam laboriosam voluptas aut libero
                                officiis quae natus laborum explicabo, labore nobis porro ad et soluta deleniti.
                                Rerum?
                                Voluptatibus id officiis adipisci eligendi provident minima sed. Ullam aliquid, fuga
                                nisi modi amet quasi, quod veniam eos sit culpa distinctio rem a tempora ad autem
                                soluta rerum, doloremque quas?
                            </p>
                        </li>
                        <li className="pt-2">
                            <p className="flex justify-between text-sm"><strong className="text-base">Company
                                    Name</strong>2014-2019</p>
                            <p className="flex justify-between text-base">Job title<small>location</small></p>
                            <p className="text-justify text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Delectus nemo fugiat neque tempore consectetur nihil alias ullam esse corporis fugit
                                deserunt maxime, numquam eos repellendus, deleniti quae at fuga repudiandae!
                                Perspiciatis odit nobis sunt! Natus ea reiciendis enim! Itaque possimus eaque
                                perspiciatis architecto reiciendis laboriosam voluptas corporis unde ducimus quis
                                aliquid, distinctio dolorum quo ullam a at, fugit veniam optio.
                            </p>
                        </li>
                    </ul>
                </section>
                
            </div>
        </main>
         <footer className="mt-6">
             <p className="bg-gray-600 text-white text-left text-xs pt-2">The best way to predict the future is to
                 create it. <small>- AbrahamLincoln</small>
             </p>
             <p className="bg-gray-600 text-white text-left text-sm pb-2">I am creating my future by learning new things
                 and
                 making small progresses everyday.</p>
         </footer>
         </div>
    
    )
}


export default TemplateBasic;