import React, { ChangeEvent, useEffect, useReducer, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { add, update,remove, getRecord, getProfileSkills, postProfileSkills,updateScore, deleteProfileSkills} from "../reducers/SoftSkillReducer";





interface  SkillProps {
  
}
let skillArray = [
    'Communicative', 'Interpersonol', 'Intrapersonol','Leadership', 'Decesion Making','Pressure Hanling','Deciplined','Multitasker',
]

const defaultValues = {
    
    // profile_id: profile_id,
}

let counter = 0;

const SOftSkills = <T extends SkillProps> () => {
    const skillList = useAppSelector(state => state.softskills.softskills);
    // const skillList = [];
    // const [skillList, setSkillList] = useState({});

    // const skillArray = useAppSelector(state => state.skills.skillList);
    const profile_id = useAppSelector(state => state.profile.profile_id);

    const dispatch = useAppDispatch();
 
    useEffect(() =>{
        // dispatch(getProfileSkills());
    }, []);

    // useEffect(() => {
    //     //  console.log(skillList)

    // },[skillList])

    const submitSkills = () => {
        const skillObject = {profile_id : profile_id, skillList: skillList};
        dispatch(postProfileSkills(skillObject));

    };

    const newSkills =() => {
        const skillObject = { key: "-----", value:"", profile_id: profile_id};
        dispatch(add(skillObject));
    }

    const selectSkill = (skill: string) => {
            const skillObject = { key: skill, value:"", profile_id: profile_id};
            dispatch(add(skillObject));  
    }

   

    return(

        //<BuildLayout>
        <div className="columns-1 items-center gap-y-1">
         
            <div className="grid grid-cols-2 border-blue-300">
                <div className="col-span-2 h-10 py-2 border-blue-100  bg-blue-200 opacity-100 mb-3 shadow-lg items-center align-middle">
                    <div className="flex flex-row justify-between border-blue-300 px-10">
                        <h4 className="text-blue-800 text-md font-bold text-left">Soft Skills</h4>
                        <div>
                            <button className="text-right px-4 py-1 opacity-100 text-md text-green-600 font-bold" onClick={submitSkills}>Save</button>
                            <button className="text-right px-4 py-1 opacity-100 text-md text-green-600 font-bold" onClick={newSkills}><i className="fa fa-plus"></i></button>

                        </div>
                      
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-3">
                {skillArray.map((v,k) => {
                    return (
                            <div className="px-2 py-1.5 shadow-lg font-bold text-white bg-gray-500 hover:bg-black transition delay-150 duration-300 ease-in-out" key={k} onClick={() => selectSkill(v)}>{v}</div>
                        )

                })
                }
            </div>
            <div className="flex flex-col items-center gap-2 pt-3">
            { Object.values(skillList).map((val,key ) => {
                counter++;
                return <AddSkills skill={val} index={key} key={counter} ></AddSkills>;
            })
             }

            </div>

        
        </div>

    )

}
export default SOftSkills;

function  AddSkills(props){


    const dispatch = useAppDispatch();
    // const skillList = useAppSelector(state => state.skills);
    const skills = props.skill;
    const index = props.index;
    const[skill, setSkill] = useState(skills.key);


    const handleRangeInput = (value: number, skill: string) =>{
        
        // dispatch(updateScore({ index: index, skill: skill}));
        const obj = {index: index, skill: skill};
        // dispatch(postProfileSkills(obj));
    }

    const removeSkill = (index: number) => {
        const id = skills.id;
        if(id)
            dispatch(deleteProfileSkills(id)).then(res => {
                    if(res.status == 200)
                        dispatch(remove(index));
            });
        else
            dispatch(remove(index));


    }

    return(

        <div className="flex flex-col w-full gap-2">
         
                    <div className="flex flex-row items-center justify-between  border-b-2 bg-gray-200 opacity-100" >
                        <span className="text-blue-500 pl-4"><i className="fa fa-user-check" aria-hidden="true"></i></span>
                        <input className="block h-8 pl-12 p-2 bg-gray-200 opacity-100 font-bold focus:outline-none w-1/3" value={skill} onChange={e => setSkill(e.target.value)} placeholder=""></input>
                        <input className="block h-8 w-2/3"  type="text" value={skills.value} onChange={e => handleRangeInput(e.target.value, skill)} />
                        <span className="block h-6 w-1/3 font-bold text-gray-700 text-center">{skills.score}</span>
                        <button className="w-1/5" onClick={() => removeSkill(index)}><span className="text-lg text-red-600"><i className="fa fa-minus"></i></span></button>
                        {/* <button className="w-1/5" onClick={() => saveSkill(key['skill'])}>Save</button> */}

                    </div>
                    
        </div>
      

         
    )
    
}


