import React, { ChangeEvent, useEffect, useReducer, useState } from "react";
import Dashboard from "../../Dashboard/Index";
import BuildLayout from "../BuildLayout";
import { WithHOC } from "../WithHOC";
import { useForm } from "react-hook-form";
// import { educationReducer } from "../../reducers/build/educationReducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { add, update,remove, getRecord, getProfileSkills, postProfileSkills, deleteProfileSkills} from "../reducers/skillReducer";
import { profile_id } from "../reducers/profileReducer";





interface  SkillProps {
  
}
let skillArray = [
    'Laravel', '.Net', 'ReactJS','JQuery', 'MySQL','Livewire','Codeignitor','VueJS','Git','Javascript','NodeJS','AWS','Docker'
]

const defaultValues = {
    
    // profile_id: profile_id,
}

const Skills = <T extends SkillProps> () => {
    const skillList = useAppSelector(state => state.skills.skills);
    const skillArray = useAppSelector(state => state.skills.skillList);
    const dispatch = useAppDispatch();
    // const [skills, setSkills] = useState([]); 

    // const[data, setData] = useState([{}]);
    
    // const { register, handleSubmit, formState: {errors}} = useForm<EducationProps>();

    // const submitForm = handleSubmit(data => {

    //         setEducation([...education, data])
    //         console.log(education);

    // });
    useEffect(() =>{
        // dispatch(getProfileSkills());
    }, []);

    useEffect(() => {
        // console.log(skillList)
        // console.log(skillArray)

    },[skillList])

    const submitSkills = () => {

        dispatch(postProfileSkills(skillList));

    };

    const selectSkill = (skill: string) => {
            // console.log(skill);
            const skillObject = { skill: skill, score: 0, profile_id: profile_id};
            // console.log(skillObject);
            // Object.assign(skillObject,{ skill: 0 })
            dispatch(add(skillObject));
            // setSkills([...skills, skillObject]);
            // console.log(skillObject);
        
    }

   

    return(

        //<BuildLayout>
        <div className="columns-1 items-center gap-y-1">
         
            <div className="grid grid-cols-2 border-blue-300">
                <div className="col-span-2  bg-blue-200 h-10 py-2 border-blue-100  opacity-70 mb-3 shadow-lg items-center align-middle">
                    <div className="grid grid-cols-2 border-blue-300 px-10">
                        <h4 className="text-blue-800 text-md font-bold text-left">Skills</h4>
                        <button className="text-right" onClick={submitSkills}><span className="text-xl hover:text-2xl transition-all ease-linear duration-150 font-bold text-black"><i className="fa fa-plus"></i></span></button>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center flex-wrap gap-2">
                {skillArray.map((v,k) => {
                    return (
                            <span className="px-4 py-2 shadow-lg hover:bg-white hover:text-black transition-all ease-linear duration-100 font-bold text-white bg-gray-500" key={k} onClick={() => selectSkill(v)}>{v}</span>
                        )

                })
                }
            </div>
            <div className="flex flex-row items-center flex-wrap space-y-4">
                
                <AddSkills skills={skillList} ></AddSkills>
            </div>

        
        </div>

    )

}
export default Skills;

function  AddSkills(props){

    const scoreArray = {0: "Fresh ",25: "Starter", 50: "Intermediate", 75: "Professional", 100: "Expert"};
    // const[rating, setRating] = useState(25);
    const dispatch = useAppDispatch();
    // const skillList = useAppSelector(state => state.skills);
    const skillList = props.skills;

    const handleRangeInput = (value: number, skill: string) =>{
        dispatch(update({skill, score: value}));
        const obj = {skill, score: value};
        // dispatch(postProfileSkills(obj));
    }

    const removeSkill = (key: string) => {
        // console.log(key);
        dispatch(deleteProfileSkills(key));

    }

    return(

        <div className="flex flex-col w-full pt-2">
            <div>

                {/* <label>Name</label> */}
                { Object.values(skillList).map((key, val) => {
                        // console.log( key, val)
                    return(
                        <div className="flex items-center border-b-2 bg-white pt-2" key={val}>
                            <span className="text-green-500 pl-4"><i className="fa fa-check" aria-hidden="true"></i></span>
                            <input className="block h-8 pl-12 p-2 text-gray-600 font-bold   focus:outline-none w-1/3" value={key['skill']}  placeholder=""></input>
                            <input className="block h-8 w-1/3"  type="range" min="0" max="100" step="25" value={key['score']} onChange={(e)=>handleRangeInput(e.target.value, key['skill'])} />
                            <span className="block h-8 w-1/3 font-bold text-sky-400">{scoreArray[key['score']]}</span>
                            <button className="pl-4" onClick={() => removeSkill(key['skill'])}><span className="text-lg text-red-600"><i className="fa fa-minus"></i></span></button>

                        </div>
                    )
                    // })

                }) }
                
                {/* { props.skills.length == 0 &&
                    <input className="block p-2 h-8 text-black bg-white border-b-2 w-full focus:outline-none" placeholder="Enter Skill"></input>
                }    */}

            </div>
            <div>

            </div>
            
        </div>
    )
    
}


