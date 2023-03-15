
//  const API_URL = 'http://resume_backend:8001/api';
 const API_URL = 'http://localhost:8001/api';

 export const URL_PROFILE_CREATE = API_URL + '/resume/profile'; 
 export const URL_PROFILE_GET = API_URL + '/resume/profile/'; 
 export const URL_PROFILE_UPDATE = API_URL + '/resume/'; 
 export const URL_PROFILE_DELETE = API_URL + '/resume/'; 


 export const URL_EDUCATION_CREATE = API_URL + '/resume/profile/education'; 
 export const URL_EDUCATION_GET = API_URL + '/resume/profile/'; 
 export const URL_EDUCATION_UPDATE = API_URL + '/resume/'; 
 export const URL_EDUCATION_DELETE = API_URL + '/resume/education/';


 export const getEducationIndexURL = (profile_id: string): string => {
    return URL_EDUCATION_GET+profile_id+'/education';
 }


 export const postEducationURL = (profile_id: string): string => {
    return URL_EDUCATION_GET+profile_id+'/education';
 }


 export const URL_SKILL_CREATE = API_URL + '/resume/profile/skill'; 
 export const URL_SKILL_GET = API_URL + '/resume/profile/'; 
 export const URL_SKILL_UPDATE = API_URL + '/resume/'; 
 export const URL_SKILL_DELETE = API_URL + '/resume/skill/';

 export const getSKillIndexURL = (profile_id: string): string => {
   return URL_SKILL_GET + profile_id + '/skill';
}


export const postSkillURL = (profile_id: string): string => {
   return URL_SKILL_GET + profile_id + '/skill';
}