import React, { useReducer, useState } from "react";
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

        
            setSkills([...skills, skill]);
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

    console.log(props.skills);

    return(
        <div className="flex flex-col w-full p-5">
            <div>

                {/* <label>Name</label> */}
                {props.skills.map((v,k) => {
                    return  (
                        <div className="flex items-center">
                            <span className="text-green-500 absolute pr-2"><i className="fa fa-check" aria-hidden="true"></i></span>
                            <input className="block  pl-8 p-2 h-8 text-gray-600 font-bold  bg-white border-b-2 w-3/6 focus:outline-none" value={v} placeholder=""></input>
                        </div>
                    )

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


