import React, { ChangeEvent, useReducer, useState } from "react";
import Dashboard from "../../Dashboard/Index";
import BuildLayout from "../BuildLayout";
import { WithHOC } from "../WithHOC";
import { useForm } from "react-hook-form";
// import { educationReducer } from "../../reducers/build/educationReducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { add, remove, getRecord} from "../reducers/educationReducer";





interface  SkillProps {
  
}
const skilArray = [
    'Laravel', '.Net', 'ReactJS','JQuery', 'MySQL','Livewire','Codeignitor','VueJS','Git','Javascript','NodeJS','AWS','Docker'
]

const defaultValues = {
    
    // profile_id: profile_id,
}

const Skills = <T extends SkillProps> () => {


    // const { register, handleSubmit, formState: {errors}} = useForm();

    // const [education_list, setList] = useState([]);
    const educationList = useAppSelector(state=>state.educationSlice);
    const dispatch = useAppDispatch();
    // const[data, setData] = useState([{}]);
    
    // const { register, handleSubmit, formState: {errors}} = useForm<EducationProps>();

    // const submitForm = handleSubmit(data => {

    //         setEducation([...education, data])
    //         console.log(education);

    // });

    const handEducationRecord = () => {

    };
    const [skills, setSkills] = useState([]); 

    const selectSkill = (skill: string) => {
        
        // console.log(skills.find(skill))
            const skillObject = { [skill] : 0}
            console.log(skillObject)
            // Object.assign(skillObject,{ skill: 0 })

        
            setSkills([...skills, skillObject]);
            // console.log(skills)
        
    }

   

    return(

        //<BuildLayout>
        <div className="columns-1 items-center gap-y-1">
         
            <div className="grid grid-cols-2 border-blue-300">
                <div className="col-span-2  bg-blue-200 h-10 py-2 border-blue-100  opacity-70 mb-3 shadow-lg items-center align-middle">
                    <div className="grid grid-cols-2 border-blue-300 px-10">
                        <h4 className="text-blue-800 text-md font-bold text-left">Skills</h4>
                        <button className="text-right" onClick={add}><span className="text-xl hover:text-2xl transition-all ease-linear duration-150 font-bold text-black"><i className="fa fa-plus"></i></span></button>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center flex-wrap gap-2">
                {skilArray.map((v,k) => {
                    return (
                            <span className="px-4 py-2 shadow-lg hover:bg-white hover:text-black transition-all ease-linear duration-100 font-bold text-white bg-gray-500" onClick={() => selectSkill(v)}>{v}</span>
                    )

                })
                }
            </div>
            <div className="flex flex-row items-center flex-wrap space-y-4">
                
                <AddSkills skills={skills} ></AddSkills>
            </div>

        
        </div>

    )

}
export default Skills;

function  AddSkills(props){

    const scoreArray = {25: "Starter", 50: "Intermediate", 75: "Professional", 100: "Expert"};
    const[rating, setRating] = useState(25);

    const handleRangeInput = (e: ChangeEvent<HTMLInputElement>| unknown| undefined) =>{
        setRating(e.target.value)

    }

    // console.log(props.skills);

    return(
        <div className="flex flex-col w-full pt-2">
            <div>

                {/* <label>Name</label> */}
                {props.skills.map((v,k) => {
                    return Object.entries(v).map(([skill,score]) => {
                    return  (
                        <div className="flex items-center border-b-2 bg-white pt-2 ">
                            <span className="text-green-500 absolute pl-4"><i className="fa fa-check" aria-hidden="true"></i></span>
                            <input className="block h-8 pl-12 p-2 text-gray-600 font-bold   focus:outline-none w-1/3" value={skill} placeholder=""></input>
                            <input className="block h-8 w-1/3"  type="range" min="0" max="100" step="25" value={rating} onChange={handleRangeInput} />
                            <span className="block h-8 w-1/3 font-bold text-sky-400">{scoreArray[rating]}</span>
                        </div>
                    )
                    })

                })}
                
                { props.skills.length == 0 &&
                    <input className="block p-2 h-8 text-black bg-white border-b-2 w-full focus:outline-none" placeholder="Enter Skill"></input>
                }   

            </div>
            <div>

            </div>
            
        </div>
    )
    
}


